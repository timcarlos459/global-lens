"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Star } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function FeaturedTours() {
  return (
    <section className="bg-[#F8FBFC] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#64D98B] font-semibold">
            Featured Tours
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#081B29] mt-4">
            Luxury Experiences Across Africa
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            Carefully designed journeys combining adventure, comfort,
            breathtaking landscapes and unforgettable wildlife experiences.
          </p>
        </div>

        {/* Tour Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {destinations.slice(0, 3).map((tour) => {
            const startingPrice = tour.roomOccupancy.find(
              (room) => room.guests === 1,
            );

            return (
              <div
                key={tour.slug}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 left-5 bg-[#64D98B] text-white px-4 py-2 rounded-full text-sm font-bold">
                    {tour.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(tour.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-[#081B29] mt-5">
                    {tour.name}
                  </h3>

                  <div className="flex flex-wrap gap-5 mt-4 text-gray-500">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {tour.country}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3 size={14} />
                      {tour.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-7 mt-6">
                    {tour.description}
                  </p>

                  <div className="mt-8 border-t pt-5">
                    <p className="text-sm text-gray-500">Starting From</p>

                    <h4 className="text-2xl font-bold text-[#64D98B] mt-1">
                      ${startingPrice?.standard.low.toLocaleString()} PP
                    </h4>

                    <p className="text-xs text-gray-500 mt-2">
                      Standard Season: $
                      {startingPrice?.standard.standard.toLocaleString()} PP
                    </p>

                    <p className="text-xs text-gray-500">
                      Peak Season: $
                      {startingPrice?.standard.peak.toLocaleString()} PP
                    </p>
                  </div>

                  <Link
                    href={`/destinations/${tour.slug}`}
                    className="mt-8 inline-flex w-full justify-center bg-[#64D98B] hover:bg-[#4BC87A] transition py-3 rounded-full text-white font-semibold"
                  >
                    View Tour →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/tours"
            className="rounded-full bg-[#081B29] px-10 py-4 font-bold text-white transition-all duration-300 hover:bg-[#64D98B] hover:text-[#081B29]"
          >
            View All Tours →
          </Link>
        </div>
      </div>
    </section>
  );
}
