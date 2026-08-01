"use client";

import { X, CalendarDays, Users, Mail, Globe, BedDouble } from "lucide-react";

import type { Booking } from "@/types/adminBooking";

interface Props {
  booking: Booking | null;
  open: boolean;
  onClose: () => void;
}

export default function BookingDetailsModal({ booking, open, onClose }: Props) {
  if (!open || !booking) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-xl overflow-y-auto bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-black text-[#081B29]">
              Booking Details
            </h2>

            <p className="mt-1 text-gray-500">{booking.booking_reference}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-gray-100"
            aria-label="Close booking details"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-8 p-8">
          {/* Customer */}
          <div className="rounded-3xl bg-[#F8FBFC] p-6">
            <h3 className="mb-5 text-xl font-bold text-[#081B29]">Customer</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="text-[#64D98B]" size={20} />
                <span>{booking.full_name}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#64D98B]" size={20} />
                <span>{booking.email || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-[#64D98B]" size={20} />
                <span>{booking.country || "-"}</span>
              </div>
            </div>
          </div>

          {/* Tour */}
          <div className="rounded-3xl bg-[#F8FBFC] p-6">
            <h3 className="mb-5 text-xl font-bold text-[#081B29]">Tour</h3>

            <div className="space-y-4">
              <p className="text-gray-700">
                <strong className="text-[#081B29]">Tour:</strong>{" "}
                {booking.tour_slug || "-"}
              </p>

              <div className="flex items-center gap-3">
                <CalendarDays className="text-[#64D98B]" size={20} />

                <div>
                  <p className="font-medium text-gray-700">
                    Arrival: {booking.arrival_date}
                  </p>

                  {booking.departure_date && (
                    <p className="text-sm text-gray-500">
                      Departure: {booking.departure_date}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BedDouble className="text-[#64D98B]" size={20} />
                <span>{booking.room_type || "-"}</span>
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="rounded-3xl bg-[#F8FBFC] p-6">
            <h3 className="mb-5 text-xl font-bold text-[#081B29]">Guests</h3>

            <div className="grid grid-cols-3 gap-5 text-center">
              <div>
                <h4 className="text-3xl font-black text-[#64D98B]">
                  {booking.adults}
                </h4>

                <p className="text-gray-600">Adults</p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-[#64D98B]">
                  {booking.children}
                </h4>

                <p className="text-gray-600">Children</p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-[#64D98B]">
                  {booking.infants}
                </h4>

                <p className="text-gray-600">Infants</p>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="rounded-3xl bg-[#081B29] p-6 text-white">
            <h3 className="text-xl font-bold">Payment Summary</h3>

            <h2 className="mt-4 text-5xl font-black text-[#64D98B]">
              ${booking.total_price.toLocaleString()}
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#64D98B] px-5 py-2 font-bold capitalize text-[#081B29]">
                {booking.payment_status}
              </span>

              <span className="rounded-full bg-white/10 px-5 py-2 capitalize">
                {booking.booking_status}
              </span>
            </div>
          </div>

          {/* Special Requests */}
          {booking.special_requests && (
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-[#081B29]">
                Special Requests
              </h3>

              <p className="leading-7 text-gray-600">
                {booking.special_requests}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
