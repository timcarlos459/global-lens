"use client";

import {
  DollarSign,
  CalendarCheck,
  Users,
  MapPinned,
  CreditCard,
  TrendingUp,
} from "lucide-react";

interface Props {
  totalRevenue: number;
  bookings: number;
  customers: number;
  destinations: number;
  transactions: number;
  growth?: number;
}

export default function DashboardOverview({
  totalRevenue,
  bookings,
  customers,
  destinations,
  transactions,
  growth = 0,
}: Props) {
  const stats = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      subtitle: "Paid payments",
      icon: DollarSign,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Bookings",
      value: bookings.toLocaleString(),
      subtitle: "Total bookings",
      icon: CalendarCheck,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Customers",
      value: customers.toLocaleString(),
      subtitle: "Registered customers",
      icon: Users,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Destinations",
      value: destinations.toLocaleString(),
      subtitle: "Available destinations",
      icon: MapPinned,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Growth",
      value: `${growth}%`,
      subtitle: "Monthly growth",
      icon: TrendingUp,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Transactions",
      value: transactions.toLocaleString(),
      subtitle: "Successful payments",
      icon: CreditCard,
      color: "bg-cyan-100 text-cyan-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-4xl font-black text-[#081B29]">
                  {stat.value}
                </h2>

                <p className="mt-2 text-sm text-gray-500">{stat.subtitle}</p>
              </div>

              <div
                className={`rounded-2xl p-5 transition-all duration-300 group-hover:scale-110 ${stat.color}`}
              >
                <Icon size={34} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
