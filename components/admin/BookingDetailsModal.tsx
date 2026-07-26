"use client";

import { X, CalendarDays, Users, Mail, Globe, BedDouble } from "lucide-react";

interface Booking {
  id: number;
  booking_reference: string;
  full_name: string;
  email?: string;
  nationality?: string;
  destination: string;
  arrival_date: string;
  departure_date?: string;
  adults: number;
  children: number;
  infants?: number;
  room_type?: string;
  total_price: number;
  payment_status: string;
  booking_status: string;
}

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
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-gray-100"
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
                <span>{booking.nationality || "-"}</span>
              </div>
            </div>
          </div>

          {/* Tour */}

          <div className="rounded-3xl bg-[#F8FBFC] p-6">
            <h3 className="mb-5 text-xl font-bold text-[#081B29]">Tour</h3>

            <div className="space-y-4">
              <p>
                <strong>Destination:</strong> {booking.destination}
              </p>

              <div className="flex items-center gap-3">
                <CalendarDays className="text-[#64D98B]" size={20} />
                <span>{booking.arrival_date}</span>
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

                <p>Adults</p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-[#64D98B]">
                  {booking.children}
                </h4>

                <p>Children</p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-[#64D98B]">
                  {booking.infants || 0}
                </h4>

                <p>Infants</p>
              </div>
            </div>
          </div>

          {/* Payment */}

          <div className="rounded-3xl bg-[#081B29] p-6 text-white">
            <h3 className="text-xl font-bold">Payment Summary</h3>

            <h2 className="mt-4 text-5xl font-black text-[#64D98B]">
              ${booking.total_price.toLocaleString()}
            </h2>

            <div className="mt-6 flex gap-3">
              <span className="rounded-full bg-[#64D98B] px-5 py-2 font-bold text-[#081B29]">
                {booking.payment_status}
              </span>

              <span className="rounded-full bg-white/10 px-5 py-2">
                {booking.booking_status}
              </span>
            </div>
          </div>

          {/* Footer */}

          <div className="flex gap-4">
            <button className="flex-1 rounded-2xl bg-[#64D98B] py-4 font-bold text-[#081B29]">
              Confirm Booking
            </button>

            <button className="flex-1 rounded-2xl bg-red-500 py-4 font-bold text-white">
              Cancel Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
