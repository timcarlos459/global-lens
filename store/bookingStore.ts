import { create } from "zustand";
import type { BookingData } from "@/types/booking";

type BookingStore = {
  booking: BookingData | null;

  setBooking: (booking: BookingData) => void;

  clearBooking: () => void;
};

export const useBookingStore = create<BookingStore>((set) => ({
  booking: null,

  setBooking: (booking) =>
    set({
      booking,
    }),

  clearBooking: () =>
    set({
      booking: null,
    }),
}));
