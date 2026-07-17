"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Star } from "lucide-react";
import type { Destination } from "@/data/destinations/types";

type Props = {
  destination: Destination;
};

export default function DestinationCard({ destination }: Props) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      {/* IMAGE */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute top-5 left-5 bg-[#64D98B] text-white px-4 py-2 rounded-full text-sm font-bold">
          {destination.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        {/* RATING */}
        <div className="flex gap-1 text-yellow-400">
          {[...Array(destination.rating)].map((_, i) => (
            <Star key={i} size={17} fill="currentColor" />
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-[#081B29] mt-5">
          {destination.name}
        </h3>

        {/* META */}
        <div className="flex items-center gap-5 mt-4 text-gray-500 text-sm">
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            {destination.country}
          </span>

          <span className="flex items-center gap-2">
            <Clock3 size={18} />
            {destination.duration}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mt-5 leading-7">
          {destination.description}
        </p>

        {/* PRICE */}
        <div className="flex justify-between items-end mt-8">
          <div>
            {(() => {
              const startingPrice = destination.roomOccupancy.find(
                (room) => room.guests === 1,
              );

              return (
                <>
                  <p className="text-sm text-gray-500">Starting From</p>

                  <h4 className="text-2xl font-bold text-[#64D98B] mt-1">
                    ${startingPrice?.standard.low.toLocaleString()} PP
                  </h4>

                  <p className="text-xs text-gray-500 mt-2">Standard Room</p>

                  <p className="text-xs text-gray-400">Low Season</p>
                </>
              );
            })()}
          </div>

          <Link
            href={`/destinations/${destination.slug}`}
            className="bg-[#64D98B] hover:bg-green-500 transition text-white px-6 py-3 rounded-full font-semibold"
          >
            Explore →
          </Link>
        </div>
      </div>
    </div>
  );
}
