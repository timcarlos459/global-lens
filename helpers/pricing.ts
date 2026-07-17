import { RoomOccupancy } from "@/data/destinations/types";
import { RoomType, Season } from "@/types/booking";

/**
 * Price per adult.
 */
export function calculateAdultPrice(
  roomOccupancy: RoomOccupancy[],
  guests: number,
  roomType: RoomType,
  season: Season,
): number {
  const occupancy = roomOccupancy.find((item) => item.guests === guests);

  if (!occupancy) {
    throw new Error(`No pricing found for ${guests} guests.`);
  }

  switch (roomType) {
    case "Luxury Suite":
      return occupancy.luxury[season];

    case "Deluxe Room":
      return occupancy.deluxe[season];

    case "Standard Room":
    default:
      return occupancy.standard[season];
  }
}

/**
 * Child pays 70%.
 */
export function calculateChildPrice(adultPrice: number): number {
  return Math.round(adultPrice * 0.7);
}

export function calculateAdultsTotal(
  adults: number,
  adultPrice: number,
): number {
  return adults * adultPrice;
}

export function calculateChildrenTotal(
  children: number,
  childPrice: number,
): number {
  return children * childPrice;
}

export function calculateSubtotal(
  adultsTotal: number,
  childrenTotal: number,
): number {
  return adultsTotal + childrenTotal;
}

export function calculateDeposit(subtotal: number): number {
  return Math.round(subtotal * 0.6);
}

export function calculateBalance(subtotal: number, deposit: number): number {
  return subtotal - deposit;
}
