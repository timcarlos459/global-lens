"use client";

import Link from "next/link";
import { Star, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";

import type { Booking } from "@/types/adminBooking";
import type { Destination } from "@/types/adminDestination";

interface Props {
  bookings: Booking[];
  destinations: Destination[];
}

interface DestinationPerformance {
  id: number | string;
  name: string;
  country: string;
  bookings: number;
  revenue: number;
  rating: number;
}

export default function PopularDestinations({ bookings, destinations }: Props) {
  const performance: DestinationPerformance[] = destinations
    .map((destination) => {
      const destinationName = String(destination.name || "").trim();

      const destinationBookings = bookings.filter(
        (booking) =>
          booking.destination?.trim().toLowerCase() ===
          destinationName.toLowerCase(),
      );

      const revenue = destinationBookings
        .filter((booking) => booking.booking_status !== "cancelled")
        .reduce((sum, booking) => sum + Number(booking.total_price || 0), 0);

      return {
        id: destination.id,
        name: destinationName || "Unknown Destination",
        country: String(destination.country || "—"),
        bookings: destinationBookings.length,
        revenue,
        rating: Number(destination.rating || 0),
      };
    })
    .filter((destination) => destination.bookings > 0)
    .sort((a, b) => {
      if (b.bookings !== a.bookings) {
        return b.bookings - a.bookings;
      }

      return b.revenue - a.revenue;
    })
    .slice(0, 3);

  return (
    <section className="rounded-4xl border border-gray-200 bg-white p-8 shadow-xl">
      {/* Header */}

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-black text-[#081B29]">
            Top Performing Destinations
          </h2>

          <p className="mt-2 text-gray-500">
            Destinations with the strongest booking performance.
          </p>
        </div>

        <Link
          href="/admin/reports"
          className="flex items-center justify-center gap-2 rounded-full border border-[#64D98B] px-5 py-3 font-semibold text-[#64D98B] transition hover:bg-[#64D98B] hover:text-white"
        >
          View Report
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Empty State */}

      {performance.length === 0 ? (
        <div className="flex min-h-72 items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <MapPin size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#081B29]">
              No destination activity yet
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Top performing destinations will appear automatically after
              customers start making bookings.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {performance.map((destination, index) => (
            <div
              key={destination.id}
              className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Destination Header */}

              <div className="relative h-56 overflow-hidden bg-[#081B29]">
                <div className="absolute inset-0 bg-linear-to-br from-[#081B29] via-[#12364A] to-[#64D98B]/40" />

                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-sm font-black text-[#081B29] shadow-lg">
                  #{index + 1}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-black text-white">
                    {destination.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-white/80">
                    <MapPin size={16} />

                    <span>{destination.country}</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Bookings
                    </p>

                    <h4 className="mt-2 text-3xl font-black text-[#081B29]">
                      {destination.bookings.toLocaleString("en-US")}
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-[#64D98B]/15 p-4">
                    <TrendingUp className="text-[#64D98B]" size={30} />
                  </div>
                </div>

                <div className="mt-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Revenue</p>

                    <h5 className="mt-2 text-2xl font-black text-[#64D98B]">
                      ${destination.revenue.toLocaleString("en-US")}
                    </h5>
                  </div>

                  {destination.rating > 0 && (
                    <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
                      <Star
                        className="fill-yellow-500 text-yellow-500"
                        size={17}
                      />

                      <span className="font-bold text-gray-800">
                        {destination.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
