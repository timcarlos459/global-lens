"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

const categories = [
  "All",
  "Safari",
  "Beach",
  "Mountain",
  "Gorilla",
  "Culture",
  "Island",
];

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesCategory =
        category === "All" || destination.category === category;

      const matchesSearch =
        destination.name.toLowerCase().includes(search.toLowerCase()) ||
        destination.country.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="bg-[#F8FBFC]">

      {/* Hero */}

      <section className="relative h-[60vh]">

        <Image
          src="/images/hero/hero3.jpg"
          alt="Destinations"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[6px] text-[#64D98B] font-semibold">
              Discover Africa
            </p>

            <h1 className="text-6xl font-black mt-5">
              Explore Destinations
            </h1>

            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Find your next unforgettable adventure across Africa.
            </p>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <input
          type="text"
          placeholder="Search destinations or countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-gray-300 px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#64D98B]"
        />

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-6 py-3 rounded-full transition font-semibold ${
                category === item
                  ? "bg-[#64D98B] text-white"
                  : "bg-white hover:bg-[#64D98B] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-gray-600">
              No destinations found.
            </h2>

            <p className="mt-4 text-gray-500">
              Try another search or category.
            </p>

          </div>
        )}

      </section>

    </main>
  );
}