"use client";

import { useEffect, useState } from "react";

type TwitchStatusData = {
    isLive: boolean;
    configured: boolean;
    channel: string;
    title?: string;
    gameName?: string;
    viewerCount?: number;
    message?: string;
};

const POLL_INTERVAL_MS = 60_000;

export default function TwitchStatus() {
    const [status, setStatus] = useState<TwitchStatusData | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadStatus() {
            try {
                const response = await fetch("/api/twitch/stream", {
                    cache: "no-store",
                });

                const data = (await response.json()) as TwitchStatusData;

                if (!cancelled) {
                    setStatus(data);
                }
            } catch {
                if (!cancelled) {
                    setStatus({
                        isLive: false,
                        configured: false,
                        channel: "navyri",
                        message: "Twitch status is temporarily unavailable.",
                    });
                }
            }
        }

        loadStatus();

        const intervalId = window.setInterval(loadStatus, POLL_INTERVAL_MS);

        return () => {
            cancelled = true;
            window.clearInterval(intervalId);
        };
    }, []);

    const isLive = status?.isLive === true;
    const unavailable = status?.configured === false && Boolean(status?.message);

    return (
        <div
            className={`twitch-status ${isLive
                ? "twitch-status--live"
                : "twitch-status--offline"
                }`}
            aria-live="polite"
        >
            <a
                className="twitch-status__link"
                href="https://www.twitch.tv/navyri"
                target="_blank"
                rel="noreferrer"
            >
                <span className={`twitch-status__lamp ${isLive
                    ? "twitch-status__lamp--live"
                    : ""
                    }`} />

                <span className="twitch-status__copy">
                    <span className="twitch-status__state">
                        {status === null
                            ? "CHECKING SIGNAL"
                            : isLive
                                ? "LIVE NOW"
                                : "OFFLINE"}
                    </span>

                    {isLive ? (
                        <>
                            <span className="twitch-status__title">
                                {status.title || "Live transmission active"}
                            </span>

                            <span className="twitch-status__meta">
                                {status.gameName || "Twitch stream"}
                                {typeof status.viewerCount === "number"
                                    ? ` · ${status.viewerCount} watching`
                                    : ""}
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="twitch-status__title">
                                {unavailable
                                    ? "Signal temporarily unavailable"
                                    : "No active transmission detected"}
                            </span>

                            <span className="twitch-status__meta">
                                {unavailable
                                    ? "Try again in a moment."
                                    : "Follow @navyri for the next stream."}
                            </span>
                        </>
                    )}
                </span>
            </a>
        </div>
    );
}