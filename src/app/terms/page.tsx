import Link from "next/link";

const quickNotes = [
    {
        label: "PERSONAL USE",
        text: "All commissions are for personal use only. Navyri retains the copyright to the artwork.",
    },
    {
        label: "CONFIRM BEFORE PAYING",
        text: "Do not send payment before the request, scope, quote, queue/slot, and payment method have been confirmed privately.",
    },
    {
        label: "DIGITAL DELIVERY",
        text: "Final files are delivered by email after full payment is received.",
    },
];

const paymentMethods = [
    {
        region: "INTERNATIONAL",
        methods: "PayPal · ARQ",
    },
    {
        region: "COLOMBIA",
        methods: "Bancolombia · Bre-B · ARQ",
    },
];

export default function TermsPage() {
    return (
        <main className="terms-page">
            <section className="terms-intro-panel" aria-labelledby="terms-title">
                <div className="terms-intro-panel__titlebar">
                    <span className="terms-intro-panel__code">COMMISSION FILE / T.O.S.</span>
                    <span className="terms-intro-panel__status">READ BEFORE REQUESTING</span>
                </div>

                <div className="terms-intro-panel__body">
                    <p className="terms-intro-panel__eyebrow">NAVYRI COMMISSIONS</p>
                    <h1 id="terms-title">~ TERMS OF SERVICE ~</h1>
                    <p className="terms-intro-panel__summary">
                        By commissioning Navyri, you agree to these Terms of Service.
                        <br />
                        Please read this file before submitting a request or sending any
                        payment.
                    </p>

                    <div className="terms-quick-notes">
                        {quickNotes.map((note) => (
                            <div className="terms-quick-note" key={note.label}>
                                <span className="terms-quick-note__label">{note.label}</span>
                                <p>{note.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <nav className="terms-index" aria-label="Terms of Service sections">
                <span className="terms-index__label">FILE INDEX</span>
                <a href="#general">01 / General terms</a>
                <a href="#payment">02 / Payment & delivery</a>
                <a href="#rights">03 / Rights & credit</a>
                <a href="#refunds">04 / Cancellations & refunds</a>
            </nav>

            <section className="terms-record" aria-label="Terms of Service details">
                <article className="terms-section" id="general">
                    <div className="terms-section__heading">
                        <span className="terms-section__number">01</span>
                        <div>
                            <p className="terms-section__eyebrow">REQUEST FILE</p>
                            <h2>GENERAL TERMS</h2>
                        </div>
                    </div>

                    <div className="terms-section__content">
                        <p>
                            By commissioning Navyri, you agree to these Terms of Service. All
                            commissions are for personal use only, and Navyri retains the
                            copyright to the artwork.
                        </p>

                        <ul className="terms-list">
                            <li>
                                Navyri may decline any request if it causes discomfort or cannot
                                be completed to an appropriate standard.
                            </li>
                            <li>
                                Each commission includes 3–5 revisions depending on the scope
                                of the requested changes.
                            </li>
                            <li>
                                Revisions are free during the sketch stage. After the sketch is
                                approved, only minimal changes may be requested. Larger changes
                                may require an additional fee.
                            </li>
                            <li>
                                Clients are responsible for providing clear references and
                                accurate commission details before work begins. References may
                                include visual examples, character details, poses, colors,
                                written descriptions, or other relevant information. By
                                submitting references or assets, the client confirms that they
                                have permission to use them for the commission.
                            </li>
                            <li>
                                Major changes to the original request, including a new
                                character, pose, concept, or commission type, may require a new
                                quote, an additional fee, or a new commission slot.
                            </li>
                            <li>
                                Confidentiality must be requested and agreed upon before work
                                begins.
                            </li>
                            <li>
                                If confidentiality is not requested before the commission
                                starts, Navyri may share the artwork or process for portfolio,
                                social media, promotional, or streaming purposes, including
                                Twitch streams.
                            </li>
                            <li>
                                If a client is unavailable during the process, the commission
                                may be paused until the required feedback or information is
                                received. Delivery estimates may be adjusted accordingly.
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="terms-section" id="payment">
                    <div className="terms-section__heading">
                        <span className="terms-section__number">02</span>
                        <div>
                            <p className="terms-section__eyebrow">PAYMENT & DELIVERY FILE</p>
                            <h2>PAYMENT & DELIVERY</h2>
                        </div>
                    </div>

                    <div className="terms-section__content">
                        <p>
                            Payment details are shared privately only after the request,
                            scope, final quote, availability/queue slot, and payment method
                            have been confirmed. Please do not send payment before receiving
                            that confirmation.
                        </p>

                        <div className="terms-payment-methods" aria-label="Payment methods">
                            {paymentMethods.map((method) => (
                                <div className="terms-payment-method" key={method.region}>
                                    <span>{method.region}</span>
                                    <strong>{method.methods}</strong>
                                </div>
                            ))}
                        </div>

                        <ul className="terms-list">
                            <li>
                                Commissions priced at $30 USD or more require a minimum 50%
                                deposit before work begins. This deposit is non-refundable once
                                work has started.
                            </li>
                            <li>
                                Commissions priced below $30 USD require full payment before
                                work begins.
                            </li>
                            <li>
                                The remaining balance for commissions with a deposit is due
                                upon completion. Final files are sent after 100% of the agreed
                                total has been paid.
                            </li>
                            <li>
                                Final delivery is digital and sent by email. The delivery email
                                includes a .zip file and a Google Drive link.
                            </li>
                            <li>
                                The Google Drive link may be removed later due to storage
                                limits. Clients are encouraged to download and save their files
                                as soon as possible; the .zip file remains attached to the
                                delivery email.
                            </li>
                            <li>
                                Rush requests and specific deadlines must be discussed before
                                the commission is accepted. If the deadline is not realistically
                                possible, Navyri may decline the request.
                            </li>
                            <li>
                                Approved rush orders or very short deadlines require an
                                additional fee based on the request complexity and available
                                turnaround time.
                            </li>
                            <li>
                                Any delivery date or turnaround estimate is provided in good
                                faith and may change if the scope changes, the client delays
                                feedback, unexpected circumstances arise, or academic
                                responsibilities affect availability.
                            </li>
                        </ul>

                        <br />

                        <p className="terms-section__supporting-note">
                            Questions about payment fees or the amount due should be resolved
                            before payment is sent.
                            <br />
                            For PayPal fee information, you can review{" "}
                            <a
                                href="https://droxpay.com/nueva-calculadora-de-comisiones-paypal/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                this PayPal fee calculator
                            </a>
                            .
                        </p>
                    </div>
                </article>

                <article className="terms-section" id="rights">
                    <div className="terms-section__heading">
                        <span className="terms-section__number">03</span>
                        <div>
                            <p className="terms-section__eyebrow">USAGE FILE</p>
                            <h2>RIGHTS & CREDIT</h2>
                        </div>
                    </div>

                    <div className="terms-section__content">
                        <ul className="terms-list">
                            <li>
                                Navyri retains the copyright and may use commissioned artwork
                                for portfolio, social media, and promotional purposes, unless
                                confidentiality was agreed upon before work began.
                            </li>
                            <li>
                                Clients receive personal-use rights only. The artwork may be
                                used for personal profiles, personal social media, and other
                                non-commercial personal purposes.
                            </li>
                            <li>
                                Commercial use, special licensing, or other business-related
                                usage must be discussed and approved before work begins.
                            </li>
                            <li>
                                Commercial use requires an additional fee of at least 50% of
                                the base commission price.
                            </li>
                            <li>
                                Source files, editable files, layered files, and working files
                                are not included by default. They are only available when
                                explicitly agreed upon before work begins and require an
                                additional fee of at least 50% of the base commission price.
                                Availability depends on the commission type and file format.
                            </li>
                            <li>
                                Please provide visible credit and a link to Navyri when using
                                the artwork online. Final delivery includes a credit panel and
                                additional instructions for social media use.
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="terms-section" id="refunds">
                    <div className="terms-section__heading">
                        <span className="terms-section__number">04</span>
                        <div>
                            <p className="terms-section__eyebrow">CANCELLATION FILE</p>
                            <h2>CANCELLATIONS & REFUNDS</h2>
                        </div>
                    </div>

                    <div className="terms-section__content">
                        <ul className="terms-list">
                            <li>
                                Refunds are not issued once work on a commission has started.
                            </li>
                            <li>
                                A client may cancel before work begins and receive a refund for
                                the payment made, excluding any PayPal fees incurred.
                            </li>
                            <li>
                                The 50% deposit for commissions priced at $30 USD or more is
                                non-refundable once work has started.
                            </li>
                        </ul>
                    </div>
                </article>
            </section>

            <aside className="terms-contact-note" aria-label="Terms reminder">
                <div>
                    <span className="terms-contact-note__label">NEED CLARIFICATION?</span>
                    <p>
                        Ask any questions about scope, payment, deadlines, confidentiality,
                        or usage rights before confirming your commission.
                    </p>
                </div>

                <Link className="terms-contact-note__action" href="/commissions">
                    ← back to commissions
                </Link>
            </aside>
        </main>
    );
}