import Image from "next/image";
import ContactForm from "../../components/contact/ContactForm";
import ContactSchedule from "../../components/contact/ContactSchedule";

const contactChannels = [
    {
        label: "EMAIL",
        value: "navyricomms@gmail.com",
        href: "mailto:navyricomms@gmail.com",
    },
    {
        label: "DISCORD",
        value: "Navyri",
    },
    {
        label: "TIKTOK",
        value: "@navyri_",
        href: "https://www.tiktok.com/@navyri_",
    },
    {
        label: "INSTAGRAM",
        value: "@Navyri__",
        href: "https://www.instagram.com/Navyri__",
    },
    {
        label: "VGEN",
        value: "vgen.co/navyri",
        href: "https://vgen.co/navyri",
    },
    {
        label: "KO-FI",
        value: "ko-fi.com/navyri",
        href: "https://ko-fi.com/navyri",
    },
];

export default function ContactPage() {
    return (
        <main className="contact-page">
            <section className="contact-layout" aria-label="Contact options">
                <div className="contact-main">
                    <section className="contact-intro" aria-labelledby="contact-title">
                        <div className="contact-intro__titlebar">
                            <span>COMMUNICATION TERMINAL / COMMISSION INQUIRIES</span>
                            <span>CHANNELS READY</span>
                        </div>

                        <div className="contact-intro__body">
                            <p className="contact-intro__eyebrow">NAVYRI CONTACT FILE</p>
                            <h1 id="contact-title">~ CONTACT TERMINAL ~</h1>
                            <p>
                                Have a commission idea, collaboration proposal, or question?
                                Send your project details through the transmission form or use
                                one of the direct contact channels below.
                            </p>
                        </div>
                    </section>

                    <section className="contact-panel">
                        <div className="contact-panel__titlebar">
                            <span>REQUEST NOTES</span>
                            <span>READ FIRST</span>
                        </div>

                        <div className="contact-panel__body">
                            <ul className="contact-note-list">
                                <li>Describe your idea as clearly as possible.</li>
                                <li>Add references or links when they are available.</li>
                                <li>
                                    Include your preferred reply method and valid contact detail.
                                </li>
                                <li>
                                    Budget and deadline information help confirm availability.
                                </li>
                                <li>
                                    Commission availability and terms may vary by service.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <article className="contact-panel contact-panel--form">
                        <div className="contact-panel__titlebar">
                            <span>NEW COMMISSION REQUEST</span>
                            <span>REQUIRED FIELDS MARKED *</span>
                        </div>

                        <div className="contact-panel__body">
                            <ContactForm />
                        </div>
                    </article>
                </div>

                <aside className="contact-sidebar">
                    <section className="contact-panel">
                        <div className="contact-panel__titlebar">
                            <span>DIRECT CHANNELS</span>
                            <span>ONLINE</span>
                        </div>

                        <div className="contact-panel__body">
                            <ul className="contact-channel-list">
                                {contactChannels.map((channel) => (
                                    <li key={channel.label}>
                                        <span>{channel.label}</span>

                                        {channel.href ? (
                                            <a
                                                href={channel.href}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {channel.value}
                                            </a>
                                        ) : (
                                            <strong>{channel.value}</strong>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <ContactSchedule />

                    <section
                        className="contact-panel contact-operator-panel"
                        aria-labelledby="contact-operator-title"
                    >
                        <div className="contact-panel__titlebar">
                            <span>TRANSMISSION OPERATOR</span>
                            <span>FILE / NAV-CT.01</span>
                        </div>

                        <div className="contact-panel__body contact-operator-panel__body">
                            <div className="home-profile-archive contact-operator-panel__archive">
                                <Image
                                    className="profile-panel__image home-profile-archive__image contact-operator-panel__image"
                                    src="/images/avatar/navyri-contact-portrait.png"
                                    alt="Navyri's VTuber avatar"
                                    width={300}
                                    height={300}
                                />

                                <span className="home-profile-archive__code">
                                    CONTACT ARCHIVE / 01
                                </span>

                                <span className="home-profile-archive__title">
                                    Navyri contact portrait
                                </span>

                                <span className="home-profile-archive__ratio">square</span>
                            </div>

                            <div className="contact-operator-panel__details">
                                <div className="contact-operator-panel__identity">
                                    <p className="contact-operator-panel__eyebrow">
                                        DESIGNATED RECIPIENT
                                    </p>

                                    <h2 id="contact-operator-title">NAVYRI</h2>

                                    <p className="contact-operator-panel__availability">
                                        <span aria-hidden="true" />
                                        COMMISSION INQUIRIES / ONLINE
                                    </p>
                                </div>

                                <dl className="contact-operator-panel__meta">
                                    <div>
                                        <dt>REPLY WINDOW</dt>
                                        <dd>1–5 BUSINESS DAYS</dd>
                                    </div>

                                    <div>
                                        <dt>BASE SIGNAL</dt>
                                        <dd>COLOMBIA · UTC−5</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>

                    <section className="contact-panel contact-panel--status">
                        <div className="contact-panel__titlebar">
                            <span>COMMISSION STATUS</span>
                            <span>INFORMATION FILES</span>
                        </div>

                        <div className="contact-panel__body contact-status-panel__body">
                            <div className="contact-status-panel__signal">
                                <span className="contact-status-panel__lamp" aria-hidden="true" />

                                <div>
                                    <strong>INQUIRIES OPEN</strong>
                                    <span>REQUESTS CURRENTLY ACCEPTED</span>
                                </div>
                            </div>

                            <div className="contact-status-panel__message">
                                <p className="contact-status-panel__label">WHAT HAPPENS NEXT</p>

                                <p>
                                    Your request will be reviewed personally. A reply is usually sent
                                    within 1–5 business days. Sending a request does not guarantee a
                                    commission slot or availability.
                                </p>
                            </div>

                            <div className="contact-status-panel__resources">
                                <p className="contact-status-panel__label">BEFORE SENDING</p>

                                <div className="contact-status__actions">
                                    <a className="archive-action-link" href="/commissions">
                                        COMMISSION INFORMATION
                                        <span aria-hidden="true">↗</span>
                                    </a>

                                    <a className="archive-action-link" href="/terms">
                                        TERMS OF SERVICE
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </aside>
            </section>
        </main>
    );
}