"use client";

import { CalendarDays, DollarSign } from "lucide-react";

interface MonthlyRevenue {
  month: string;
  revenue: number;
}

interface MonthlyBookings {
  month: string;
  bookings: number;
}

interface MonthlyAnalyticsProps {
  revenue: MonthlyRevenue[];
  bookings: MonthlyBookings[];
}

export default function MonthlyAnalytics({
  revenue,
  bookings,
}: MonthlyAnalyticsProps) {
  const maxRevenue = Math.max(...revenue.map((item) => item.revenue), 1);

  const maxBookings = Math.max(...bookings.map((item) => item.bookings), 1);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-[#081B29]">
          Monthly Performance
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track revenue and booking activity over time.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {/* Revenue */}
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <DollarSign size={22} />
            </div>

            <div>
              <h3 className="font-black text-[#081B29]">Revenue Trends</h3>

              <p className="text-sm text-gray-500">
                Monthly revenue performance
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {revenue.length === 0 ? (
              <div className="rounded-2xl bg-gray-50 py-12 text-center">
                <p className="font-semibold text-gray-500">
                  No revenue data available yet.
                </p>
              </div>
            ) : (
              revenue.map((item) => {
                const width =
                  item.revenue > 0
                    ? Math.max((item.revenue / maxRevenue) * 100, 3)
                    : 0;

                return (
                  <div key={item.month}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">
                        {item.month}
                      </span>

                      <span className="text-sm font-black text-[#081B29]">
                        ${item.revenue.toLocaleString()}
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-[#64D98B] transition-all duration-700"
                        style={{
                          width: `${width}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Bookings */}
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <CalendarDays size={22} />
            </div>

            <div>
              <h3 className="font-black text-[#081B29]">Booking Trends</h3>

              <p className="text-sm text-gray-500">Monthly booking activity</p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {bookings.length === 0 ? (
              <div className="rounded-2xl bg-gray-50 py-12 text-center">
                <p className="font-semibold text-gray-500">
                  No booking data available yet.
                </p>
              </div>
            ) : (
              bookings.map((item) => {
                const width =
                  item.bookings > 0
                    ? Math.max((item.bookings / maxBookings) * 100, 3)
                    : 0;

                return (
                  <div key={item.month}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">
                        {item.month}
                      </span>

                      <span className="text-sm font-black text-[#081B29]">
                        {item.bookings.toLocaleString()} bookings
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-blue-500 transition-all duration-700"
                        style={{
                          width: `${width}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
