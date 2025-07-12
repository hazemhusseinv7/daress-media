import { NextResponse } from "next/server";

import { fetchCMS } from "@/lib/cms";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    let endpoint = `/blogs?populate=Category&populate=Image`;

    if (slug) endpoint += `&filters[Slug][$eq]=${slug}`;

    const data = await fetchCMS(endpoint);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
