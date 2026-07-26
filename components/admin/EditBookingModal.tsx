"use client";

import { X } from "lucide-react";
import type { Booking } from "@/types/adminBooking";

interface Props {
  booking: Booking | null;
  setBooking: React.Dispatch<React.SetStateAction<Booking | null>>;
  open: boolean;
  onClose: () => void;
  onSave?: (booking: Booking) => Promise<void>;
}

export default function EditBookingModal({
  booking,
  setBooking,
  open,
  onClose,
  onSave,
}: Props) {
  if (!open || !booking) return null;

  const updateField = <K extends keyof Booking>(
    field: K,
    value: Booking[K],
  ) => {
    setBooking((prev) =>
      prev
        ? {
            ...prev,
            [field]: value,
          }
        : prev,
    );
  };

  const handleSave = async () => {
    if (!booking) return;

    if (onSave) {
      await onSave(booking);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-black text-[#081B29]">Edit Booking</h2>

            <p className="mt-1 text-gray-500">{booking.booking_reference}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">Customer Name</label>

            <input
              value={booking.full_name}
              onChange={(e) => updateField("full_name", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Destination</label>

            <input
              value={booking.destination}
              onChange={(e) => updateField("destination", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Arrival Date</label>

            <input
              type="date"
              value={booking.arrival_date}
              onChange={(e) => updateField("arrival_date", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Total Price</label>

            <input
              type="number"
              value={booking.total_price}
              onChange={(e) =>
                updateField("total_price", Number(e.target.value))
              }
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Adults</label>

            <input
              type="number"
              value={booking.adults}
              onChange={(e) => updateField("adults", Number(e.target.value))}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Children</label>

            <input
              type="number"
              value={booking.children}
              onChange={(e) => updateField("children", Number(e.target.value))}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Payment Status</label>

            <select
              value={booking.payment_status}
              onChange={(e) =>
                updateField(
                  "payment_status",
                  e.target.value as Booking["payment_status"],
                )
              }
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            >
              <option value="pending">Pending</option>
              <option value="deposit">Deposit</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">Booking Status</label>

            <select
              value={booking.booking_status}
              onChange={(e) =>
                updateField(
                  "booking_status",
                  e.target.value as Booking["booking_status"],
                )
              }
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 border-t px-8 py-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-[#64D98B] px-8 py-3 font-bold text-[#081B29] transition hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
