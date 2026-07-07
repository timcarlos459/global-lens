"use client";

import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: "Kenya",
    slug: "kenya",
    image: "/images/safari/safari1.jpg",
    destinations: [
      "Maasai Mara",
      "Amboseli",
      "Tsavo East",
      "Tsavo West",
      "Lake Nakuru",
      "Samburu",
      "Diani Beach",
      "Watamu",
      "Lamu",
      "Mount Kenya",
      "Hell's Gate",
      "Aberdare",
    ],
  },
  {
    name: "Tanzania",
    slug: "tanzania",
    image: "/images/beach/beach4.jpg",
    destinations: [
      "Serengeti",
      "Ngorongoro",
      "Zanzibar",
      "Mount Kilimanjaro",
      "Tarangire",
      "Lake Manyara",
      "Ruaha",
      "Mikumi",
      "Arusha",
      "Mafia Island",
      "Pemba Island",
      "Selous",
    ],
  },
  {
    name: "Uganda",
    slug: "uganda",
    image: "/images/gorilla/gorilla4.jpg",
    destinations: [
      "Bwindi",
      "Queen Elizabeth",
      "Murchison Falls",
      "Kibale Forest",
      "Lake Bunyonyi",
      "Mgahinga",
      "Jinja",
      "Rwenzori",
      "Kidepo",
      "Entebbe",
    ],
  },
  {
    name: "Rwanda",
    slug: "rwanda",
    image: "/images/culture/culture4.jpg",
    destinations: [
      "Volcanoes NP",
      "Kigali",
      "Lake Kivu",
      "Nyungwe Forest",
      "Akagera",
      "Musanze",
      "King's Palace",
    ],
  },
  {
    name: "South Africa",
    slug: "south-africa",
    image: "/images/mountain/mountain4.jpg",
    destinations: [
      "Cape Town",
      "Kruger",
      "Table Mountain",
      "Garden Route",
      "Johannesburg",
      "Durban",
      "Stellenbosch",
      "Robben Island",
      "Hermanus",
      "Blyde River Canyon",
    ],
  },
  {
    name: "Mauritius",
    slug: "mauritius",
    image: "/images/island/island3.jpg",
    destinations: [
      "Grand Baie",
      "Le Morne",
      "Flic en Flac",
      "Chamarel",
      "Black River",
      "Belle Mare",
      "Blue Bay",
      "Trou aux Biches",
      "Port Louis",
      "Île aux Cerfs",
    ],
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="uppercase tracking-[6px] text-[#64D98B] font-semibold">
            Explore Africa
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-[#081B29] mt-5">
            Popular Destinations
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Discover breathtaking destinations across Africa, from legendary
            wildlife safaris and tropical islands to vibrant cities and
            unforgettable mountain adventures.
          </p>
        </div>

        {/* Country Cards */}

        <div className="grid lg:grid-cols-2 gap-10">
          {countries.map((country) => (
            <div
              key={country.slug}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 group"
            >
              <div className="relative h-72">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <h3 className="absolute bottom-8 left-8 text-white text-4xl font-bold">
                  {country.name}
                </h3>
              </div>

              <div className="p-8">
                <p className="font-semibold text-[#64D98B] mb-5">
                  {country.destinations.length}+ Featured Destinations
                </p>

                <div className="flex flex-wrap gap-3">
                  {country.destinations.map((place) => (
                    <span
                      key={place}
                      className="bg-[#F1F5F9] rounded-full px-4 py-2 text-sm font-medium text-[#081B29]"
                    >
                      {place}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/countries/${country.slug}`}
                  className="inline-flex mt-8 bg-[#081B29] hover:bg-[#64D98B] transition px-6 py-3 rounded-full text-white font-semibold"
                >
                  Explore Country →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}