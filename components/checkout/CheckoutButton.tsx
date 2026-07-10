"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  amount: number;
  bookingReference: string;
  destination: string;
};

export default function CheckoutButton({
  amount,
  bookingReference,
  destination,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const response = await fetch("/api/payments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          bookingReference,
          destination,
        }),
      });

      const payment = await response.json();

      if (!response.ok) {
        throw new Error(payment.error || "Unable to create payment.");
      }

      window.location.href =
        payment.invoice_url || payment.payment_url || payment.link;
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-[#64D98B] hover:bg-[#54c97a] text-[#081B29] font-bold py-4 rounded-2xl transition disabled:opacity-50"
    >
      {loading ? "Creating Secure Payment..." : "Complete Secure Payment"}
    </button>
  );
}
