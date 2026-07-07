// utils/constants.ts

/**
 * Company Information
 */

export const COMPANY = {
  name: "Global Lens Tours & Travel",

  slogan: "Luxury African Safaris & Experiences",

  email: "info@globallensafrica.com",

  bookingsEmail: "bookings@globallensafrica.com",

  phone: "+254712345678",

  whatsapp: "+254712345678",

  website: "https://globallensafrica.com",

  location: "Nairobi, Kenya",
};

/**
 * Social Media
 */

export const SOCIALS = {
  facebook: "",

  instagram: "",

  x: "",

  linkedin: "",

  youtube: "",

  tiktok: "",
};

/**
 * Booking Rules
 */

export const BOOKING = {
  minimumGuests: 1,

  maximumGuests: 12,

  minimumRooms: 1,

  depositPercentage: 30,

  currency: "USD",

  priceSuffix: "PP",
};

/**
 * Seasons
 */

export const SEASONS = [
  "low",
  "standard",
  "peak",
] as const;

/**
 * Contact Information
 */

export const CONTACT = {
  supportHours: "Monday - Saturday",

  supportTime: "8:00 AM - 6:00 PM",

  emergencyNumber: "+254712345678",
};

/**
 * Default Images
 */

export const DEFAULT_IMAGES = {
  destination: "/images/default.jpg",

  avatar: "/images/avatar.png",

  hero: "/images/hero.jpg",
};

/**
 * Navigation
 */

export const NAVIGATION = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Booking",
    href: "/booking",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];