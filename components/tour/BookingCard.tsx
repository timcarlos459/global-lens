"use client";

import { useRouter } from "next/navigation";
import type { Destination } from "@/data/destinations/types";

interface BookingCardProps {
  destination: Destination;
}

export default function BookingCard({ destination }: BookingCardProps) {
  const router = useRouter();

  const startingPrice =
    destination.roomOccupancy.find((room) => room.guests === 1)?.standard.low ??
    0;
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sticky top-28">
      <h2 className="text-3xl font-black text-[#081B29]">Book This Tour</h2>

      <p className="mt-3 text-gray-500">Reserve your adventure today.</p>

      <div className="my-8">
        <p className="text-gray-500">Starting From</p>

        <h3 className="text-5xl font-black text-[#64D98B]">${startingPrice}</h3>

        <p className="text-gray-500 mt-2">Per Person</p>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span className="text-gray-500">Duration</span>

          <span className="font-semibold">{destination.duration}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Best Time</span>

          <span className="font-semibold">{destination.bestTime}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Difficulty</span>

          <span className="font-semibold">{destination.difficulty}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Group Size</span>

          <span className="font-semibold">{destination.groupSize}</span>
        </div>
      </div>

      <button
        onClick={() => router.push(`/booking?tour=${destination.slug}`)}
        className="mt-10 w-full bg-[#64D98B] hover:bg-[#55cb7d] text-[#081B29] py-4 rounded-2xl font-bold transition"
      >
        Book Now
      </button>
    </div>
  );
}
