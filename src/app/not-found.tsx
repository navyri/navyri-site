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

                    <div className="not-found-panel__glitch">
                        <Image
                            className="not-found-panel__gif not-found-panel__gif--base"
                            src="/images/404/navy-404.png"
                            alt="navy 404"
                            width={300}
                            height={300}
                            unoptimized
                            priority
                        />

                        <Image
                            className="not-found-panel__gif not-found-panel__gif--ghost not-found-panel__gif--ghost-a"
                            src="/images/404/navy-404.png"
                            alt=""
                            width={300}
                            height={300}
                            unoptimized
                            aria-hidden="true"
                        />

                        <Image
                            className="not-found-panel__gif not-found-panel__gif--ghost not-found-panel__gif--ghost-b"
                            src="/images/404/navy-404.png"
                            alt=""
                            width={300}
                            height={300}
                            unoptimized
                            aria-hidden="true"
                        />
                    </div>

                    <p className="not-found-panel__hint">
                        Some sections are still under construction.
                        <br />
                        Come back soon.
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