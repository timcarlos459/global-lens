// utils/pricing.ts

export type Season = "low" | "standard" | "peak";

export interface TourPrice {
  low: string;
  standard: string;
  peak: string;
}

/**
 * Convert "$4,900 PP" → 4900
 */
export function parsePrice(price: string): number {
  return Number(
    price.replace("$", "").replace(/,/g, "").replace(" PP", "").trim(),
  );
}

/**
 * Returns the price string for the selected season.
 */
export function getSeasonPrice(price: TourPrice, season: Season): string {
  return price[season];
}

/**
 * Returns the numeric price for the selected season.
 */
export function getSeasonPriceNumber(price: TourPrice, season: Season): number {
  return parsePrice(price[season]);
}

/**
 * Calculate total cost.
 */
export function calculateTotalPrice(
  price: TourPrice,
  season: Season,
  guests: number,
): number {
  return getSeasonPriceNumber(price, season) * guests;
}

/**
 * Format any amount into USD.
 */
export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

/**
 * Calculate deposit (60%)
 */
export function calculateDeposit(total: number, percentage = 60): number {
  return (total * percentage) / 100;
}

/**
 * Calculate remaining balance.
 */
export function calculateBalance(total: number, deposit: number): number {
  return total - deposit;
}
