"use server";

import { createClient } from "@/utils/supabase/server";
import type { Booking } from "@/types/adminBooking";

// ===========================
// GET ALL BOOKINGS
// ===========================

export async function getBookings(): Promise<Booking[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("getBookings error:", error);
    throw new Error(error.message);
  }

  return (data ?? []) as Booking[];
}

// ===========================
// GET ONE BOOKING
// ===========================

export async function getBooking(id: string): Promise<Booking | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("getBooking error:", error);
    return null;
  }

  return data as Booking;
}

// ===========================
// UPDATE BOOKING
// ===========================

export async function updateBooking(booking: Booking) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("bookings")
    .update({
      full_name: booking.full_name,
      email: booking.email,
      phone: booking.phone,
      country: booking.country,

      adults: booking.adults,
      children: booking.children,
      infants: booking.infants,

      arrival_date: booking.arrival_date,
      departure_date: booking.departure_date,

      tour_slug: booking.tour_slug,

      special_requests: booking.special_requests,

      total_price: booking.total_price,

      payment_status: booking.payment_status,
      payment_option: booking.payment_option,

      booking_status: booking.booking_status,

      room_type: booking.room_type,

      updated_at: new Date().toISOString(),
    })
    .eq("id", booking.id);

  if (error) {
    console.error("updateBooking error:", error);
    throw new Error(error.message);
  }

  return true;
}

// ===========================
// CONFIRM BOOKING
// ===========================

export async function confirmBooking(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("bookings")
    .update({
      booking_status: "confirmed",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("confirmBooking error:", error);
    throw new Error(error.message);
  }

  return true;
}

// ===========================
// CANCEL BOOKING
// ===========================

export async function cancelBooking(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("bookings")
    .update({
      booking_status: "cancelled",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("cancelBooking error:", error);
    throw new Error(error.message);
  }

  return true;
}

// ===========================
// MARK BOOKING AS CONFIRMED
// ===========================

export async function updateBookingStatus(id: string, status: string) {
  const supabase = await createClient();

  const allowedStatuses = ["pending", "confirmed", "cancelled", "completed"];

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid booking status.");
  }

  const { error } = await supabase
    .from("bookings")
    .update({
      booking_status: status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("updateBookingStatus error:", error);
    throw new Error(error.message);
  }

  return true;
}

// ===========================
// UPDATE PAYMENT STATUS
// ===========================

export async function updatePaymentStatus(id: string, status: string) {
  const supabase = await createClient();

  const allowedStatuses = [
    "pending",
    "deposit",
    "paid",
    "unpaid",
    "partial",
    "refunded",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid payment status.");
  }

  const { error } = await supabase
    .from("bookings")
    .update({
      payment_status: status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("updatePaymentStatus error:", error);
    throw new Error(error.message);
  }

  return true;
}

// ===========================
// DELETE BOOKING
// ===========================

export async function deleteBooking(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error("deleteBooking error:", error);
    throw new Error(error.message);
  }

  return true;
}
