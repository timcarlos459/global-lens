export type Season = "low" | "standard" | "peak";

export interface SeasonalPrice {
  low: number;
  standard: number;
  peak: number;
}

export interface RoomOccupancy {
  guests: number;
  rooms: string;

  standard: SeasonalPrice;
  deluxe: SeasonalPrice;
  luxury: SeasonalPrice;
}

export interface Destination {
  id: number;

  slug: string;

  name: string;

  country: string;

  category: string;

  image: string;

  gallery: string[];

  rating: number;

  duration: string;

  location: string;

  overview: string;

  description: string;

  bestTime: string;

  difficulty: string;

  groupSize: string;

  roomOccupancy: RoomOccupancy[];

  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];

  highlights: string[];

  included: string[];

  excluded: string[];
}
