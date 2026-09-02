import Image from "next/image";
import Link from "next/link";

const detailedServices = [
    {
        id: "static-emotes",
        code: "SERVICE FILE / 01",
        title: "Custom static emotes",
        price: "$10–15 USD each",
        image: "/images/commissions/static-emotes.png",
        alt: "Examples of Navyri custom static emotes",
        description:
            "Custom emotes made for Twitch, Discord, WhatsApp, and other personal communities.",
        details: [
            "Includes Twitch sizes: 112px, 56px, and 28px.",
            "Ask in advance if you need a different size or platform format.",
            "Updates are provided for sketch, base colors, and final version.",
            "Changes can be requested during sketch and color stages.",
        ],
    },
    {
        id: "animated-emotes",
        code: "SERVICE FILE / 02",
        title: "Custom animated emotes",
        price: "$15–20 USD each",
        image: "/images/commissions/animated-emotes.gif",
        alt: "Examples of Navyri custom animated emotes",
        description:
            "Animated emotes created for Twitch, Discord, WhatsApp, and other personal communities.",
        details: [
            "Includes Twitch sizes: 112px, 56px, and 28px.",
            "Ask in advance if you need a different size or platform format.",
            "Updates are provided for sketch, base colors, and final version.",
            "Changes can be requested during sketch and color stages.",
        ],
    },
    {
        id: "twitch-badges",
        code: "SERVICE FILE / 03",
        title: "Custom Twitch badges",
        price: "$10–15 USD each",
        image: "/images/commissions/twitch-badges.png",
        alt: "Examples of Navyri custom Twitch badges",
        description:
            "Custom badge sets made to give Twitch communities a small, recognizable visual identity.",
        details: [
            "Includes Twitch sizes: 18px, 36px, and 72px.",
            "Ask in advance if you need another size or platform format.",
            "Updates are provided for sketch, base colors, and final version.",
            "Changes can be requested during sketch and color stages.",
        ],
    },
    {
        id: "pixel-art",
        code: "SERVICE FILE / 04",
        title: "Pixel art",
        price: "$8–20 USD each",
        image: "/images/commissions/pixel-art.png",
        alt: "Examples of Navyri pixel art commissions",
        description:
            "Pixel art for personal projects, profiles, communities, and other custom requests.",
        details: [
            "There is no default size; the preferred dimensions should be discussed before work begins.",
            "Price depends on the complexity of the request.",
            "Updates are provided for sketch, base colors, and final version.",
            "Changes can be requested during sketch and color stages.",
        ],
    },
    {
        id: "profile-pictures",
        code: "SERVICE FILE / 05",
        title: "Custom profile pictures",
        price: "$30–40 USD each",
        image: "/images/commissions/profile-pictures.png",
        alt: "Examples of Navyri custom profile picture commissions",
        description:
            "Custom profile pictures for personal accounts, creators, and online communities.",
        details: [
            "Default size: 2048px. Ask in advance if you need a different format.",
            "The more references you provide, the better.",
            "Updates are provided for sketch, base colors, and final version.",
            "Changes can be requested during sketch and color stages.",
        ],
    },
    {
        id: "ych",
        code: "SERVICE FILE / 06",
        title: "Your Character Here / YCH",
        price: "Price varies",
        image: "/images/commissions/ych.png",
        alt: "Examples of Navyri Your Character Here commissions",
        description:
            "YCH commission openings with format, size, availability, and pricing announced for each release.",
        details: [
            "Default sizes are specified in each YCH opening.",
            "Availability and final price vary by individual YCH.",
            "Updates are provided for sketch, base colors, and final version.",
            "Changes can be requested during sketch and color stages.",
        ],
    },
];

const customRequests = [
    "Chibis",
    "PNGTuber assets",
    "Banners",
    "Logos",
    "Discord server design",
    "Twitch overlays",
    "Valorant overlays",
    "Other custom digital assets",
];

const canDraw = [
    "SFW",
    "Any gender",
    "Human",
    "Chibis",
    "Fanart characters",
    "Pixel art",
];

const askBefore = [
    "NSFW",
    "Furry / non-human",
    "Human characters",
    "Animals",
    "Soft gore",
    "Weapons / armor",
    "Complex character design",
];

const cannotDraw = [
    "Mecha",
    "Muscled bodies",
    "Complex backgrounds",
    "Complex animations",
    "Complex poses",
    "Explicit gore",
];

