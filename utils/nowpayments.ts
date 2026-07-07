import { PAYMENT } from "@/utils/constants";

const API_BASE = "https://api.nowpayments.io/v1";

const API_KEY = process.env.NOWPAYMENTS_API_KEY!;

export interface NowPaymentRequest {
  amount: number;
  orderId: string;
  description: string;
}

export async function createNowPayment({
  amount,
  orderId,
  description,
}: NowPaymentRequest) {
  const response = await fetch(`${API_BASE}/payment`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },

    body: JSON.stringify({
      price_amount: amount,

      price_currency: PAYMENT.currency,

      pay_currency: PAYMENT.payCurrency,

      order_id: orderId,

      order_description: description,

      success_url: PAYMENT.successUrl,

      cancel_url: PAYMENT.cancelUrl,
    }),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "NOWPayments payment failed.");
  }

  return response.json();
}
