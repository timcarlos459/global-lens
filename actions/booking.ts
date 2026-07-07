"use server";

import { BookingData } from "@/types/booking";

export async function createBooking(data: BookingData) {
  // Temporary

  console.log("New Booking");

  console.log(data);

  return {
    success: true,
    bookingReference:
      "GL-" +
      new Date().getFullYear() +
      "-" +
      Math.random().toString(36).substring(2, 8).toUpperCase(),
  };
}
