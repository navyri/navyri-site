"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NowPlayingData = {
    isPlaying: boolean;
    isTrack: boolean;
    title: string | null;
    artist: string | null;
    album: string | null;
    albumImageUrl: string | null;
    songUrl: string | null;
};

const EMPTY_TRACK: NowPlayingData = {
    isPlaying: false,
    isTrack: false,
    title: null,
    artist: null,
    album: null,
    albumImageUrl: null,
    songUrl: null,
};

export default function NowPlaying() {
    const [track, setTrack] = useState<NowPlayingData>(EMPTY_TRACK);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        let active = true;

        async function loadNowPlaying() {
            try {
                const response = await fetch("/api/spotify/now-playing", {
                    cache: "no-store",
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Spotify endpoint returned ${response.status}.`);
                }

                const data = (await response.json()) as NowPlayingData;

                if (active) {
                    setTrack(data);
                    setErrorMessage(null);
                }
            } catch (error) {
                const message =
                    error instanceof Error
                        ? error.message
                        : "Unknown Spotify loading error.";

                console.error("Could not load Spotify now playing:", error);

                if (active) {
                    setTrack(EMPTY_TRACK);
                    setErrorMessage(message);
                }
            } finally {
                if (active) {
                    setIsLoading(false);
                }
            }
        }

        void loadNowPlaying();

        const intervalId = window.setInterval(() => {
            void loadNowPlaying();
        }, 20_000);

        return () => {
            active = false;
            window.clearInterval(intervalId);
        };
    }, []);

    const isOffline = !isLoading && !errorMessage && !track.isTrack;
    const hasTrack = track.isTrack && !errorMessage; 

    const statusText = isLoading
        ? "checking signal..."
        : errorMessage
            ? "signal error"
            : track.isPlaying
                ? "listening now"
                : track.isTrack
                    ? "paused"
                    : "standby mode";

    const trackTitle = isLoading
        ? "Loading music..."
        : errorMessage
            ? "Could not load Spotify"
            : hasTrack
                ? track.title
                : "No transmission detected";

    const artistText = isLoading
        ? "Connecting to Spotify..."
        : errorMessage
            ? "Spotify could not be reached"
            : hasTrack
                ? `${track.artist}${track.album ? ` · ${track.album}` : ""}`
                : "The next track will appear here";

    const player = (
        <div
            className={`spotify-now-playing ${isOffline ? "spotify-now-playing--offline" : ""
                } ${errorMessage ? "spotify-now-playing--error" : ""}`}
        >
            <div
                className={`spotify-now-playing__vinyl ${track.isPlaying ? "spotify-now-playing__vinyl--spinning" : ""
                    }`}
                aria-hidden="true"
            >
                {track.albumImageUrl ? (
                    <Image
                        className="spotify-now-playing__cover"
                        src={track.albumImageUrl}
                        alt=""
                        width={160}
                        height={160}
                        sizes="70px"
                    />
                ) : (
                    <div className="spotify-now-playing__cover spotify-now-playing__cover--empty" />
                )}

                <span className="spotify-now-playing__label" />
            </div>

            <div className="spotify-now-playing__copy">
                <span className="now-playing-panel__status">
                    <span
                        className={`now-playing-panel__dot ${track.isPlaying && !errorMessage
                            ? "now-playing-panel__dot--active"
                            : ""
                            }`}
                        aria-hidden="true"
                    />
                    {statusText}
                </span>

                <p className="now-playing-panel__track">{trackTitle}</p>

                <span className="now-playing-panel__meta">{artistText}</span>
            </div>
        </div>
    );

    if (!track.songUrl || errorMessage) {
        return player;
    }

    return (
        <a
            className="spotify-now-playing__link"
            href={track.songUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${track.title ?? "this track"} in Spotify`}
        >
            {player}
        </a>
    );
}