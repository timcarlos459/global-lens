// utils/booking.ts

export interface RoomOccupancy {
  guests: number;
  rooms: number;
}

export function calculateRooms(guests: number): RoomOccupancy {
  if (guests <= 2) {
    return {
      guests,
      rooms: 1,
    };
  }

  if (guests <= 4) {
    return {
      guests,
      rooms: 2,
    };
  }

  if (guests <= 6) {
    return {
      guests,
      rooms: 3,
    };
  }

  if (guests <= 8) {
    return {
      guests,
      rooms: 4,
    };
  }

  return {
    guests,
    rooms: Math.ceil(guests / 2),
  };
}

export function roomText(rooms: number): string {
  return rooms === 1 ? "1 Room" : `${rooms} Rooms`;
}

export function guestText(guests: number): string {
  return guests === 1 ? "1 Guest" : `${guests} Guests`;
}

export function canBookOnline(guests: number): boolean {
  return guests <= 12;
}