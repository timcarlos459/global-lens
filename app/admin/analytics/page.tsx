import {
  BarChart3,
  TrendingUp,
  Users,
  CalendarCheck,
  DollarSign,
  MapPinned,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-black text-[#081B29]">Analytics</h1>

        <p className="mt-2 text-gray-500">
          Track business performance, customer activity, bookings and revenue
          across Global Lens Tours.
        </p>
      </div>

      {/* Main Stats */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">$0</h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            From completed payments
          </p>
        </div>

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

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">0</h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            All booking records
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
              <Users size={23} />
            </div>

            <TrendingUp size={19} className="text-purple-500" />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">Customers</p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">0</h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            Registered customers
          </p>
        </div>

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

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">0</h2>

          <p className="mt-2 text-xs font-semibold text-gray-400">
            Available destinations
          </p>
        </div>
      </div>

      {/* Analytics Placeholder */}

      <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
        <div className="flex min-h-96 items-center justify-center">
          <div className="max-w-lg text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <BarChart3 size={30} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-[#081B29]">
              Business Analytics
            </h2>

            <p className="mt-3 leading-7 text-gray-500">
              Detailed analytics will be connected to your Supabase data next.
              This section will include revenue trends, booking performance,
              customer growth, destination performance and monthly comparisons.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Analytics */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h3 className="font-black text-[#081B29]">Revenue Trends</h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Monthly and yearly revenue performance.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h3 className="font-black text-[#081B29]">Booking Analytics</h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Booking volume, status and conversion trends.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h3 className="font-black text-[#081B29]">Customer Analytics</h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Customer growth and booking activity.
          </p>
        </div>
      </div>
    </div>
  );
}
