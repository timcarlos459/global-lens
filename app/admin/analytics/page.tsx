import {
  BarChart3,
  TrendingUp,
  Users,
  CalendarCheck,
  DollarSign,
  MapPinned,
} from "lucide-react";

import { getAnalytics } from "@/actions/adminAnalytics";

export default async function AnalyticsPage() {
  const analytics = await getAnalytics();

  // Safety fallbacks
  const bookingStatus = analytics.bookingStatus ?? [];
  const monthlyRevenue = analytics.monthlyRevenue ?? [];
  const destinationPerformance = analytics.destinationPerformance ?? [];

  return (
    <div className="space-y-8">
      {/* =========================================
          HEADER
      ========================================= */}

      <div>
        <h1 className="text-4xl font-black text-[#081B29]">Analytics</h1>

        <p className="mt-2 text-gray-500">
          Track business performance, customer activity, bookings and revenue
          across Global Lens Tours.
        </p>
      </div>

      {/* =========================================
          MAIN STATS
      ========================================= */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {/* REVENUE */}

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <DollarSign size={23} />
            </div>

            <TrendingUp size={19} className="text-[#64D98B]" />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Total Revenue
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">
            ${Number(analytics.totalRevenue ?? 0).toLocaleString()}
          </h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            From completed payments
          </p>
        </div>

        {/* BOOKINGS */}

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <CalendarCheck size={23} />
            </div>

            <BarChart3 size={19} className="text-blue-500" />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Total Bookings
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">
            {analytics.totalBookings ?? 0}
          </h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            All booking records
          </p>
        </div>

        {/* CUSTOMERS */}

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
              <Users size={23} />
            </div>

            <TrendingUp size={19} className="text-purple-500" />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">Customers</p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">
            {analytics.totalCustomers ?? 0}
          </h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            Registered customers
          </p>
        </div>

        {/* DESTINATIONS */}

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <MapPinned size={23} />
            </div>

            <BarChart3 size={19} className="text-orange-500" />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Destinations
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">
            {analytics.totalDestinations ?? 0}
          </h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            Available destinations
          </p>
        </div>
      </div>

      {/* =========================================
          BOOKING PERFORMANCE
      ========================================= */}

      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <BarChart3 size={22} className="text-[#64D98B]" />

          <h2 className="text-2xl font-black text-[#081B29]">
            Booking Performance
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookingStatus.length === 0 ? (
            <p className="text-gray-500">No booking data available.</p>
          ) : (
            bookingStatus.map((item) => (
              <div key={item.status} className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold capitalize text-gray-500">
                  {item.status}
                </p>

                <p className="mt-2 text-3xl font-black text-[#081B29]">
                  {item.count}
                </p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* =========================================
          MONTHLY REVENUE
      ========================================= */}

      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-black text-[#081B29]">Monthly Revenue</h2>

        <p className="mt-2 text-gray-500">
          Revenue generated from completed payments.
        </p>

        <div className="mt-8 space-y-4">
          {monthlyRevenue.length === 0 ? (
            <div className="rounded-2xl bg-gray-50 p-8 text-center text-gray-500">
              No payment data available yet.
            </div>
          ) : (
            monthlyRevenue.map((item) => (
              <div
                key={item.month}
                className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] p-5"
              >
                <span className="font-semibold text-gray-600">
                  {item.month}
                </span>

                <span className="font-black text-[#081B29]">
                  ${Number(item.revenue ?? 0).toLocaleString()}
                </span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* =========================================
          DESTINATION PERFORMANCE
      ========================================= */}

      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-black text-[#081B29]">
          Destination Performance
        </h2>

        <p className="mt-2 text-gray-500">
          See which destinations are generating the most bookings.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-150">
            <thead>
              <tr className="border-b text-left text-sm text-gray-500">
                <th className="pb-4">Destination</th>

                <th className="pb-4">Bookings</th>

                <th className="pb-4">Revenue</th>
              </tr>
            </thead>

            <tbody>
              {destinationPerformance.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-gray-500">
                    No destination booking data available.
                  </td>
                </tr>
              ) : (
                destinationPerformance.map((item) => (
                  <tr key={item.destination} className="border-b last:border-0">
                    <td className="py-5 font-semibold text-[#081B29]">
                      {item.destination}
                    </td>

                    <td className="py-5 text-gray-600">{item.bookings}</td>

                    <td className="py-5 font-bold text-[#081B29]">
                      ${Number(item.revenue ?? 0).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
