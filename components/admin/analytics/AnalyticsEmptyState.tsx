"use client";

import { BarChart3 } from "lucide-react";

interface AnalyticsEmptyStateProps {
  title?: string;
  description?: string;
}

export default function AnalyticsEmptyState({
  title = "Business Analytics",
  description = "Analytics will appear here once Global Lens Tours starts receiving bookings and payments.",
}: AnalyticsEmptyStateProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
      <div className="flex min-h-72 items-center justify-center">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
            <BarChart3 size={30} />
          </div>

          <h2 className="mt-6 text-2xl font-black text-[#081B29]">{title}</h2>

          <p className="mt-3 leading-7 text-gray-500">{description}</p>
        </div>
      </div>
    </section>
  );
}
