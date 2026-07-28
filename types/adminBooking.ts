// types/adminBooking.ts

export interface Booking {
  id: string;
  created_at: string;

  booking_reference: string;

  full_name: string;
  email: string;
  phone: string;
  country: string;

  adults: number;
  children: number;
  infants: number;

  arrival_date: string;
  departure_date: string;

  tour_slug: string;

  special_requests: string | null;

  total_price: number;

  payment_status: string;
  payment_id: string | null;
  payment_currency: string | null;
  payment_amount: number | null;
  payment_option: string | null;

  booking_status: string;

  room_type: string | null;
}
