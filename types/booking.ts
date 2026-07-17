export type Season = "low" | "standard" | "peak";

export type PaymentOption = "deposit" | "full";

export type RoomType = "Standard Room" | "Deluxe Room" | "Luxury Suite";

export interface BookingData {
  bookingReference: string;

  tourSlug: string;
  destination: string;

  fullName: string;
  email: string;
  nationality: string;

  adults: number;
  children: number;
  infants: number;

  roomType: RoomType;

  startDate: string;
  endDate: string;

  season: Season;

  subtotal: number;
  deposit: number;
  amountToPay: number;

  paymentOption: PaymentOption;
}
