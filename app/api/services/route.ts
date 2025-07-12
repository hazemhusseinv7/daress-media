import { NextResponse } from "next/server";

import { fetchCMS } from "@/lib/cms";

export async function GET() {
  try {
    const data = await fetchCMS(
      `/service?populate[Cards][populate]=Image&populate[Cards][populate]=Icon&populate[Cards][populate]=Youtube_Videos&populate[Cards][populate]=Audio_Files&populate[Cards][populate]=Text_Flip`
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
