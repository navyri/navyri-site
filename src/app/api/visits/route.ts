import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

type VercelVisitsResponse = {
    data?: {
        pageViews?: number;
        pageviews?: number;
        count?: number;
        visitors?: number;
    };
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
        const query = new URLSearchParams({
            projectId,
            event: "pageview",
        });

        const response = await fetch(
            `https://api.vercel.com/v1/query/web-analytics/visits/count?${query.toString()}`,
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
            const details = await response.text();

            throw new Error(
                `Vercel Analytics returned ${response.status}: ${details}`
            );
        }

        const result = (await response.json()) as VercelVisitsResponse;

        console.log("Vercel Analytics page-view response:", result);

        const pageViews =
            result.data?.pageViews ??
            result.data?.pageviews ??
            result.data?.count ??
            0;

        return NextResponse.json(
            { visits: pageViews },
            {
                headers: {
                    "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
                },
            }
        );
    } catch (error) {
        console.error("Could not fetch Vercel page-view count:", error);

        return NextResponse.json(
            { visits: null, error: "Visitor counter unavailable." },
            { status: 502 }
        );
    }
}