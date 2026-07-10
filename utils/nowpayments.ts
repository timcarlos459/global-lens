import { PAYMENT } from "@/utils/constants";

const API_BASE = "https://api.nowpayments.io/v1";

const API_KEY = process.env.NOWPAYMENTS_API_KEY!;

export interface NowPaymentRequest {
  amount: number;
  orderId: string;
  description: string;
}

export async function createNowInvoice({
  amount,
  orderId,
  description,
}: NowPaymentRequest) {
  const response = await fetch(`${API_BASE}/invoice`, {
    method: "POST",

    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      price_amount: amount,
      price_currency: "usd",

      order_id: orderId,
      order_description: description,

      ipn_callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/webhook`,

      success_url: `${process.env.NEXT_PUBLIC_APP_URL}${PAYMENT.successUrl}`,

      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}${PAYMENT.cancelUrl}`,
    }),
  });

  if (!response.ok) {
    const error = await response.json();

    console.error(error);

    throw new Error(error.message ?? "NOWPayments Error");
  }

  return response.json();
}
