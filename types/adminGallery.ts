export type GalleryCategory =
  | "Safari"
  | "Beach"
  | "Mountain"
  | "Island"
  | "Gorilla Trekking"
  | "Culture";

export type GalleryStatus = "Published" | "Draft" | "Archived";

export interface GalleryItem {
  id: string;

  title: string;

  image_url: string;

  category: GalleryCategory;

  destination: string | null;

  description: string | null;

  status: GalleryStatus;

  featured: boolean;

  created_at: string;

  updated_at: string;
}
