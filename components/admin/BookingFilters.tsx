"use client";

import { Search, CalendarDays, Filter, RotateCcw, X } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  destination: string;
  setDestination: (value: string) => void;

  bookingStatus: string;
  setBookingStatus: (value: string) => void;

  paymentStatus: string;
  setPaymentStatus: (value: string) => void;

  date: string;
  setDate: (value: string) => void;

  onReset: () => void;
}

export default function BookingFilters({
  search,
  setSearch,
  destination,
  setDestination,
  bookingStatus,
  setBookingStatus,
  paymentStatus,
  setPaymentStatus,
  date,
  setDate,
  onReset,
}: Props) {
  const hasFilters =
    search || destination || bookingStatus || paymentStatus || date;

  return (
    <div className="rounded-[30px] border border-gray-200 bg-white p-7 shadow-lg">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#081B29] text-white">
              <Filter size={18} />
            </div>

            <div>
              <h2 className="font-bold text-[#081B29]">Booking Filters</h2>

              <p className="text-sm text-gray-500">
                Find and organize reservations
              </p>
            </div>
          </div>
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-red-600"
          >
            <X size={16} />
            Clear filters
          </button>
        )}
      </div>

      {/* Filters */}

      <div className="grid gap-4 lg:grid-cols-6">
        {/* Search */}

        <div className="relative lg:col-span-2">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name or booking reference..."
            className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#64D98B] focus:bg-white focus:ring-4 focus:ring-[#64D98B]/10"
          />
        </div>

        {/* Destination */}

        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="h-12 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-[#64D98B] focus:bg-white focus:ring-4 focus:ring-[#64D98B]/10"
        >
          <option value="">All Destinations</option>

          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Uganda">Uganda</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Botswana">Botswana</option>
        </select>

        {/* Booking Status */}

        <select
          value={bookingStatus}
          onChange={(e) => setBookingStatus(e.target.value)}
          className="h-12 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-[#64D98B] focus:bg-white focus:ring-4 focus:ring-[#64D98B]/10"
        >
          <option value="">All Booking Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        {/* Payment Status */}

        <select
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          className="h-12 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-[#64D98B] focus:bg-white focus:ring-4 focus:ring-[#64D98B]/10"
        >
          <option value="">All Payment Status</option>
          <option value="paid">Paid</option>
          <option value="deposit">Deposit</option>
          <option value="pending">Pending</option>
        </select>

        {/* Date */}

        <div className="relative">
          <CalendarDays
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#64D98B] focus:bg-white focus:ring-4 focus:ring-[#64D98B]/10"
          />
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="h-2 w-2 rounded-full bg-[#64D98B]" />
          Filters update the booking list automatically
        </div>

        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
        >
          <RotateCcw size={17} />
          Reset
        </button>
      </div>
    </div>
  );
}
