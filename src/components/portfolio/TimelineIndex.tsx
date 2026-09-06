"use client";

import {
    MouseEvent,
    useEffect,
    useState,
} from "react";

type TimelineIndexProps = {
    years: number[];
    folderKey: string;
    label: string;
};

function getOpenYears(folderKey: string, years: number[]) {
    return years.filter((year) => {
        const target = document.getElementById(`${folderKey}-${year}`);

        return target instanceof HTMLDetailsElement && target.open;
    });
}

function scrollToYear(target: HTMLDetailsElement) {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
    });
}

export default function TimelineIndex({
    years,
    folderKey,
    label,
}: TimelineIndexProps) {
    const [openYears, setOpenYears] = useState<number[]>([]);

    useEffect(() => {
        function updateOpenYears() {
            setOpenYears(getOpenYears(folderKey, years));
        }

        function openYearFromHash() {
            const targetId = window.location.hash.slice(1);

            if (!targetId.startsWith(`${folderKey}-`)) {
                return false;
            }

            const target = document.getElementById(targetId);

            if (!(target instanceof HTMLDetailsElement)) {
                return false;
            }

            target.open = true;

            requestAnimationFrame(() => {
                scrollToYear(target);
            });

            return true;
        }

        const details = years
            .map((year) => document.getElementById(`${folderKey}-${year}`))
            .filter(
                (target): target is HTMLDetailsElement =>
                    target instanceof HTMLDetailsElement,
            );

        const handleToggle = () => {
            updateOpenYears();
        };

        details.forEach((detail) => {
            detail.addEventListener("toggle", handleToggle);
        });

        updateOpenYears();
        openYearFromHash();

        return () => {
            details.forEach((detail) => {
                detail.removeEventListener("toggle", handleToggle);
            });
        };
    }, [folderKey, years]);

    function handleYearClick(event: MouseEvent<HTMLAnchorElement>, year: number) {
        event.preventDefault();

        const targetId = `${folderKey}-${year}`;
        const target = document.getElementById(targetId);

        if (!(target instanceof HTMLDetailsElement)) {
            return;
        }

        const willOpen = !target.open;

        target.open = willOpen;

        if (!willOpen) {
            window.history.replaceState(
                null,
                "",
                `${window.location.pathname}${window.location.search}`,
            );
            setOpenYears(getOpenYears(folderKey, years));
            return;
        }

        window.history.replaceState(null, "", `#${targetId}`);

        requestAnimationFrame(() => {
            scrollToYear(target);
            setOpenYears(getOpenYears(folderKey, years));
        });

        requestAnimationFrame(() => {
            scrollToYear(target);
            setOpenYears(getOpenYears(folderKey, years));
        });
    }

    return (
        <nav className="portfolio-timeline-index" aria-label={label}>
            <span className="portfolio-timeline-index__label">
                TIMELINE INDEX
            </span>

            <div className="portfolio-timeline-index__years">
                {years.map((year) => {
                    const targetId = `${folderKey}-${year}`;
                    const isOpen = openYears.includes(year);

                    return (
                        <a
                            className={isOpen ? "portfolio-timeline-index__year--open" : undefined}
                            href={`#${targetId}`}
                            key={year}
                            aria-current={isOpen ? "true" : undefined}
                            onClick={(event) => handleYearClick(event, year)}
                        >
                            {year}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}