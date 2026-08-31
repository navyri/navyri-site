import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="not-found-page">
            <section className="content-panel not-found-panel">
                <div className="panel-titlebar">
                    <span>~ LOST IN THE VOID ~</span>
                    <span>ERROR 404</span>
                </div>

                <div className="not-found-panel__body">
                    <p className="not-found-panel__code">404</p>

                    <div className="not-found-panel__copy">
                        <h1>~ this page vanished into the night ~</h1>

                        <p>
                            The page you are looking for does not exist yet, moved somewhere
                            else, or got lost in Navyri&apos;s little corner of the internet.
                        </p>
                    </div>

                    <Image
                        className="not-found-panel__gif"
                        src="/images/404/starlight-walk.gif"
                        alt="Starlight Glimmer walking"
                        width={288}
                        height={200}
                        unoptimized
                        priority
                    />

                    <p className="not-found-panel__hint">
                        Some sections are still under construction. Come back soon.
                    </p>

                    <div className="not-found-panel__actions">
                        <Link className="not-found-panel__link" href="/">
                            Return home
                        </Link>
                    </div>

                    <p className="not-found-panel__signal" aria-hidden="true">
                        [ signal lost · 0x000404 · reconnecting... ]
                    </p>
                </div>
            </section>
        </main>
    );
}