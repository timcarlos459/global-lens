// utils/helpers.ts

/**
 * Generate a random booking reference.
 * Example:
 * GLT-8F3A91
 */

export function generateBookingReference(): string {
  const random = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `GLT-${random}`;
}

/**
 * Generate random ID.
 */

export function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Sleep helper.
 */

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/**
 * Returns true if array is empty.
 */

export function isEmpty<T>(array: T[]): boolean {
  return array.length === 0;
}

/**
 * Remove duplicate items.
 */

export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Shuffle array.
 */

export function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Get random item.
 */

export function randomItem<T>(array: T[]): T {
  return array[
    Math.floor(Math.random() * array.length)
  ];
}

/**
 * Scroll page to top.
 */

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * Copy text.
 */

export async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

/**
 * Delay.
 */

export async function wait(seconds: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, seconds * 1000)
  );
}