import { NextResponse } from "next/server";
import { createNowInvoice } from "@/utils/nowpayments";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { amount, bookingReference, destination } = body;

    const payment = await createNowInvoice({
      amount,
      orderId: bookingReference,
      description: `Global Lens Tour - ${destination}`,
    });

    return NextResponse.json(payment);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to create payment.",
      },
      {
        status: 500,
      },
    );
  }
}
