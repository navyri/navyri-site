import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const replyMethods = new Set([
    "Email",
    "Discord",
    "X (Twitter)",
    "Instagram",
    "TikTok",
    "Ko-fi",
    "VGen",
    "Other",
]);

const commissionTypes = new Set([
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
]);

const budgetRanges = new Set([
    "I’m not sure yet",
    "Under $15 USD",
    "$15–$30 USD",
    "$30–$50 USD",
    "$50–$75 USD",
    "$75–$100 USD",
    "$100+ USD",
    "Custom budget",
]);

const deadlineOptions = new Set([
    "I don’t have a deadline in mind",
    "Within 1 week",
    "Within 2 weeks",
    "Within 1 month",
    "More than 1 month from now",
    "I have a specific date",
]);

const MAX_NAME_LENGTH = 80;
const MAX_CONTACT_DETAIL_LENGTH = 254;
const MAX_OTHER_COMMISSION_LENGTH = 100;
const MAX_CUSTOM_BUDGET_LENGTH = 80;
const MAX_REFERENCES_LENGTH = 2_000;
const MAX_DETAILS_LENGTH = 5_000;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getText(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

function isTermsAccepted(value: unknown) {
    return value === "on" || value === true;
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isTooLong(value: string, maxLength: number) {
    return value.length > maxLength;
}

function getClientIp(request: NextRequest) {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() || "unknown";
    }

    return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
    const now = Date.now();
    const existing = rateLimitStore.get(ip);

    if (!existing || existing.resetAt <= now) {
        rateLimitStore.set(ip, {
            count: 1,
            resetAt: now + RATE_LIMIT_WINDOW_MS,
        });

        return false;
    }

    if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
        return true;
    }

    existing.count += 1;
    rateLimitStore.set(ip, existing);

    return false;
}

function isValidFutureOrTodayDate(value: string) {
    const [year, month, day] = value.split("-").map(Number);

    if (!year || !month || !day) {
        return false;
    }

    const selectedDate = new Date(year, month - 1, day);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return (
        !Number.isNaN(selectedDate.getTime()) &&
        selectedDate.getFullYear() === year &&
        selectedDate.getMonth() === month - 1 &&
        selectedDate.getDate() === day &&
        selectedDate >= today
    );
}

