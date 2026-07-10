import { create } from "zustand";
import { BookingData } from "@/types/booking";

interface BookingStore {
  booking: BookingData | null;

  setBooking: (booking: BookingData) => void;

  clearBooking: () => void;
}

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
