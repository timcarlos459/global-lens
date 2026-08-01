export interface Review {
  id: number;

  name: string;
  country: string;

  image_url: string | null;

  rating: number;
  review: string;

  destination: string | null;
  review_date: string | null;

  status: string;
  featured: boolean;

  created_at: string;
  updated_at: string;
}
