export interface Settings {
  id: number;

  company_name: string;
  tagline: string;
  ceo: string;
  founded_year: string;
  description: string;

  address: string;
  city: string;
  country: string;

  phone: string;
  phone2: string;
  whatsapp: string;
  email: string;
  website: string;

  facebook: string;
  instagram: string;
  tiktok: string;
  linkedin: string;
  youtube: string;
  x: string;

  currency: string;

  booking_deposit: number;
  min_booking_days: number;
  max_guests: number;

  instant_booking: boolean;
  manual_approval: boolean;

  logo_url: string;
  favicon_url: string;

  meta_title: string;
  meta_description: string;
  keywords: string;

  google_analytics: string;
  facebook_pixel: string;

  created_at: string;
  updated_at: string;
}
