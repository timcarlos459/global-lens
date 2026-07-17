"use client";

import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: "Kenya",
    slug: "kenya",
    image: "/images/safari/safari1.jpg",
    description:
      "Experience world-famous safaris, pristine beaches, mountains and unforgettable wildlife adventures.",
    count: 12,
  },
  {
    name: "Tanzania",
    slug: "tanzania",
    image: "/images/beach/beach4.jpg",
    description:
      "Home to Serengeti, Zanzibar, Mount Kilimanjaro and some of Africa's greatest natural wonders.",
    count: 12,
  },
  {
    name: "Uganda",
    slug: "uganda",
    image: "/images/gorilla/gorilla4.jpg",
    description:
      "Discover mountain gorillas, beautiful lakes, waterfalls and lush tropical forests.",
    count: 10,
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-20 text-center">
          <span className="uppercase tracking-[6px] font-semibold text-[#64D98B]">
            Explore Africa
          </span>

          <h2 className="mt-5 text-5xl font-black text-[#081B29] md:text-6xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Discover breathtaking destinations across Africa. Click any country
            to explore luxury tours, attractions and unforgettable travel
            experiences.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {countries.map((country) => (
            <div
              key={country.slug}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-black text-white">
                    {country.name}
                  </h3>

                  <p className="mt-2 font-semibold text-[#64D98B]">
                    {country.count}+ Destinations
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="leading-8 text-gray-600">{country.description}</p>

                <Link
                  href={`/countries/${country.slug}`}
                  className="mt-8 inline-flex rounded-full bg-[#081B29] px-8 py-4 font-bold text-white transition duration-300 hover:bg-[#64D98B] hover:text-[#081B29]"
                >
                  Explore Country →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}

        <div className="mt-20 flex justify-center">
          <Link
            href="/countries"
            className="rounded-full bg-[#64D98B] px-10 py-5 font-bold text-[#081B29] transition duration-300 hover:bg-[#081B29] hover:text-white"
          >
            View All Countries →
          </Link>
        </div>
      </div>
    </section>
  );
}
