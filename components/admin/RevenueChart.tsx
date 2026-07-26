"use client";

import type { Payment } from "@/types/adminPayment";

import {
  TrendingUp,
  DollarSign,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

interface Props {
  payments: Payment[];
}

export default function RevenueChart({ payments }: Props) {
  /*
   * Only completed payments are included in revenue.
   */
  const paidPayments = payments.filter(
    (payment) => payment.payment_status === "Paid",
  );

  /*
   * Current year
   */
  const currentYear = new Date().getFullYear();

  /*
   * Monthly revenue
   */
  const monthlyRevenue = Array.from({ length: 12 }, (_, monthIndex) => {
    const revenue = paidPayments
      .filter((payment) => {
        const date = new Date(payment.payment_date);

        return (
          !Number.isNaN(date.getTime()) &&
          date.getFullYear() === currentYear &&
          date.getMonth() === monthIndex
        );
      })
      .reduce((sum, payment) => sum + Number(payment.amount || 0), 0);

    return {
      month: new Date(currentYear, monthIndex, 1).toLocaleString("en-US", {
        month: "short",
      }),
      revenue,
    };
  });

  /*
   * Total revenue
   */
  const totalRevenue = paidPayments.reduce(
    (sum, payment) => sum + Number(payment.amount || 0),
    0,
  );

  /*
   * Average payment / booking value
   */
  const averageBooking =
    paidPayments.length > 0 ? totalRevenue / paidPayments.length : 0;

  /*
   * Highest monthly revenue
   */
  const maxRevenue = Math.max(...monthlyRevenue.map((item) => item.revenue), 0);

  /*
   * Previous year revenue
   */
  const previousYear = currentYear - 1;

  const previousYearRevenue = paidPayments
    .filter((payment) => {
      const date = new Date(payment.payment_date);

      return (
        !Number.isNaN(date.getTime()) && date.getFullYear() === previousYear
      );
    })
    .reduce((sum, payment) => sum + Number(payment.amount || 0), 0);

  /*
   * Growth calculation
   */
  const growth =
    previousYearRevenue > 0
      ? ((totalRevenue - previousYearRevenue) / previousYearRevenue) * 100
      : 0;

  const hasRevenue = paidPayments.length > 0;

  return (
    <section className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
      {/* Header */}

      <div className="flex flex-col gap-5 border-b border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#64D98B]/15">
            <DollarSign size={22} className="text-[#64D98B]" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#081B29]">
              Revenue Analytics
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Monthly payment performance for {currentYear}.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600">
          <CalendarDays size={18} />

          {currentYear}
        </div>
      </div>

      {/* Stats */}

      <div className="grid border-b border-gray-100 md:grid-cols-3">
        {/* Revenue */}

        <div className="p-6 md:p-7">
          <p className="text-sm font-medium text-gray-500">Total Revenue</p>

          <h3 className="mt-2 text-3xl font-black text-[#081B29] md:text-4xl">
            {hasRevenue
              ? `$${totalRevenue.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}`
              : "—"}
          </h3>

          <p className="mt-2 text-xs text-gray-400">Completed payments</p>
        </div>

        {/* Growth */}

        <div className="border-y border-gray-100 p-6 md:border-x md:border-y-0 md:p-7">
          <p className="text-sm font-medium text-gray-500">Year Growth</p>

          {previousYearRevenue > 0 ? (
            <div className="mt-2 flex items-center gap-2">
              <TrendingUp
                size={22}
                className={growth >= 0 ? "text-[#64D98B]" : "text-red-500"}
              />

              <span
                className={`text-3xl font-black ${
                  growth >= 0 ? "text-[#64D98B]" : "text-red-500"
                }`}
              >
                {growth >= 0 ? "+" : ""}
                {growth.toFixed(1)}%
              </span>
            </div>
          ) : (
            <h3 className="mt-2 text-3xl font-black text-[#081B29]">—</h3>
          )}

          <p className="mt-2 text-xs text-gray-400">
            Compared with {previousYear}
          </p>
        </div>

        {/* Average */}

        <div className="p-6 md:p-7">
          <p className="text-sm font-medium text-gray-500">Average Payment</p>

          <h3 className="mt-2 text-3xl font-black text-[#081B29] md:text-4xl">
            {hasRevenue
              ? `$${averageBooking.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}`
              : "—"}
          </h3>

          <p className="mt-2 text-xs text-gray-400">Per completed payment</p>
        </div>
      </div>

      {/* Chart */}

      <div className="px-6 py-8 md:px-8 md:py-10">
        {!hasRevenue ? (
          <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50">
            <div className="text-center">
              <DollarSign size={32} className="mx-auto text-gray-300" />

              <h3 className="mt-4 font-bold text-[#081B29]">
                No revenue data yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Revenue analytics will appear after customers complete payments.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex h-72 items-end justify-between gap-2 sm:gap-4">
            {monthlyRevenue.map((item) => {
              const height =
                maxRevenue > 0 ? (item.revenue / maxRevenue) * 220 : 0;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >
                  <div className="group relative flex w-full items-end justify-center">
                    {item.revenue > 0 && (
                      <div
                        style={{
                          height: `${Math.max(height, 8)}px`,
                        }}
                        className="relative w-full max-w-12 rounded-t-2xl bg-linear-to-t from-[#64D98B] to-[#92F2AF] transition-all duration-500 hover:scale-105 hover:shadow-lg"
                      >
                        {/* Tooltip */}

                        <div className="absolute -top-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#081B29] px-3 py-2 text-xs font-bold text-white shadow-lg group-hover:block">
                          $
                          {item.revenue.toLocaleString("en-US", {
                            maximumFractionDigits: 0,
                          })}
                        </div>
                      </div>
                    )}

                    {item.revenue === 0 && (
                      <div className="h-1.5 w-full max-w-12 rounded-full bg-gray-100" />
                    )}
                  </div>

                  <p className="mt-4 text-xs font-semibold text-gray-400 sm:text-sm">
                    {item.month}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}

      <div className="flex flex-col gap-4 border-t border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div>
          <p className="font-semibold text-[#081B29]">
            {hasRevenue
              ? "Revenue is calculated from completed payments."
              : "Waiting for completed payments."}
          </p>

          <p className="mt-1 text-sm text-gray-400">
            {paidPayments.length.toLocaleString("en-US")} completed{" "}
            {paidPayments.length === 1 ? "payment" : "payments"} recorded.
          </p>
        </div>

        <a
          href="/admin/reports"
          className="flex items-center gap-2 font-bold text-[#64D98B] transition-all hover:gap-4"
        >
          View Detailed Report
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
