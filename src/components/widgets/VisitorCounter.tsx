"use client";

import { useEffect, useState } from "react";

type VisitsResponse = {
    visits: number | null;
};

export default function VisitorCounter() {
    const [visits, setVisits] = useState<number | null>(null);

    useEffect(() => {
        let active = true;

        async function loadVisits() {
            try {
                const response = await fetch("/api/visits", {
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error("Could not load visit count.");
                }

                const data = (await response.json()) as VisitsResponse;

                if (active) {
                    setVisits(data.visits);
                }
            } catch (error) {
                console.error("Could not load visitor counter:", error);

                if (active) {
                    setVisits(null);
                }
            }
        }

        void loadVisits();

        return () => {
            active = false;
        };
    }, []);

    const value =
        visits === null
            ? "—"
            : new Intl.NumberFormat("en-US", {
                minimumIntegerDigits: 6,
                useGrouping: true,
            }).format(visits);

    return (
        <output className="visitor-counter__value" aria-label="Total site visits">
            {value}
        </output>
    );
}