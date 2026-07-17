"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { destinations } from "@/data/destinations";

type Props = {
  country: {
    name: string;
    slug: string;
    image: string;
    description: string;
  };
};

export default function CountryCard({ country }: Props) {
  const totalTours = destinations.filter(
    (tour) => tour.country === country.name,
  ).length;

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={country.image}
          alt={country.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-4xl font-black">{country.name}</h2>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <MapPin size={16} />

            <span>{totalTours} Tours Available</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <p className="leading-8 text-gray-600">{country.description}</p>

        <Link
          href={`/countries/${country.slug}`}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#081B29] px-6 py-3 font-bold text-white transition hover:bg-[#64D98B] hover:text-[#081B29]"
        >
          Explore Country
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
