"use server";

import { supabase } from "@/utils/supabase";
import type { Booking } from "@/types/adminBooking";

// ===========================
// GET BOOKINGS
// ===========================

export async function getBookings(): Promise<Booking[]> {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("arrival_date", {
      ascending: false,
    });

  if (error) throw error;

  return (data ?? []) as Booking[];
}

// ===========================
// UPDATE
// ===========================

export async function updateBooking(booking: Booking) {
  const { error } = await supabase
    .from("bookings")
    .update({
      full_name: booking.full_name,
      destination: booking.destination,
      arrival_date: booking.arrival_date,
      adults: booking.adults,
      children: booking.children,
      total_price: booking.total_price,
      payment_status: booking.payment_status,
      booking_status: booking.booking_status,
    })
    .eq("id", booking.id);

  if (error) throw error;

  return true;
}

// ===========================
// CONFIRM
// ===========================

export async function confirmBooking(id: number) {
  const { error } = await supabase
    .from("bookings")
    .update({
      booking_status: "confirmed",
    })
    .eq("id", id);

  if (error) throw error;

  return true;
}

// ===========================
// CANCEL
// ===========================

export async function cancelBooking(id: number) {
  const { error } = await supabase
    .from("bookings")
    .update({
      booking_status: "cancelled",
    })
    .eq("id", id);

  if (error) throw error;

  return true;
}

// ===========================
// DELETE
// ===========================

export async function deleteBooking(id: number) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) throw error;

  return true;
}
