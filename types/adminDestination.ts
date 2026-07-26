export interface Destination {
  id: number;

  name: string;

  slug: string;

  country: string;

  city: string;

  category:
    | "Safari"
    | "Beach"
    | "Mountain"
    | "Island"
    | "Cultural"
    | "Adventure";

  price: number;

  duration: string;

  rating: number;

  featured: boolean;

  description: string;

  thumbnail: string;

  gallery: string[];

  created_at: string;
}
