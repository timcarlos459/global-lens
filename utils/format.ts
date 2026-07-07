// utils/format.ts

/**
 * Format any number as US Dollars.
 * Example:
 * 4900 -> $4,900
 */
export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

/**
 * Format a price with PP.
 * Example:
 * 4900 -> $4,900 PP
 */
export function formatPricePerPerson(amount: number): string {
  return `$${amount.toLocaleString("en-US")} PP`;
}

/**
 * Format guest text.
 */
export function formatGuests(guests: number): string {
  return guests === 1
    ? "1 Guest"
    : `${guests} Guests`;
}

/**
 * Format room text.
 */
export function formatRooms(rooms: number): string {
  return rooms === 1
    ? "1 Room"
    : `${rooms} Rooms`;
}

/**
 * Format tour duration.
 */
export function formatDuration(days: number): string {
  return days === 1
    ? "1 Day"
    : `${days} Days`;
}

/**
 * Format rating.
 */
export function formatRating(rating: number): string {
  return `${rating.toFixed(1)} / 5`;
}

/**
 * Capitalize text.
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convert slug into title.
 * Example:
 * maasai-mara -> Maasai Mara
 */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

/**
 * Shorten long descriptions.
 */
export function truncate(
  text: string,
  length = 120
): string {

  if (text.length <= length)
    return text;

  return text.substring(0, length) + "...";
}