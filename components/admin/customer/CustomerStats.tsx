"use client";

import type { Customer } from "@/types/adminCustomer";
import { Users, UserCheck, Wallet, Plane } from "lucide-react";

interface Props {
  customers: Customer[];
}

export default function CustomerStats({ customers }: Props) {
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status === "active",
  ).length;

  const totalRevenue = customers.reduce(
    (sum, customer) => sum + customer.total_spent,
    0,
  );

  const totalTrips = customers.reduce(
    (sum, customer) => sum + customer.total_bookings,
    0,
  );

  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers.toLocaleString(),
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Active Customers",
      value: activeCustomers.toLocaleString(),
      icon: UserCheck,
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: Wallet,
      color: "bg-emerald-500",
    },
    {
      title: "Total Trips",
      value: totalTrips.toLocaleString(),
      icon: Plane,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#081B29]">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
