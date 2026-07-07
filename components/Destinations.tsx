"use client";

import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Safari Adventures",
    image: "/images/safari/safari1.jpg",
    count: "25+ Destinations",
    description: "Maasai Mara • Serengeti • Amboseli • Kruger",
    href: "/destinations/maasai-mara",
  },
  {
    title: "Beach Escapes",
    image: "/images/beach/beach1.jpg",
    count: "18+ Destinations",
    description: "Diani • Zanzibar • Watamu • Seychelles",
    href: "/destinations/diani-beach",
  },
  {
    title: "Mountain Adventures",
    image: "/images/mountain/mountain1.jpg",
    count: "12+ Destinations",
    description: "Kilimanjaro • Mt Kenya • Rwenzori",
    href: "/destinations/mount-kilimanjaro",
  },
  {
    title: "Gorilla Trekking",
    image: "/images/gorilla/gorilla1.jpg",
    count: "8+ Destinations",
    description: "Bwindi • Mgahinga • Volcanoes NP",
    href: "/destinations/bwindi-gorillas",
  },
  {
    title: "Island Escapes",
    image: "/images/island/island1.jpg",
    count: "10+ Destinations",
    description: "Mauritius • Zanzibar • Seychelles",
    href: "/destinations/seychelles",
  },
  {
    title: "Culture & Heritage",
    image: "/images/culture/culture1.jpg",
    count: "15+ Destinations",
    description: "Maasai • Egypt • Ethiopia • Morocco",
    href: "/destinations/maasai-village",
  },
];

export default function Destinations() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#64D98B] font-semibold">
            Discover Africa
          </p>

          <h2 className="text-5xl font-black text-[#081B29] mt-4">
            Explore by Experience
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Every journey tells a different story. Whether you&apos;re chasing
            wildlife, relaxing on pristine beaches, climbing iconic mountains,
            trekking with gorillas or exploring rich African cultures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {experiences.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <p className="text-[#64D98B] font-semibold">{item.count}</p>

                <h3 className="text-3xl font-bold mt-2 text-[#081B29]">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>

                <div className="mt-8 flex justify-between items-center">
                  <span className="font-semibold text-[#081B29]">
                    Explore
                  </span>

                  <span className="text-[#64D98B] text-2xl group-hover:translate-x-2 transition">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}