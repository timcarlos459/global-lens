"use server";

import { BookingData } from "@/types/booking";
import { supabase } from "@/utils/supabase";

export async function createBooking(data: BookingData) {
  const { data: booking, error } = await supabase
    .from("bookings")
    .insert([
      {
        booking_reference: data.bookingReference,

        tour_slug: data.tourSlug,

        full_name: data.fullName,

        email: data.email,

        country: data.nationality,

        adults: data.adults,
        children: data.children,
        infants: data.infants,

        room_type: data.roomType,

        arrival_date: data.startDate,
        departure_date: data.endDate,

        payment_option: data.paymentOption,

        total_price: data.subtotal,
        payment_amount: data.amountToPay,

        payment_status: "pending",
        booking_status: "pending",

        special_requests: "",
      },
    ])
    .select()
    .single();

  if (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
    bookingId: booking.id,
    bookingReference: booking.booking_reference,
  };
}
