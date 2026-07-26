"use client";

import { X } from "lucide-react";
import type { Payment } from "@/types/adminPayment";

interface Props {
  payment: Payment | null;
  setPayment: React.Dispatch<React.SetStateAction<Payment | null>>;
  open: boolean;
  onClose: () => void;
  onSave: (payment: Payment) => void | Promise<void>;
}

export default function EditPaymentModal({
  payment,
  setPayment,
  open,
  onClose,
  onSave,
}: Props) {
  if (!open || !payment) return null;

  const updateField = <K extends keyof Payment>(
    field: K,
    value: Payment[K],
  ) => {
    setPayment((prev) =>
      prev
        ? {
            ...prev,
            [field]: value,
          }
        : prev,
    );
  };

  const handleSave = async () => {
    await onSave(payment);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-black text-[#081B29]">Edit Payment</h2>

            <p className="mt-2 text-gray-500">{payment.payment_reference}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Form */}

        <div className="grid gap-6 p-8 md:grid-cols-2">
          <div>
            <label className="font-semibold">Customer Name</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={payment.customer_name}
              onChange={(e) => updateField("customer_name", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Amount</label>

            <input
              type="number"
              className="mt-2 w-full rounded-xl border p-3"
              value={payment.amount}
              onChange={(e) => updateField("amount", Number(e.target.value))}
            />
          </div>

          <div>
            <label className="font-semibold">Payment Method</label>

            <select
              className="mt-2 w-full rounded-xl border p-3"
              value={payment.payment_method}
              onChange={(e) =>
                updateField(
                  "payment_method",
                  e.target.value as Payment["payment_method"],
                )
              }
            >
              <option value="Mpesa">Mpesa</option>
              <option value="Card">Card</option>
              <option value="Paypal">Paypal</option>
              <option value="Bank">Bank</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Payment Status</label>

            <select
              className="mt-2 w-full rounded-xl border p-3"
              value={payment.payment_status}
              onChange={(e) =>
                updateField(
                  "payment_status",
                  e.target.value as Payment["payment_status"],
                )
              }
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Transaction ID</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={payment.transaction_id}
              onChange={(e) => updateField("transaction_id", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Payment Date</label>

            <input
              type="date"
              className="mt-2 w-full rounded-xl border p-3"
              value={payment.payment_date}
              onChange={(e) => updateField("payment_date", e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t px-8 py-6">
          <button onClick={onClose} className="rounded-xl border px-6 py-3">
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-[#64D98B] px-8 py-3 font-bold text-[#081B29]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