function ServicePreview({
    image,
    alt,
    code,
    title,
}: {
    image: string;
    alt: string;
    code: string;
    title: string;
}) {
    return (
        <div className="commission-service__preview commission-service__preview--protected">
            <Image
                className="commission-service__image"
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 920px) 42vw, 31vw"
                draggable={false}
            />

            <span className="commission-service__texture" aria-hidden="true" />
            <span className="commission-service__code">{code}</span>
            <span className="commission-service__caption">{title}</span>
            <span className="commission-service__ratio">sample</span>
        </div>
    );
}

export default function CommissionsPage() {
    return (
        <main className="commissions-page">
            <section className="content-panel commissions-intro">
                <div className="introduction-heading">
                    <p className="introduction-heading__update">
                        commission archive: open for requests
                    </p>

                    <h1 className="introduction-heading__title">
                        ~ commission file / navyri ~
                    </h1>
                </div>

                <div className="commissions-intro__body">
                    <div className="commissions-intro__status">
                        <span className="commissions-intro__status-label">
                            commissions
                        </span>
                        <strong>OPEN</strong>
                        <span>international · digital delivery</span>
                    </div>

                    <div className="commissions-intro__copy">
                        <p>
                            I create anime and chibi-inspired artwork, emotes, badges, pixel
                            art, profile pictures, and custom visual assets for creators,
                            communities, and personal projects.
                        </p>

                        <p>
                            Read the service details below, then send your idea through the
                            contact form or Discord server. By requesting a commission, you
                            agree to the Terms of Service.
                        </p>

                        <div className="commissions-intro__actions">
                            <Link className="archive-action-link" href="/contact">
                                request a commission <span aria-hidden="true">↗</span>
                            </Link>

                            <a
                                className="archive-action-link"
                                href="https://discord.com/invite/Aee7t3w"
                                target="_blank"
                                rel="noreferrer"
                            >
                                join Discord server <span aria-hidden="true">↗</span>
                            </a>

                            <Link className="archive-action-link" href="/terms">
                                read T.O.S. <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-panel commissions-section">
                <div className="panel-titlebar">
                    <span>~ CAN DRAW / ASK / CAN&apos;T DRAW ~</span>
                    <span>request guide</span>
                </div>

                <div className="commissions-section__body commission-guidelines">
                    <p className="commissions-section__lead">
                        If you are unsure about an idea, feel free to ask before sending a
                        request. Final acceptance depends on the project and current
                        availability.
                    </p>

                    <div className="commission-guidelines__grid">
                        <section className="commission-guidelines__group commission-guidelines__group--yes">
                            <h2>I can draw ✓</h2>
                            <div className="about-tags">
                                {canDraw.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </section>

                        <section className="commission-guidelines__group commission-guidelines__group--ask">
                            <h2>Ask before ↺</h2>
                            <div className="about-tags">
                                {askBefore.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </section>

                        <section className="commission-guidelines__group commission-guidelines__group--no">
                            <h2>I can&apos;t draw ✗</h2>
                            <div className="about-tags">
                                {cannotDraw.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="content-panel commissions-section">
                <div className="panel-titlebar">
                    <span>~ SERVICE ARCHIVE ~</span>
                    <span>price guide / personal use</span>
                </div>

                <div className="commissions-section__body">
                    <p className="commissions-section__lead">
                        Every commission is made for personal use. Please read the Terms
                        of Service before requesting a slot.
                    </p>

                    <div className="commission-service-list">
                        {detailedServices.map((service) => (
                            <article className="commission-service" key={service.id}>
                                <ServicePreview
                                    image={service.image}
                                    alt={service.alt}
                                    code={service.code}
                                    title={service.title}
                                />

                                <div className="commission-service__details">
                                    <div className="commission-service__heading">
                                        <h2>{service.title}</h2>
                                        <span>{service.price}</span>
                                    </div>

                                    <p>{service.description}</p>

                                    <ul>
                                        {service.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>

                                    <Link
                                        className="commission-service__terms-link"
                                        href="/terms"
                                    >
                                        read full T.O.S. <span aria-hidden="true">↗</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-panel commissions-section">
                <div className="panel-titlebar">
                    <span>~ CUSTOM REQUESTS ~</span>
                    <span>quote required</span>
                </div>

                <div className="commissions-section__body">
                    <p className="commissions-section__lead">
                        Available by request, ask for a quote and project details. Format,
                        price, and delivery details are confirmed privately before work begins.
                    </p>

                    <div className="commission-request-grid">
                        {customRequests.map((request, index) => (
                            <article className="commission-request-card" key={request}>
                                <span className="commission-request-card__code">
                                    REQUEST FILE / {String(index + 7).padStart(2, "0")}
                                </span>

                                <div className="commission-request-card__body">
                                    <span className="commission-request-card__mark">+</span>
                                    <h2>{request}</h2>
                                    <p>Available by request — ask for a quote and project details.</p>
                                </div>

                                <span className="commission-request-card__status">quote required</span>
                            </article>
                        ))}
                    </div>

                    <div className="commission-request-grid__action">
                        <Link className="archive-action-link" href="/contact">
                            ask for a custom quote <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="commissions-bottom-grid">
                <section className="content-panel commissions-section commission-process-panel">
                    <div className="panel-titlebar">
                        <span>~ PROCESS FILE ~</span>
                        <span>how it works</span>
                    </div>

                    <div className="commissions-section__body">
                        <ol className="commission-process-list">
                            <li>
                                <span>01</span>
                                <div>
                                    <strong>Request &amp; confirmation</strong>
                                    <p>
                                        Send your idea, references, preferred format, and any important
                                        details through Discord or the contact form.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <span>02</span>
                                <div>
                                    <strong>Payment &amp; queue</strong>
                                    <p>
                                        The project details and payment arrangement are confirmed before
                                        your commission enters the queue.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <span>03</span>
                                <div>
                                    <strong>Sketch review</strong>
                                    <p>
                                        Major edits and changes should be requested during the sketch
                                        stage.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <span>04</span>
                                <div>
                                    <strong>Base colors &amp; final details</strong>
                                    <p>
                                        You receive progress updates while the artwork is being refined.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <span>05</span>
                                <div>
                                    <strong>Final delivery</strong>
                                    <p>
                                        Final digital files are sent after the complete payment is
                                        received.
                                    </p>
                                </div>
                            </li>
                        </ol>

                        <div className="commission-process-panel__footer">
                            <Link className="archive-action-link" href="/terms">
                                read full Terms of Service <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="content-panel commissions-section commission-payment-panel">
                    <div className="panel-titlebar">
                        <span>~ PAYMENT &amp; DELIVERY ~</span>
                        <span>secure payment routes</span>
                    </div>

                    <div className="commissions-section__body">
                        <div className="commission-payment-status" aria-label="Payment availability">
                            <span className="commission-payment-status__lamp" aria-hidden="true" />
                            <span>PAYMENT METHODS AVAILABLE</span>
                            <span className="commission-payment-status__meta">confirmed privately</span>
                        </div>

                        <dl className="commission-payment-list">
                            <div>
                                <dt>international</dt>
                                <dd>
                                    <span>PayPal</span>
                                    <span aria-hidden="true">·</span>
                                    <span>ARQ</span>
                                </dd>
                            </div>

                            <div>
                                <dt>Colombia</dt>
                                <dd>
                                    <span>Bancolombia</span>
                                    <span aria-hidden="true">·</span>
                                    <span>Bre-B</span>
                                    <span aria-hidden="true">·</span>
                                    <span>ARQ</span>
                                </dd>
                            </div>
                        </dl>

                        <p className="commission-payment-disclosure">
                            Payment details are shared only after the request, scope, and price have
                            been confirmed. Please do not send payment before receiving confirmation.
                        </p>

                        <div className="commission-payment-guidance">
                            <div className="commission-payment-note">
                                <div className="commission-payment-note__head">
                                    <span className="commission-payment-note__icon" aria-hidden="true">
                                        ↓
                                    </span>
                                    <p className="about-panel__label">digital delivery</p>
                                </div>

                                <p>
                                    Final artwork is delivered digitally after the full payment has been
                                    received. You will receive the agreed file format and resolution for
                                    the commissioned service.
                                </p>
                            </div>

                            <div className="commission-payment-note">
                                <div className="commission-payment-note__head">
                                    <span className="commission-payment-note__icon" aria-hidden="true">
                                        ©
                                    </span>
                                    <p className="about-panel__label">personal use</p>
                                </div>

                                <p>
                                    Your commission is for personal use. Navyri keeps the copyright;
                                    commercial use, confidentiality, rush deadlines, or special licensing
                                    must be discussed and approved before work begins.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main >
    );
}