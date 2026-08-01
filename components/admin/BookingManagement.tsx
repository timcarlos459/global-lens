"use client";

import { useMemo, useState } from "react";

import type { Booking } from "@/types/adminBooking";

import BookingFilters from "./BookingFilters";
import BookingTable from "./BookingTable";

interface Props {
  bookings: Booking[];
}

export default function BookingManagement({ bookings }: Props) {
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [date, setDate] = useState("");

  const filteredBookings = useMemo(() => {
    const query = search.trim().toLowerCase();

    return bookings.filter((booking) => {
      const matchesSearch =
        !query ||
        booking.full_name.toLowerCase().includes(query) ||
        booking.booking_reference.toLowerCase().includes(query);

      const matchesDestination =
        !destination ||
        booking.tour_slug?.toLowerCase().includes(destination.toLowerCase());

      const matchesBookingStatus =
        !bookingStatus || booking.booking_status === bookingStatus;

      const matchesPaymentStatus =
        !paymentStatus || booking.payment_status === paymentStatus;

      const matchesDate = !date || booking.arrival_date === date;

      return (
        matchesSearch &&
        matchesDestination &&
        matchesBookingStatus &&
        matchesPaymentStatus &&
        matchesDate
      );
    });
  }, [bookings, search, destination, bookingStatus, paymentStatus, date]);

  const resetFilters = () => {
    setSearch("");
    setDestination("");
    setBookingStatus("");
    setPaymentStatus("");
    setDate("");
  };

  return (
    <div className="space-y-6">
      <BookingFilters
        search={search}
        setSearch={setSearch}
        destination={destination}
        setDestination={setDestination}
        bookingStatus={bookingStatus}
        setBookingStatus={setBookingStatus}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        date={date}
        setDate={setDate}
        onReset={resetFilters}
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-bold text-[#081B29]">
            {filteredBookings.length}
          </span>{" "}
          of <span className="font-bold text-[#081B29]">{bookings.length}</span>{" "}
          bookings
        </p>
      </div>

      <BookingTable bookings={filteredBookings} />
    </div>
  );
}
