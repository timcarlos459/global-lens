"use client";

import type { Settings } from "@/types/settings";

interface Props {
  deposit: number;
  days: number;
  guests: number;

  instant: boolean;
  approval: boolean;

  onChange: (field: keyof Settings, value: string | number | boolean) => void;
}

export default function BookingSettings({
  deposit,
  days,
  guests,
  instant,
  approval,
  onChange,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-black text-[#081B29]">
        Booking Settings
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Booking Deposit (%)
          </label>

          <input
            type="number"
            value={deposit}
            onChange={(e) =>
              onChange("booking_deposit", Number(e.target.value))
            }
            className="w-full rounded-2xl border border-gray-200 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Minimum Booking Days
          </label>

          <input
            type="number"
            value={days}
            onChange={(e) =>
              onChange("min_booking_days", Number(e.target.value))
            }
            className="w-full rounded-2xl border border-gray-200 p-4"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Maximum Guests
          </label>

          <input
            type="number"
            value={guests}
            onChange={(e) => onChange("max_guests", Number(e.target.value))}
            className="w-full rounded-2xl border border-gray-200 p-4"
          />
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <label className="flex items-center justify-between rounded-2xl border p-4">
          <span className="font-medium">Enable Instant Booking</span>

          <input
            type="checkbox"
            checked={instant}
            onChange={(e) => onChange("instant_booking", e.target.checked)}
            className="h-5 w-5"
          />
        </label>

        <label className="flex items-center justify-between rounded-2xl border p-4">
          <span className="font-medium">Manual Booking Approval</span>

          <input
            type="checkbox"
            checked={approval}
            onChange={(e) => onChange("manual_approval", e.target.checked)}
            className="h-5 w-5"
          />
        </label>
      </div>
    </section>
  );
}
