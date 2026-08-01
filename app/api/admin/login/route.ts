import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const password = String(body.password || "");

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD is not configured.");

      return NextResponse.json(
        { error: "Admin authentication is not configured." },
        { status: 500 },
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: "Invalid admin password." },
        { status: 401 },
      );
    }

    /*
     * TEMPORARY:
     * We will create a secure admin session here next.
     */

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
