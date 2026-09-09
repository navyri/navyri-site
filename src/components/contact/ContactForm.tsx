"use client";

import {
    FormEvent,
    useMemo,
    useState,
} from "react";
import DeadlineCalendar from "./DeadlineCalendar";

const commissionTypes = [
    "Static emotes",
    "Animated emotes",
    "Normal badges",
    "Pixel badges",
    "Normal profile picture / icon",
    "Pixel profile picture / icon",
    "Normal PNGTuber",
    "Pixel PNGTuber",
    "YCH emotes",
    "Banner",
    "Stream overlay",
    "Stream panel",
    "Stream alert",
    "Character illustration",
    "Chibi illustration",
    "Custom request",
    "Other",
];

const replyMethods = [
    "Email",
    "Discord",
    "X (Twitter)",
    "Instagram",
    "TikTok",
    "Ko-fi",
    "VGen",
    "Other",
];

const budgetRanges = [
    "I’m not sure yet",
    "Under $15 USD",
    "$15–$30 USD",
    "$30–$50 USD",
    "$50–$75 USD",
    "$75–$100 USD",
    "$100+ USD",
    "Custom budget",
];

const deadlineOptions = [
    "I don’t have a deadline in mind",
    "Within 1 week",
    "Within 2 weeks",
    "Within 1 month",
    "More than 1 month from now",
    "I have a specific date",
];

type FormStatus = "idle" | "sending" | "success" | "error";

type FieldName =
    | "name"
    | "replyMethod"
    | "contactDetail"
    | "commissionType"
    | "otherCommissionType"
    | "budgetRange"
    | "customBudget"
    | "deadline"
    | "specificDeadline"
    | "details"
    | "termsAccepted";

type ValidationError = {
    field: FieldName;
    message: string;
};

function getContactFieldLabel(replyMethod: string) {
    const labels: Record<string, string> = {
        Email: "Email address",
        Discord: "Discord username",
        "X (Twitter)": "X username or profile link",
        Instagram: "Instagram username or profile link",
        TikTok: "TikTok username or profile link",
        "Ko-fi": "Ko-fi username or profile link",
        VGen: "VGen username or profile link",
        Other: "Contact details",
    };

    return labels[replyMethod] ?? "Contact handle or address";
}

function getContactPlaceholder(replyMethod: string) {
    const placeholders: Record<string, string> = {
        Email: "name@example.com",
        Discord: "username",
        "X (Twitter)": "@username or x.com/username",
        Instagram: "@username or instagram.com/username",
        TikTok: "@username or tiktok.com/@username",
        "Ko-fi": "ko-fi.com/username",
        VGen: "vgen.co/username",
        Other: "Please specify your preferred contact method",
    };

    return placeholders[replyMethod] ?? "@username, email address, or profile URL";
}

function getValue(formData: FormData, key: string) {
    const value = formData.get(key);

    return typeof value === "string" ? value.trim() : "";
}

function getFormError(formData: FormData): ValidationError | null {
    const name = getValue(formData, "name");
    const replyMethod = getValue(formData, "replyMethod");
    const contactDetail = getValue(formData, "contactDetail");
    const commissionType = getValue(formData, "commissionType");
    const otherCommissionType = getValue(formData, "otherCommissionType");
    const budgetRange = getValue(formData, "budgetRange");
    const customBudget = getValue(formData, "customBudget");
    const deadline = getValue(formData, "deadline");
    const specificDeadline = getValue(formData, "specificDeadline");
    const details = getValue(formData, "details");
    const termsAccepted = formData.get("termsAccepted") === "on";

    if (!name) {
        return {
            field: "name",
            message: "Please enter your name or alias.",
        };
    }

    if (!replyMethod) {
        return {
            field: "replyMethod",
            message: "Select your preferred reply method.",
        };
    }

    if (!contactDetail) {
        return {
            field: "contactDetail",
            message: "Provide a valid way for Navyri to contact you.",
        };
    }

    if (
        replyMethod === "Email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetail)
    ) {
        return {
            field: "contactDetail",
            message: "Enter a valid email address for your reply method.",
        };
    }

    if (!commissionType) {
        return {
            field: "commissionType",
            message: "Select the commission type you are interested in.",
        };
    }

    if (commissionType === "Other" && !otherCommissionType) {
        return {
            field: "otherCommissionType",
            message: "Describe the commission type you need.",
        };
    }

    if (!budgetRange) {
        return {
            field: "budgetRange",
            message: "Select a budget range or choose “I’m not sure yet.”",
        };
    }

    if (budgetRange === "Custom budget" && !customBudget) {
        return {
            field: "customBudget",
            message: "Enter the budget you have in mind.",
        };
    }

    if (!deadline) {
        return {
            field: "deadline",
            message:
                "Select a deadline option or choose “I don’t have a deadline in mind.”",
        };
    }

    if (deadline === "I have a specific date" && !specificDeadline) {
        return {
            field: "specificDeadline",
            message: "Select the requested deadline date.",
        };
    }

    if (deadline === "I have a specific date") {
        const [year, month, day] = specificDeadline.split("-").map(Number);
        const selectedDate = new Date(year, month - 1, day);
        const currentDate = new Date();
        const today = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
        );

        if (selectedDate < today) {
            return {
                field: "specificDeadline",
                message: "Choose today or a future date for your requested deadline.",
            };
        }
    }

    if (!details) {
        return {
            field: "details",
            message: "Tell me a little about your commission idea.",
        };
    }

    if (!termsAccepted) {
        return {
            field: "termsAccepted",
            message: "Read and accept the Terms of Service to send your request.",
        };
    }

    return null;
}

