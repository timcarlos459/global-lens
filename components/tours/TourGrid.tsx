"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star } from "lucide-react";

import { destinations } from "@/data/destinations";

interface TourGridProps {
  selectedCategory: string;
}

export default function TourGrid({ selectedCategory }: TourGridProps) {
  const filteredTours =
    selectedCategory === "All"
      ? destinations
      : destinations.filter((tour) => tour.tourType === selectedCategory);

  return (
    <section>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredTours.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}

            <div className="relative h-72 overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute top-5 left-5 bg-[#64D98B] text-[#081B29] px-4 py-2 rounded-full font-bold">
                {tour.tourType}
              </div>

              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" size={18} />
                <span className="font-semibold">{tour.rating}</span>
              </div>
            </div>

            {/* Content */}

            <div className="p-7">
              <h3 className="text-2xl font-bold text-[#081B29] group-hover:text-[#64D98B] transition">
                {tour.name}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-gray-500">
                <MapPin size={18} />
                <span>{tour.location}</span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-gray-500">
                <Clock size={18} />
                <span>{tour.duration}</span>
              </div>

              <p className="mt-5 text-gray-600 leading-7 line-clamp-3">
                {tour.overview}
              </p>

              {/* Price */}

              <div className="mt-8 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">From</p>

                  <p className="text-3xl font-black text-[#081B29]">
                    $
                    {
                      tour.roomOccupancy.find((g) => g.guests === 2)?.standard
                        .standard
                    }
                  </p>

                  <p className="text-sm text-gray-500">per person</p>
                </div>

                <div className="bg-[#081B29] group-hover:bg-[#64D98B] group-hover:text-[#081B29] text-white px-6 py-3 rounded-xl font-bold transition">
                  View Tour
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
