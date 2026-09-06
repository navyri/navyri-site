import { NextResponse } from "next/server";

const TWITCH_LOGIN = "navyri";
const TWITCH_TOKEN_URL = "https://id.twitch.tv/oauth2/token";
const TWITCH_STREAMS_URL = "https://api.twitch.tv/helix/streams";

type TwitchTokenResponse = {
    access_token: string;
};

type TwitchStream = {
    title: string;
    game_name: string;
    viewer_count: number;
    started_at: string;
};

type TwitchStreamsResponse = {
    data: TwitchStream[];
};

export async function GET() {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        return NextResponse.json(
            {
                isLive: false,
                configured: false,
                message: "Twitch status is not configured.",
            },
            { status: 503 }
        );
    }

    try {
        const tokenResponse = await fetch(TWITCH_TOKEN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: "client_credentials",
            }),
            cache: "no-store",
        });

        if (!tokenResponse.ok) {
            throw new Error("Could not obtain a Twitch app access token.");
        }

        const tokenData = (await tokenResponse.json()) as TwitchTokenResponse;

        const streamResponse = await fetch(
            `${TWITCH_STREAMS_URL}?user_login=${TWITCH_LOGIN}`,
            {
                headers: {
                    Authorization: `Bearer ${tokenData.access_token}`,
                    "Client-Id": clientId,
                },
                cache: "no-store",
            }
        );

        if (!streamResponse.ok) {
            throw new Error("Could not retrieve Twitch stream status.");
        }

        const streamData = (await streamResponse.json()) as TwitchStreamsResponse;
        const stream = streamData.data[0];

        if (!stream) {
            return NextResponse.json(
                {
                    isLive: false,
                    configured: true,
                    channel: TWITCH_LOGIN,
                },
                {
                    headers: {
                        "Cache-Control": "no-store, max-age=0",
                    },
                }
            );
        }

        return NextResponse.json(
            {
                isLive: true,
                configured: true,
                channel: TWITCH_LOGIN,
                title: stream.title,
                gameName: stream.game_name,
                viewerCount: stream.viewer_count,
                startedAt: stream.started_at,
            },
            {
                headers: {
                    "Cache-Control": "no-store, max-age=0",
                },
            }
        );
    } catch (error) {
        console.error("Twitch stream status error:", error);

        return NextResponse.json(
            {
                isLive: false,
                configured: true,
                channel: TWITCH_LOGIN,
                message: "Twitch stream status is temporarily unavailable.",
            },
            {
                status: 502,
                headers: {
                    "Cache-Control": "no-store, max-age=0",
                },
            }
        );
    }
}