"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getCurrentTheme(): Theme {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function SpotifyPlaylistEmbed() {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const root = document.documentElement;

        const updateTheme = () => {
            setTheme(getCurrentTheme());
        };

        updateTheme();

        const observer = new MutationObserver(updateTheme);

        observer.observe(root, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    const spotifyTheme = theme === "light" ? "1" : "0";

    return (
        <div className="spotify-playlist-preview__frame">
            <iframe
                className="spotify-playlist-preview__embed"
                src={`https://open.spotify.com/embed/playlist/3uBNKhJx8dcLKDhTQBmIJw?utm_source=generator&theme=${spotifyTheme}`}
                title="Navyri's The Marías and Not for Radio playlist"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    );
}