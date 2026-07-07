export type PricingTier = {
  guests: number;
  rooms: number;
  pricePerPerson: number;
};

export type SeasonalPricing = {
  low: PricingTier[];
  standard: PricingTier[];
  peak: PricingTier[];
};

export type RoomPricing = {
  standard: SeasonalPricing;
  deluxe: SeasonalPricing;
  luxury: SeasonalPricing;
};
