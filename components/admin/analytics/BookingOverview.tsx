"use client";

import { CheckCircle2, Clock3, XCircle, CalendarCheck } from "lucide-react";

interface BookingOverviewProps {
  confirmed: number;
  pending: number;
  completed: number;
  cancelled: number;
}

export default function BookingOverview({
  confirmed,
  pending,
  completed,
  cancelled,
}: BookingOverviewProps) {
  const items = [
    {
      title: "Confirmed",
      value: confirmed,
      icon: CheckCircle2,
      className: "bg-green-50 text-green-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      className: "bg-amber-50 text-amber-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: CalendarCheck,
      className: "bg-blue-50 text-blue-600",
    },
    {
      title: "Cancelled",
      value: cancelled,
      icon: XCircle,
      className: "bg-red-50 text-red-600",
    },
  ];

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-black text-[#081B29]">
          Booking Performance
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Current booking status across Global Lens Tours.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.className}`}
              >
                <Icon size={20} />
              </div>

              <p className="mt-5 text-sm font-semibold text-gray-500">
                {item.title}
              </p>

              <h3 className="mt-1 text-3xl font-black text-[#081B29]">
                {item.value.toLocaleString()}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
