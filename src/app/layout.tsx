import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import SiteNavigation from "@/components/SiteNavigation";
import SitePreferences from "@/components/SitePreferences";

export const metadata: Metadata = {
  title: "Navyri",
  description: "Navyri — VTuber, artist, collector, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-background">
          <div className="site-shell">
            <header className="site-header">
              <div className="site-banner">
                <span className="site-banner__spark site-banner__spark--one" />
                <span className="site-banner__spark site-banner__spark--two" />
                <span className="site-banner__spark site-banner__spark--three" />

                <Image
                  className="site-banner__logo"
                  src="/images/brand/navyri-logo.png"
                  alt="Navyri"
                  width={320}
                  height={128}
                  priority
                />

                <p className="site-banner__tagline">
                  dark vtuber · artist · creator · collector
                </p>
              </div>

              <div className="site-toolbar">
                <span className="site-toolbar__label">NAVYRI.NET</span>

                <SitePreferences />
              </div>

              <SiteNavigation />
            </header>

            <div className="site-content">{children}</div>

            <footer className="site-footer">
              <div className="site-footer__identity">
                <span className="site-footer__title">NAVYRI&apos;S PERSONAL ARCHIVE </span>
                <span className="site-footer__subtitle">
                  · keep creating, keep collecting
                </span>
              </div>

              <div className="site-footer__signal">
                <span>TRANSMISSION LOG: ONLINE</span>
                <span> © {new Date().getFullYear()} Navyri</span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}