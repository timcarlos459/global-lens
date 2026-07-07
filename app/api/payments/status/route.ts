import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const paymentId = request.nextUrl.searchParams.get("payment_id");

  if (!paymentId) {
    return NextResponse.json({ error: "Missing payment_id" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.nowpayments.io/v1/payment/${paymentId}`,
      {
        headers: {
          "x-api-key": process.env.NOWPAYMENTS_API_KEY!,
        },
      },
    );

    const payment = await response.json();

    return NextResponse.json(payment);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch payment." },
      { status: 500 },
    );
  }
}
