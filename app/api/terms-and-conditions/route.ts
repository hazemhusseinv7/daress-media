import { NextResponse } from "next/server";

import { fetchCMS } from "@/lib/cms";

export async function GET() {
  try {
    const data = await fetchCMS(`/term-and-condition?populate=List`);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
