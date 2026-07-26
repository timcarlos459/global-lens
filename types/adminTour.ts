export interface Tour {
  id: number;
  title: string;
  slug: string;

  destination: string;
  country: string | null;

  description: string | null;

  image: string | null;
  duration: string | null;

  price: number;

  category: string;

  status: "Published" | "Draft" | "Archived";

  featured: boolean;

  bookings_count: number;

  rating: number;

  created_at: string;
  updated_at: string;
}
