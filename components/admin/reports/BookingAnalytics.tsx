"use client";

import type { Booking } from "@/types/adminBooking";
import type { Destination } from "@/types/adminDestination";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  bookings: Booking[];
  destinations: Destination[];
}

export default function BookingAnalytics({ bookings, destinations }: Props) {
  const categories = [
    "Safari",
    "Beach",
    "Mountain",
    "Island",
    "Cultural",
    "Adventure",
  ];

  const data = categories.map((category) => {
    const total = bookings.filter((booking) => {
      const destination = destinations.find(
        (d) => d.name === booking.destination,
      );

      return destination?.category === category;
    }).length;

    return {
      category,
      bookings: total,
    };
  });

  const hasBookings = bookings.length > 0;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-black text-[#081B29]">
          Booking Analytics
        </h2>

        <p className="mt-2 text-gray-500">
          Booking trends across destination categories.
        </p>
      </div>

      {!hasBookings ? (
        <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
          <div className="max-w-md text-center">
            <h3 className="text-xl font-bold text-gray-700">
              Booking analytics will appear here
            </h3>

            <p className="mt-3 leading-7 text-gray-500">
              Once customers begin making reservations, this chart will
              automatically visualize booking activity across your destination
              categories.
            </p>
          </div>
        </div>
      ) : (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="4 4" vertical={false} />

              <XAxis dataKey="category" axisLine={false} tickLine={false} />

              <YAxis allowDecimals={false} axisLine={false} tickLine={false} />

              <Tooltip
                formatter={(value) => [value, "Bookings"]}
                contentStyle={{
                  borderRadius: 16,
                  border: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                }}
              />

              <Bar dataKey="bookings" radius={[8, 8, 0, 0]} fill="#64D98B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
