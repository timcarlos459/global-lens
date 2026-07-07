import { BasePrices, RoomOccupancy, Season } from "@/types/booking";

/**
 * Calculate the adult price depending on:
 * - Room selected
 * - Season
 * - Number of guests (multiplier)
 */
export function calculateAdultPrice(
  basePrices: BasePrices,
  occupancy: RoomOccupancy,
  roomType: string,
  season: Season,
): number {
  if (!occupancy || occupancy.multiplier === 0) {
    return 0;
  }

  let basePrice = 0;

  switch (roomType) {
    case "Luxury Suite":
      basePrice = basePrices.luxury[season];
      break;

    case "Deluxe Room":
      basePrice = basePrices.deluxe[season];
      break;

    case "Standard Room":
    default:
      basePrice = basePrices.standard[season];
      break;
  }

  return Math.round(basePrice * occupancy.multiplier);
}

/**
 * Children pay 70% of the adult price.
 */
export function calculateChildPrice(adultPrice: number): number {
  return Math.round(adultPrice * 0.7);
}

/**
 * Adults total.
 */
export function calculateAdultsTotal(
  adults: number,
  adultPrice: number,
): number {
  return adults * adultPrice;
}

/**
 * Children total.
 */
export function calculateChildrenTotal(
  children: number,
  childPrice: number,
): number {
  return children * childPrice;
}

/**
 * Grand total.
 */
export function calculateSubtotal(
  adultsTotal: number,
  childrenTotal: number,
): number {
  return adultsTotal + childrenTotal;
}

/**
 * 60% Deposit.
 */
export function calculateDeposit(subtotal: number): number {
  return Math.round(subtotal * 0.6);
}

/**
 * Remaining balance.
 */
export function calculateBalance(subtotal: number, deposit: number): number {
  return subtotal - deposit;
}