export async function POST(request: NextRequest) {
    const allowedOrigin = process.env.CONTACT_ALLOWED_ORIGIN;
    const requestOrigin = request.headers.get("origin");

    if (allowedOrigin && requestOrigin && requestOrigin !== allowedOrigin) {
        return NextResponse.json(
            { message: "Request origin is not allowed." },
            { status: 403 },
        );
    }

    if (!request.headers.get("content-type")?.includes("application/json")) {
        return NextResponse.json(
            { message: "Invalid request format." },
            { status: 415 },
        );
    }

    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
        return NextResponse.json(
            {
                message:
                    "Too many requests. Please wait a minute before trying again.",
            },
            { status: 429 },
        );
    }

    if (
        !process.env.RESEND_API_KEY ||
        !process.env.EMAIL_FROM ||
        !process.env.EMAIL_TO
    ) {
        console.error("Contact form environment variables are missing.");

        return NextResponse.json(
            { message: "The contact form is not configured yet." },
            { status: 503 },
        );
    }

    try {
        const body = await request.json();

        const name = getText(body.name);
        const replyMethod = getText(body.replyMethod);
        const contactDetail = getText(body.contactDetail);
        const commissionType = getText(body.commissionType);
        const otherCommissionType = getText(body.otherCommissionType);
        const budgetRange = getText(body.budgetRange);
        const customBudget = getText(body.customBudget);
        const deadline = getText(body.deadline);
        const specificDeadline = getText(body.specificDeadline);
        const references = getText(body.references);
        const details = getText(body.details);
        const website = getText(body.website);
        const termsAccepted = isTermsAccepted(body.termsAccepted);

        // Honeypot: aparenta éxito y no revela el filtro.
        if (website) {
            return NextResponse.json({ success: true });
        }

        if (!termsAccepted) {
            return NextResponse.json(
                {
                    message:
                        "Please confirm that you have read and agree to the Terms of Service.",
                },
                { status: 400 },
            );
        }

        if (
            !name ||
            !replyMethod ||
            !contactDetail ||
            !commissionType ||
            !budgetRange ||
            !deadline ||
            !details
        ) {
            return NextResponse.json(
                { message: "Please complete all required fields." },
                { status: 400 },
            );
        }

        if (
            !replyMethods.has(replyMethod) ||
            !commissionTypes.has(commissionType) ||
            !budgetRanges.has(budgetRange) ||
            !deadlineOptions.has(deadline)
        ) {
            return NextResponse.json(
                { message: "One or more selected values are invalid." },
                { status: 400 },
            );
        }

        if (
            isTooLong(name, MAX_NAME_LENGTH) ||
            isTooLong(contactDetail, MAX_CONTACT_DETAIL_LENGTH) ||
            isTooLong(otherCommissionType, MAX_OTHER_COMMISSION_LENGTH) ||
            isTooLong(customBudget, MAX_CUSTOM_BUDGET_LENGTH) ||
            isTooLong(references, MAX_REFERENCES_LENGTH) ||
            isTooLong(details, MAX_DETAILS_LENGTH)
        ) {
            return NextResponse.json(
                { message: "One or more fields exceed the allowed length." },
                { status: 400 },
            );
        }

        if (replyMethod === "Email" && !isValidEmail(contactDetail)) {
            return NextResponse.json(
                { message: "Please enter a valid email address." },
                { status: 400 },
            );
        }

        if (commissionType === "Other" && !otherCommissionType) {
            return NextResponse.json(
                { message: "Please describe the commission type you need." },
                { status: 400 },
            );
        }

        if (budgetRange === "Custom budget" && !customBudget) {
            return NextResponse.json(
                { message: "Please provide your custom budget." },
                { status: 400 },
            );
        }

        if (
            deadline === "I have a specific date" &&
            !isValidFutureOrTodayDate(specificDeadline)
        ) {
            return NextResponse.json(
                {
                    message:
                        "Please select a valid requested date that is today or in the future.",
                },
                { status: 400 },
            );
        }

        const resolvedCommissionType =
            commissionType === "Other"
                ? `${commissionType}: ${otherCommissionType}`
                : commissionType;

        const resolvedBudget =
            budgetRange === "Custom budget"
                ? `${budgetRange}: ${customBudget}`
                : budgetRange;

        const resolvedDeadline =
            deadline === "I have a specific date"
                ? `${deadline}: ${specificDeadline}`
                : deadline;

        const safeName = escapeHtml(name);
        const safeReplyMethod = escapeHtml(replyMethod);
        const safeContactDetail = escapeHtml(contactDetail);
        const safeCommissionType = escapeHtml(resolvedCommissionType);
        const safeBudget = escapeHtml(resolvedBudget);
        const safeDeadline = escapeHtml(resolvedDeadline);
        const safeReferences = escapeHtml(references || "Not provided");
        const safeDetails = escapeHtml(details).replaceAll("\n", "<br />");

        const { error } = await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: [process.env.EMAIL_TO],
            replyTo: replyMethod === "Email" ? contactDetail : undefined,
            subject: `New commission inquiry — ${name}`,
            text: [
                "NEW NAVYRI COMMISSION INQUIRY",
                "",
                `Name or alias: ${name}`,
                `Preferred reply method: ${replyMethod}`,
                `Contact detail: ${contactDetail}`,
                `Commission type: ${resolvedCommissionType}`,
                `Budget range: ${resolvedBudget}`,
                `Deadline: ${resolvedDeadline}`,
                `References or links: ${references || "Not provided"}`,
                "Terms of Service accepted: Yes",
                "",
                "Project details:",
                details,
            ].join("\n"),
            html: `
        <div style="font-family: Arial, sans-serif; color: #2d1020; line-height: 1.6;">
          <h1 style="color: #751c4a;">New Navyri Commission Inquiry</h1>
          <table style="border-collapse: collapse;">
            <tr><td><strong>Name or alias</strong></td><td>${safeName}</td></tr>
            <tr><td><strong>Preferred reply method</strong></td><td>${safeReplyMethod}</td></tr>
            <tr><td><strong>Contact detail</strong></td><td>${safeContactDetail}</td></tr>
            <tr><td><strong>Commission type</strong></td><td>${safeCommissionType}</td></tr>
            <tr><td><strong>Budget range</strong></td><td>${safeBudget}</td></tr>
            <tr><td><strong>Deadline</strong></td><td>${safeDeadline}</td></tr>
            <tr><td><strong>References or links</strong></td><td>${safeReferences}</td></tr>
            <tr><td><strong>Terms of Service accepted</strong></td><td>Yes</td></tr>
          </table>
          <h2>Project details</h2>
          <p>${safeDetails}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend contact form error:", error);

            return NextResponse.json(
                {
                    message:
                        "Unable to transmit your request. Please try again later.",
                },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form request error:", error);

        return NextResponse.json(
            { message: "Unable to process your request. Please try again later." },
            { status: 500 },
        );
    }
}