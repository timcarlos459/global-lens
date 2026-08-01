"use client";

import {
  CalendarCheck,
  DollarSign,
  MapPinned,
  Users,
  TrendingUp,
} from "lucide-react";

interface AnalyticsStatsProps {
  totalRevenue: number;
  totalBookings: number;
  totalCustomers: number;
  totalDestinations: number;
}

export default function AnalyticsStats({
  totalRevenue,
  totalBookings,
  totalCustomers,
  totalDestinations,
}: AnalyticsStatsProps) {
  const stats = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      description: "From paid payments",
      icon: DollarSign,
      iconClass: "bg-[#64D98B]/10 text-[#64D98B]",
    },
    {
      title: "Total Bookings",
      value: totalBookings.toLocaleString(),
      description: "All booking records",
      icon: CalendarCheck,
      iconClass: "bg-blue-100 text-blue-600",
    },
    {
      title: "Customers",
      value: totalCustomers.toLocaleString(),
      description: "Registered customers",
      icon: Users,
      iconClass: "bg-purple-100 text-purple-600",
    },
    {
      title: "Destinations",
      value: totalDestinations.toLocaleString(),
      description: "Available destinations",
      icon: MapPinned,
      iconClass: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.iconClass}`}
              >
                <Icon size={23} />
              </div>

              <TrendingUp size={19} className="text-[#64D98B]" />
            </div>

            <p className="mt-6 text-sm font-semibold text-gray-500">
              {stat.title}
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#081B29]">
              {stat.value}
            </h2>

            <p className="mt-2 text-xs font-semibold text-gray-400">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
