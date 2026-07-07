// utils/dates.ts

export type Season = "low" | "standard" | "peak";

/**
 * Returns today's date.
 */
export function today(): Date {
  return new Date();
}

/**
 * Number of days between two dates.
 */
export function getNumberOfDays(
  startDate: Date,
  endDate: Date
): number {
  const milliseconds =
    endDate.getTime() - startDate.getTime();

  return Math.ceil(milliseconds / (1000 * 60 * 60 * 24));
}

/**
 * Returns check-out date.
 */
export function calculateCheckout(
  checkIn: Date,
  duration: number
): Date {
  const checkout = new Date(checkIn);

  checkout.setDate(checkout.getDate() + duration);

  return checkout;
}

/**
 * Detect travel season.
 */
export function getSeason(date: Date): Season {
  const month = date.getMonth() + 1;

  // Peak Season
  if (
    month === 7 ||
    month === 8 ||
    month === 9 ||
    month === 12
  ) {
    return "peak";
  }

  // Standard Season
  if (
    month === 1 ||
    month === 2 ||
    month === 6 ||
    month === 10
  ) {
    return "standard";
  }

  // Low Season
  return "low";
}

/**
 * Format date nicely.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}