export type Season = "low" | "standard" | "peak";

export type PaymentOption = "deposit" | "full";

export interface SeasonalPrice {
  low: number;
  standard: number;
  peak: number;
}

export interface BasePrices {
  standard: SeasonalPrice;
  deluxe: SeasonalPrice;
  luxury: SeasonalPrice;
}

export interface BookingData {
  bookingReference: string;

  destination: string;

  fullName: string;
  email: string;
  nationality: string;

  adults: number;
  children: number;
  infants: number;

  roomType: string;

  startDate: string;
  endDate: string;

  season: Season;

  subtotal: number;
  deposit: number;
  amountToPay: number;

  paymentOption: PaymentOption;
}
