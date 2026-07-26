// types/adminBooking.ts

export interface Booking {
  destination_id: number;
  id: number;
  booking_reference: string;
  full_name: string;
  destination: string;
  arrival_date: string;
  adults: number;
  children: number;
  total_price: number;
  payment_status: "pending" | "deposit" | "paid";
  booking_status: "pending" | "confirmed" | "cancelled";
}
