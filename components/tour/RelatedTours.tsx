"use client";

import Image from "next/image";
import Link from "next/link";

import { destinations } from "@/data/destinations";

interface Props {
  currentSlug: string;
}

export default function RelatedTours({ currentSlug }: Props) {
  const related = destinations
    .filter((tour) => tour.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-24">
      <h2 className="text-4xl font-black text-[#081B29] mb-10">
        Related Tours
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {related.map((tour) => (
          <Link
            key={tour.id}
            href={`/tours/${tour.slug}`}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <div className="relative h-60">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6">
              <span className="inline-block bg-[#64D98B] text-[#081B29] px-3 py-1 rounded-full text-sm font-semibold">
                {tour.category}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#081B29]">
                {tour.name}
              </h3>

              <p className="mt-3 text-gray-600 line-clamp-3">{tour.overview}</p>

              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">From</p>

                  <h4 className="text-2xl font-black text-[#081B29]">
                    $
                    {
                      tour.roomOccupancy.find((g) => g.guests === 2)?.standard
                        .standard
                    }
                  </h4>
                </div>

                <div className="bg-[#081B29] text-white px-5 py-3 rounded-xl font-semibold">
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
