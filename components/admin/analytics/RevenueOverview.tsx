"use client";

import { DollarSign, CreditCard, Clock3 } from "lucide-react";

interface RevenueOverviewProps {
  totalRevenue: number;
  paidPayments: number;
  pendingPayments: number;
}

export default function RevenueOverview({
  totalRevenue,
  paidPayments,
  pendingPayments,
}: RevenueOverviewProps) {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-black text-[#081B29]">
          Payment Performance
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Overview of payment activity and revenue.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Revenue */}
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
            <DollarSign size={22} />
          </div>

          <p className="mt-5 text-sm font-semibold text-gray-500">
            Total Revenue
          </p>

          <h3 className="mt-2 text-3xl font-black text-[#081B29]">
            ${totalRevenue.toLocaleString()}
          </h3>
        </div>

        {/* Paid */}
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
            <CreditCard size={22} />
          </div>

          <p className="mt-5 text-sm font-semibold text-gray-500">
            Paid Payments
          </p>

          <h3 className="mt-2 text-3xl font-black text-[#081B29]">
            {paidPayments.toLocaleString()}
          </h3>
        </div>

        {/* Pending */}
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
            <Clock3 size={22} />
          </div>

          <p className="mt-5 text-sm font-semibold text-gray-500">
            Pending Payments
          </p>

          <h3 className="mt-2 text-3xl font-black text-[#081B29]">
            {pendingPayments.toLocaleString()}
          </h3>
        </div>
      </div>
    </section>
  );
}