function scrollToField(fieldName: FieldName) {
    const field = document.querySelector<HTMLElement>(
        `[data-contact-field="${fieldName}"]`,
    );

    if (!field) {
        return;
    }

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    field.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
    });

    const control = field.querySelector<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement
    >("input, select, textarea, button");

    requestAnimationFrame(() => {
        control?.focus();
    });
}

export default function ContactForm() {
    const [commissionType, setCommissionType] = useState("");
    const [replyMethod, setReplyMethod] = useState("");
    const [budgetRange, setBudgetRange] = useState("");
    const [deadline, setDeadline] = useState("");
    const [specificDeadline, setSpecificDeadline] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [validationError, setValidationError] =
        useState<ValidationError | null>(null);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [message, setMessage] = useState("");

    const contactFieldLabel = useMemo(
        () => getContactFieldLabel(replyMethod),
        [replyMethod],
    );

    const contactPlaceholder = useMemo(
        () => getContactPlaceholder(replyMethod),
        [replyMethod],
    );

    function clearFieldError(field: FieldName) {
        setValidationError((currentError) =>
            currentError?.field === field ? null : currentError,
        );
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const error = getFormError(formData);

        if (error) {
            setStatus("idle");
            setMessage("");
            setValidationError(error);
            scrollToField(error.field);
            return;
        }

        setValidationError(null);
        setStatus("sending");
        setMessage("");

        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message ?? "Unable to send your request.");
            }

            form.reset();
            setCommissionType("");
            setReplyMethod("");
            setBudgetRange("");
            setDeadline("");
            setSpecificDeadline("");
            setTermsAccepted(false);
            setStatus("success");
            setMessage(
                "Request transmitted successfully. Navyri will reply through your selected contact method.",
            );
        } catch (error) {
            setStatus("error");
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to send your request. Please try again later.",
            );
        }
    }

    const errorMessage = validationError?.message;

    return (
        <form className="contact-form" noValidate onSubmit={handleSubmit}>
            {errorMessage && (
                <div className="contact-form__validation" role="alert">
                    <span aria-hidden="true">!</span>
                    <div>
                        <strong>MISSING REQUIRED DATA</strong>
                        <p>{errorMessage}</p>
                    </div>
                </div>
            )}

            <div className="contact-form__grid">
                <label
                    className={`contact-field ${validationError?.field === "name"
                        ? "contact-field--invalid"
                        : ""
                        }`}
                    data-contact-field="name"
                >
                    <span>Name or alias <em>*</em></span>
                    <input
                        autoComplete="name"
                        name="name"
                        placeholder="How should I address you?"
                        type="text"
                        onInput={() => clearFieldError("name")}
                    />
                </label>

                <label
                    className={`contact-field ${validationError?.field === "replyMethod"
                        ? "contact-field--invalid"
                        : ""
                        }`}
                    data-contact-field="replyMethod"
                >
                    <span>Preferred reply method <em>*</em></span>
                    <select
                        name="replyMethod"
                        value={replyMethod}
                        onChange={(event) => {
                            setReplyMethod(event.target.value);
                            clearFieldError("replyMethod");
                        }}
                    >
                        <option value="">Select a platform</option>
                        {replyMethods.map((method) => (
                            <option key={method} value={method}>
                                {method}
                            </option>
                        ))}
                    </select>
                </label>

                <label
                    className={`contact-field contact-field--wide ${validationError?.field === "contactDetail"
                        ? "contact-field--invalid"
                        : ""
                        }`}
                    data-contact-field="contactDetail"
                >
                    <span>{contactFieldLabel} <em>*</em></span>
                    <input
                        key={replyMethod}
                        name="contactDetail"
                        placeholder={contactPlaceholder}
                        type={replyMethod === "Email" ? "email" : "text"}
                        onInput={() => clearFieldError("contactDetail")}
                    />
                    <small>
                        Please provide a valid detail so I can reply through your preferred method.
                    </small>
                </label>

                <label
                    className={`contact-field ${validationError?.field === "commissionType"
                        ? "contact-field--invalid"
                        : ""
                        }`}
                    data-contact-field="commissionType"
                >
                    <span>Commission type <em>*</em></span>
                    <select
                        name="commissionType"
                        value={commissionType}
                        onChange={(event) => {
                            setCommissionType(event.target.value);
                            clearFieldError("commissionType");
                        }}
                    >
                        <option value="">Select a commission type</option>
                        {commissionTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>

                {commissionType === "Other" && (
                    <label
                        className={`contact-field ${validationError?.field === "otherCommissionType"
                            ? "contact-field--invalid"
                            : ""
                            }`}
                        data-contact-field="otherCommissionType"
                    >
                        <span>Other commission type <em>*</em></span>
                        <input
                            name="otherCommissionType"
                            placeholder="Please describe the service you need"
                            type="text"
                            onInput={() => clearFieldError("otherCommissionType")}
                        />
                    </label>
                )}

                <label
                    className={`contact-field ${validationError?.field === "budgetRange"
                        ? "contact-field--invalid"
                        : ""
                        }`}
                    data-contact-field="budgetRange"
                >
                    <span>Budget range <em>*</em></span>
                    <select
                        name="budgetRange"
                        value={budgetRange}
                        onChange={(event) => {
                            setBudgetRange(event.target.value);
                            clearFieldError("budgetRange");
                        }}
                    >
                        <option value="">Select a range</option>
                        {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                                {range}
                            </option>
                        ))}
                    </select>
                </label>

                {budgetRange === "Custom budget" && (
                    <label
                        className={`contact-field ${validationError?.field === "customBudget"
                            ? "contact-field--invalid"
                            : ""
                            }`}
                        data-contact-field="customBudget"
                    >
                        <span>Custom budget <em>*</em></span>
                        <input
                            name="customBudget"
                            placeholder="Example: $42 USD or 150,000 COP"
                            type="text"
                            onInput={() => clearFieldError("customBudget")}
                        />
                    </label>
                )}

                <label
                    className={`contact-field ${validationError?.field === "deadline"
                        ? "contact-field--invalid"
                        : ""
                        }`}
                    data-contact-field="deadline"
                >
                    <span>Deadline <em>*</em></span>
                    <select
                        name="deadline"
                        value={deadline}
                        onChange={(event) => {
                            setDeadline(event.target.value);
                            setSpecificDeadline("");
                            clearFieldError("deadline");
                        }}
                    >
                        <option value="">Select a timeframe</option>
                        {deadlineOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>

                {deadline === "I have a specific date" && (
                    <div
                        className={`contact-field contact-field--calendar ${validationError?.field === "specificDeadline"
                            ? "contact-field--invalid"
                            : ""
                            }`}
                        data-contact-field="specificDeadline"
                    >
                        <span>Requested date <em>*</em></span>

                        <DeadlineCalendar
                            name="specificDeadline"
                            value={specificDeadline}
                            onChange={(value) => {
                                setSpecificDeadline(value);
                                clearFieldError("specificDeadline");
                            }}
                        />
                    </div>
                )}

                <label className="contact-field contact-field--wide">
                    <span>References or links <em>optional</em></span>
                    <input
                        name="references"
                        placeholder="Google Drive, Pinterest, social media post, image link, etc."
                        type="text"
                    />
                </label>

                <label
                    className={`contact-field contact-field--wide ${validationError?.field === "details"
                        ? "contact-field--invalid"
                        : ""
                        }`}
                    data-contact-field="details"
                >
                    <span>Project details <em>*</em></span>
                    <textarea
                        name="details"
                        placeholder="Please include references, requested expressions or poses, preferred colors, intended use, and anything important for the commission."
                        rows={8}
                        onInput={() => clearFieldError("details")}
                    />
                </label>
            </div>

            <label
                className={`contact-form__terms ${validationError?.field === "termsAccepted"
                    ? "contact-form__terms--invalid"
                    : ""
                    }`}
                data-contact-field="termsAccepted"
            >
                <input
                    checked={termsAccepted}
                    name="termsAccepted"
                    type="checkbox"
                    onChange={(event) => {
                        setTermsAccepted(event.target.checked);
                        clearFieldError("termsAccepted");
                    }}
                />

                <span className="contact-form__terms-box" aria-hidden="true">
                    ✓
                </span>

                <span>
                    I have read and agree to Navyri&apos;s{" "}
                    <a href="/terms" target="_blank" rel="noreferrer">
                        Terms of Service
                    </a>{" "}
                    and understand that submitting a request does not guarantee availability.
                </span>
            </label>

            <label className="contact-form__honeypot" aria-hidden="true">
                Website
                <input
                    autoComplete="off"
                    name="website"
                    tabIndex={-1}
                    type="text"
                />
            </label>

            <div className="contact-form__footer">
                <p>
                    Please do not send payment details, passwords, or other sensitive personal information through this form.
                </p>

                <button
                    className="contact-form__submit"
                    disabled={!termsAccepted || status === "sending"}
                    type="submit"
                >
                    {status === "sending" ? "TRANSMITTING..." : "SEND REQUEST"}
                    <span aria-hidden="true">↗</span>
                </button>
            </div>

            {message && (
                <p
                    className={`contact-form__message contact-form__message--${status}`}
                    role={status === "error" ? "alert" : "status"}
                >
                    {message}
                </p>
            )}
        </form>
    );
}