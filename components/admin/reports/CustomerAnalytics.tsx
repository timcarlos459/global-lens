"use client";

import type { Customer } from "@/types/adminCustomer";
import type { Booking } from "@/types/adminBooking";

import { Users, UserPlus, Repeat, Crown, DollarSign } from "lucide-react";

interface Props {
  customers: Customer[];
  bookings: Booking[];
}

export default function CustomerAnalytics({ customers, bookings }: Props) {
  // ===============================
  // TOTAL CUSTOMERS
  // ===============================

  const totalCustomers = customers.length;

  // ===============================
  // NEW CUSTOMERS (Last 30 Days)
  // ===============================

  const newCustomers = customers.filter((customer) => {
    const joined = new Date(customer.joined_date);

    const today = new Date();

    const diff = (today.getTime() - joined.getTime()) / (1000 * 60 * 60 * 24);

    return diff <= 30;
  }).length;

  // ===============================
  // RETURNING CUSTOMERS
  // ===============================

  const returningCustomers = customers.filter(
    (customer) => customer.total_bookings > 1,
  ).length;

  // ===============================
  // TOP CUSTOMER
  // ===============================

  const topCustomer =
    customers.length === 0
      ? "No Customer"
      : customers.reduce((best, current) =>
          current.total_spent > best.total_spent ? current : best,
        ).full_name;

  // ===============================
  // AVERAGE BOOKING VALUE
  // ===============================

  const averageBookingValue =
    bookings.length === 0
      ? 0
      : bookings.reduce((sum, booking) => sum + booking.total_price, 0) /
        bookings.length;

  // ===============================
  // CARDS
  // ===============================

  const cards = [
    {
      title: "Customers",
      value: totalCustomers.toLocaleString(),
      icon: Users,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "New Customers",
      value: newCustomers.toLocaleString(),
      icon: UserPlus,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Returning",
      value: returningCustomers.toLocaleString(),
      icon: Repeat,
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Top Customer",
      value: topCustomer,
      icon: Crown,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Average Booking",
      value: `$${averageBookingValue.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}`,
      icon: DollarSign,
      color: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-black text-[#081B29]">
          Customer Analytics
        </h2>

        <p className="mt-2 text-gray-500">
          Customer activity and booking insights.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-500">
                    {card.title}
                  </p>

                  <h3 className="mt-3 wrap-break-word text-2xl font-black text-[#081B29]">
                    {card.value}
                  </h3>
                </div>

                <div className={`rounded-xl p-4 ${card.color}`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
