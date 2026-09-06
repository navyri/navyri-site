import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

type VercelVisitsResponse = {
    data?: number;
};

export async function GET() {
    const token = process.env.VERCEL_ANALYTICS_TOKEN;
    const projectId = process.env.VERCEL_PROJECT_ID;

    if (!token || !projectId) {
        return NextResponse.json(
            { visits: null, error: "Visitor counter is not configured." },
            { status: 503 }
        );
    }

    try {
        const response = await fetch(
            `https://api.vercel.com/v1/query/web-analytics/visits/count?projectId=${encodeURIComponent(
                projectId
            )}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                next: {
                    revalidate: 300,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Vercel Analytics returned ${response.status}.`);
        }

        const data = (await response.json()) as VercelVisitsResponse;

        return NextResponse.json(
            {
                visits: typeof data.data === "number" ? data.data : 0,
            },
            {
                headers: {
                    "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
                },
            }
        );
    } catch (error) {
        console.error("Could not fetch Vercel visit count:", error);

        return NextResponse.json(
            { visits: null, error: "Visitor counter unavailable." },
            { status: 502 }
        );
    }
}