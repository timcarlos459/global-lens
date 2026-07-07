// utils/validation.ts

/**
 * Validate email address.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate international phone number.
 * Accepts:
 * +254712345678
 * 0712345678
 */
export function isValidPhone(phone: string): boolean {
  return /^(\+?\d{10,15})$/.test(
    phone.replace(/\s+/g, "")
  );
}

/**
 * Name validation.
 */
export function isValidName(name: string): boolean {
  return name.trim().length >= 2;
}

/**
 * Number of guests.
 */
export function isValidGuests(guests: number): boolean {
  return guests >= 1 && guests <= 50;
}

/**
 * Travel date must be today or later.
 */
export function isValidTravelDate(date: Date): boolean {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date >= today;
}

/**
 * Validate passport number.
 */
export function isValidPassport(passport: string): boolean {
  return passport.trim().length >= 6;
}

/**
 * Validate nationality.
 */
export function isValidNationality(
  nationality: string
): boolean {
  return nationality.trim().length >= 2;
}

/**
 * Validate message.
 */
export function isValidMessage(
  message: string
): boolean {
  return message.trim().length >= 10;
}

/**
 * Validate number of rooms.
 */
export function isValidRooms(
  rooms: number
): boolean {
  return rooms >= 1;
}

/**
 * Validate booking form.
 */
export function validateBooking(data: {
  fullName: string;
  email: string;
  phone: string;
  guests: number;
}) {
  return {
    name: isValidName(data.fullName),
    email: isValidEmail(data.email),
    phone: isValidPhone(data.phone),
    guests: isValidGuests(data.guests),
  };
}