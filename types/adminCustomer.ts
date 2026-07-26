export interface Customer {
  id: number;

  full_name: string;

  email: string;

  phone: string;

  country: string;

  city: string;

  joined_date: string;

  status: "active" | "inactive";

  total_bookings: number;

  total_spent: number;
}
