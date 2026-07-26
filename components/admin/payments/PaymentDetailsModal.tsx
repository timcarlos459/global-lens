"use client";

import { X } from "lucide-react";
import type { Payment } from "@/types/adminPayment";

interface Props {
  payment: Payment | null;
  open: boolean;
  onClose: () => void;
}

export default function PaymentDetailsModal({ payment, open, onClose }: Props) {
  if (!open || !payment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-black text-[#081B29]">
              Payment Details
            </h2>

            <p className="mt-2 text-gray-500">{payment.payment_reference}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Content */}

        <div className="grid gap-6 p-8 md:grid-cols-2">
          <Info title="Payment Reference" value={payment.payment_reference} />

          <Info title="Booking Reference" value={payment.booking_reference} />

          <Info title="Customer" value={payment.customer_name} />

          <Info title="Payment Method" value={payment.payment_method} />

          <Info title="Amount" value={`$${payment.amount.toLocaleString()}`} />

          <Info title="Transaction ID" value={payment.transaction_id} />

          <Info title="Payment Date" value={payment.payment_date} />

          <Info title="Status" value={payment.payment_status} />
        </div>

        {/* Footer */}

        <div className="flex justify-end border-t px-8 py-6">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#081B29] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5">
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="mt-2 text-lg font-bold text-[#081B29]">{value}</h3>
    </div>
  );
}
