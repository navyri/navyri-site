import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type SpotifyTokenResponse = {
    access_token?: string;
    expires_in?: number;
    error?: string;
    error_description?: string;
};

type SpotifyArtist = {
    name: string;
};

type SpotifyImage = {
    url: string;
    height: number | null;
    width: number | null;
};

type SpotifyTrack = {
    name: string;
    external_urls?: {
        spotify?: string;
    };
    artists: SpotifyArtist[];
    album?: {
        name: string;
        images?: SpotifyImage[];
    };
};

type SpotifyPlaybackResponse = {
    is_playing: boolean;
    item: SpotifyTrack | null;
};

function noTrackResponse() {
    return NextResponse.json(
        {
            isPlaying: false,
            isTrack: false,
            title: null,
            artist: null,
            album: null,
            albumImageUrl: null,
            songUrl: null,
        },
        {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        },
    );
}

export async function GET() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
        return NextResponse.json(
            {
                error:
                    "Missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, or SPOTIFY_REFRESH_TOKEN.",
            },
            { status: 500 },
        );
    }

    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
        "base64",
    );

    const refreshResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
            method: "POST",
            headers: {
                Authorization: `Basic ${credentials}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            }),
            cache: "no-store",
        },
    );

    const refreshData = (await refreshResponse.json()) as SpotifyTokenResponse;

    if (!refreshResponse.ok || !refreshData.access_token) {
        return NextResponse.json(
            {
                error: "Could not refresh Spotify access token.",
                details: refreshData.error_description ?? refreshData.error,
            },
            { status: 401 },
        );
    }

    const playbackResponse = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
            headers: {
                Authorization: `Bearer ${refreshData.access_token}`,
            },
            cache: "no-store",
        },
    );

    if (playbackResponse.status === 204 || playbackResponse.status === 202) {
        return noTrackResponse();
    }

    if (!playbackResponse.ok) {
        return NextResponse.json(
            {
                error: "Could not read current Spotify playback.",
                status: playbackResponse.status,
            },
            { status: playbackResponse.status },
        );
    }

    const playbackData =
        (await playbackResponse.json()) as SpotifyPlaybackResponse;

    const track = playbackData.item;

    if (!track) {
        return noTrackResponse();
    }

    const albumImageUrl = track.album?.images?.[0]?.url ?? null;

    return NextResponse.json(
        {
            isPlaying: playbackData.is_playing,
            isTrack: true,
            title: track.name,
            artist: track.artists.map((artist) => artist.name).join(", "),
            album: track.album?.name ?? null,
            albumImageUrl,
            songUrl: track.external_urls?.spotify ?? null,
        },
        {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        },
    );
}