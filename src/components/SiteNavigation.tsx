"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/commissions", label: "COMMISSIONS" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/shop", label: "SHOP" },
    { href: "/terms", label: "TERMS" },
    { href: "/contact", label: "CONTACT" },
];

export default function SiteNavigation() {
    const pathname = usePathname();

    return (
        <nav className="site-tabs" aria-label="Primary navigation">
            {navigationItems.map((item) => {
                const isActive =
                    item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`site-tab${isActive ? " site-tab--active" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}