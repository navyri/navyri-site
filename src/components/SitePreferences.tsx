"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";
type Locale = "en" | "es";

export default function SitePreferences() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [locale, setLocale] = useState<Locale>("en");

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("navyri-theme");
        const storedLocale = window.localStorage.getItem("navyri-locale");

        if (storedTheme === "light" || storedTheme === "dark") {
            setTheme(storedTheme);
            document.documentElement.dataset.theme = storedTheme;
        } else {
            document.documentElement.dataset.theme = "dark";
        }

        if (storedLocale === "en" || storedLocale === "es") {
            setLocale(storedLocale);
        }
    }, []);

    function changeTheme(nextTheme: Theme) {
        setTheme(nextTheme);
        window.localStorage.setItem("navyri-theme", nextTheme);
        document.documentElement.dataset.theme = nextTheme;
    }

    function changeLocale(nextLocale: Locale) {
        setLocale(nextLocale);
        window.localStorage.setItem("navyri-locale", nextLocale);
    }

    return (
        <div className="site-preferences" aria-label="Site preferences">
            <div className="locale-switch" aria-label="Language selector">
                <span
                    className={`locale-switch__indicator locale-switch__indicator--${locale}`}
                    aria-hidden="true"
                />

                <button
                    className={`locale-switch__option ${locale === "en" ? "locale-switch__option--active" : ""
                        }`}
                    type="button"
                    onClick={() => changeLocale("en")}
                    aria-pressed={locale === "en"}
                >
                    EN
                </button>

                <button
                    className={`locale-switch__option ${locale === "es" ? "locale-switch__option--active" : ""
                        }`}
                    type="button"
                    onClick={() => changeLocale("es")}
                    aria-pressed={locale === "es"}
                >
                    ES
                </button>
            </div>

            <button
                className="theme-switch"
                type="button"
                onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
                aria-label={
                    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
                }
                title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
                <span
                    className={`theme-switch__track theme-switch__track--${theme}`}
                    aria-hidden="true"
                >
                    <span className="theme-switch__symbol theme-switch__sun">☼</span>

                    <span className="theme-switch__symbol theme-switch__moon">☾</span>

                    <span
                        className={`theme-switch__thumb theme-switch__thumb--${theme}`}
                    />
                </span>
            </button>
        </div>
    );
}