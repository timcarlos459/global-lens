"use client";

import type { Booking } from "@/types/adminBooking";

import { MapPinned, TrendingUp, CalendarCheck, Trophy } from "lucide-react";

interface Props {
  bookings: Booking[];
}

interface DestinationPerformance {
  name: string;
  bookings: number;
  revenue: number;
}

export default function TopDestinations({ bookings }: Props) {
  const performance: Record<string, DestinationPerformance> = {};

  // Build destination performance directly from bookings
  bookings.forEach((booking) => {
    const destinationName =
      booking.destination?.trim() || "Unknown Destination";

    if (!performance[destinationName]) {
      performance[destinationName] = {
        name: destinationName,
        bookings: 0,
        revenue: 0,
      };
    }

    // Cancelled bookings are not counted
    if (booking.booking_status !== "cancelled") {
      performance[destinationName].bookings += 1;
      performance[destinationName].revenue += booking.total_price || 0;
    }
  });

  // Sort by booking volume, then revenue
  const topDestinations = Object.values(performance)
    .sort((a, b) => {
      if (b.bookings !== a.bookings) {
        return b.bookings - a.bookings;
      }

      return b.revenue - a.revenue;
    })
    .slice(0, 6);

  const highestBookings =
    topDestinations.length > 0
      ? Math.max(...topDestinations.map((destination) => destination.bookings))
      : 0;

  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      {/* Header */}
      <div className="mb-8 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
          <MapPinned size={21} />
        </div>

        <div>
          <h2 className="text-2xl font-black text-[#081B29]">
            Top Destinations
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Destinations with the strongest booking performance.
          </p>
        </div>
      </div>

      {/* Empty State */}
      {topDestinations.length === 0 ? (
        <div className="flex min-h-70 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm">
              <MapPinned size={25} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#081B29]">
              No destination analytics yet
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Destination performance will appear automatically after customers
              start making bookings.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {topDestinations.map((destination, index) => {
            const percentage =
              highestBookings > 0
                ? (destination.bookings / highestBookings) * 100
                : 0;

            const isFirst = index === 0;

            return (
              <div
                key={destination.name}
                className="group rounded-2xl border border-gray-100 p-5 transition-all duration-200 hover:border-[#64D98B]/30 hover:bg-[#F8FBFC]"
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                      isFirst
                        ? "bg-[#64D98B] text-[#081B29]"
                        : "bg-[#081B29] text-white"
                    }`}
                  >
                    {isFirst ? (
                      <Trophy size={19} />
                    ) : (
                      String(index + 1).padStart(2, "0")
                    )}
                  </div>

                  {/* Destination Information */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="truncate font-bold text-[#081B29]">
                          {destination.name}
                        </h3>

                        <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                          <CalendarCheck size={13} />

                          <span>
                            {destination.bookings.toLocaleString("en-US")}{" "}
                            {destination.bookings === 1
                              ? "booking"
                              : "bookings"}
                          </span>
                        </div>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="font-black text-[#081B29]">
                          ${destination.revenue.toLocaleString("en-US")}
                        </p>

                        <p className="mt-1 text-xs font-medium text-gray-400">
                          Booking value
                        </p>
                      </div>
                    </div>

                    {/* Performance Bar */}
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#64D98B] transition-all duration-700"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>

                      <span className="w-12 text-right text-xs font-bold text-gray-500">
                        {percentage.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Insight */}
      {topDestinations.length > 0 && (
        <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#081B29] p-5 text-white">
          <TrendingUp size={20} className="mt-0.5 shrink-0 text-[#64D98B]" />

          <div>
            <p className="font-bold">Leading destination</p>

            <p className="mt-1 text-sm leading-6 text-gray-300">
              {topDestinations[0].name} currently has the highest booking
              volume.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
