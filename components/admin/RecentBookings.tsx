"use client";

import { CheckCircle2, Clock3, XCircle, Eye, ArrowUpRight } from "lucide-react";

import type { Booking } from "@/types/adminBooking";

interface Props {
  bookings: Booking[];
}

export default function RecentBookings({ bookings }: Props) {
  // Show the latest 5 bookings
  const recentBookings = [...bookings]
    .sort((a, b) => {
      const dateA = new Date(a.arrival_date).getTime();
      const dateB = new Date(b.arrival_date).getTime();

      return dateB - dateA;
    })
    .slice(0, 5);

  const formatDate = (date: string) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return `$${Number(amount || 0).toLocaleString("en-US")}`;
  };

  const getInitial = (name: string) => {
    return name?.trim()?.charAt(0).toUpperCase() || "?";
  };

  return (
    <section className="overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-xl">
      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-gray-100 px-8 py-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black text-[#081B29]">
            Recent Bookings
          </h2>

          <p className="mt-1 text-gray-500">Latest reservations received.</p>
        </div>

        <a
          href="/admin/bookings"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#64D98B] px-5 py-3 font-semibold text-[#64D98B] transition hover:bg-[#64D98B] hover:text-white"
        >
          View All
          <ArrowUpRight size={17} />
        </a>
      </div>

      {/* Empty State */}

      {recentBookings.length === 0 ? (
        <div className="flex min-h-80 items-center justify-center px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <Clock3 size={28} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#081B29]">
              No bookings yet
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Recent customer reservations will appear here automatically once
              bookings are received.
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-225">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-sm uppercase tracking-wider text-gray-500">
                <th className="px-8 py-5">Booking</th>
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Destination</th>
                <th className="px-8 py-5">Amount</th>
                <th className="px-8 py-5">Travel Date</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-gray-100 transition hover:bg-[#F9FCFB]"
                >
                  {/* Booking Reference */}

                  <td className="px-8 py-6">
                    <p className="font-bold text-[#081B29]">
                      {booking.booking_reference || `#${booking.id}`}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Booking #{booking.id}
                    </p>
                  </td>

                  {/* Customer */}

                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#64D98B]/15 font-bold text-[#081B29]">
                        {getInitial(booking.full_name)}
                      </div>

                      <div>
                        <p className="font-bold text-[#081B29]">
                          {booking.full_name || "Unknown Customer"}
                        </p>

                        <p className="text-sm text-gray-500">
                          {booking.adults + booking.children}{" "}
                          {booking.adults + booking.children === 1
                            ? "Guest"
                            : "Guests"}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Destination */}

                  <td className="px-8 py-6">
                    <p className="font-semibold text-[#081B29]">
                      {booking.destination || "—"}
                    </p>
                  </td>

                  {/* Amount */}

                  <td className="px-8 py-6">
                    <p className="font-bold text-[#64D98B]">
                      {formatCurrency(booking.total_price)}
                    </p>
                  </td>

                  {/* Travel Date */}

                  <td className="px-8 py-6 text-gray-500">
                    {formatDate(booking.arrival_date)}
                  </td>

                  {/* Status */}

                  <td className="px-8 py-6">
                    {booking.booking_status === "confirmed" && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        <CheckCircle2 size={16} />
                        Confirmed
                      </span>
                    )}

                    {booking.booking_status === "cancelled" && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                        <XCircle size={16} />
                        Cancelled
                      </span>
                    )}

                    {booking.booking_status !== "confirmed" &&
                      booking.booking_status !== "cancelled" && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                          <Clock3 size={16} />
                          Pending
                        </span>
                      )}
                  </td>

                  {/* Action */}

                  <td className="px-8 py-6 text-right">
                    <a
                      href="/admin/bookings"
                      title="View booking"
                      className="inline-flex rounded-xl p-2 text-gray-500 transition hover:bg-[#64D98B]/10 hover:text-[#081B29]"
                    >
                      <Eye size={20} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
