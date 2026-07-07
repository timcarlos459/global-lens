export function generateBookingReference(): string {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();

  const year = new Date().getFullYear();

  return `GL-${year}-${random}`;
}
