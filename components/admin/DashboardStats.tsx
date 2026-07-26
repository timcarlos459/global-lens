"use client";

import { CalendarCheck, DollarSign, Users, Plane } from "lucide-react";

interface Props {
  totalRevenue: number;
  bookings: number;
  customers: number;
  destinations: number;
}

export default function DashboardStats({
  totalRevenue,
  bookings,
  customers,
  destinations,
}: Props) {
  const stats = [
    {
      title: "Total Revenue",
      value:
        totalRevenue > 0 ? `$${totalRevenue.toLocaleString("en-US")}` : "—",
      subtitle:
        totalRevenue > 0
          ? "Revenue from paid bookings"
          : "Awaiting first payment",
      icon: DollarSign,
      iconBackground: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Total Bookings",
      value: bookings > 0 ? bookings.toLocaleString("en-US") : "—",
      subtitle: bookings > 0 ? "Reservations received" : "No bookings yet",
      icon: CalendarCheck,
      iconBackground: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Customers",
      value: customers > 0 ? customers.toLocaleString("en-US") : "—",
      subtitle: customers > 0 ? "Registered customers" : "No customers yet",
      icon: Users,
      iconBackground: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Destinations",
      value: destinations > 0 ? destinations.toLocaleString("en-US") : "—",
      subtitle:
        destinations > 0 ? "Available destinations" : "No destinations added",
      icon: Plane,
      iconBackground: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Subtle decorative background */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#64D98B]/10 blur-3xl transition-all duration-300 group-hover:bg-[#64D98B]/20" />

            <div className="relative flex items-start justify-between gap-5">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {stat.title}
                </p>

                <h2 className="mt-4 truncate text-4xl font-black tracking-tight text-[#081B29]">
                  {stat.value}
                </h2>

                <p className="mt-3 text-sm text-gray-500">{stat.subtitle}</p>
              </div>

              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${stat.iconBackground} ${stat.iconColor} transition-transform duration-300 group-hover:scale-105`}
              >
                <Icon size={27} strokeWidth={2.2} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
