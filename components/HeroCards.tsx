"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Safari Adventures",
    image: "/images/safari/safari1.jpg",
    href: "/tours?category=Safari",
  },
  {
    title: "Beach Escapes",
    image: "/images/beach/beach1.jpg",
    href: "/tours?category=Beach",
  },
  {
    title: "Mountain Adventures",
    image: "/images/mountain/mountain1.jpg",
    href: "/tours?category=Mountain",
  },
  {
    title: "Gorilla Trekking",
    image: "/images/gorilla/gorilla1.jpg",
    href: "/tours?category=Gorilla Trekking",
  },
  {
    title: "Island Escapes",
    image: "/images/island/island1.jpg",
    href: "/tours?category=Island",
  },
  {
    title: "Culture & Heritage",
    image: "/images/culture/culture1.jpg",
    href: "/tours?category=Culture",
  },
  {
    title: "Family & Luxury",
    image: "/images/island/mauritius3.jpg",
    href: "/tours?category=Luxury",
  },
];

export default function HeroCards() {
  return (
    <div className="hidden xl:grid xl:grid-cols-3 gap-3">
      {cards.map((card, index) => (
        <Link
          key={card.title}
          href={card.href}
          className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1
            ${index === 0 ? "xl:col-span-2 h-56" : "h-44"}`}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/60" />

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/40 to-transparent p-4">
            <h3 className="text-lg font-bold text-white lg:text-xl">
              {card.title}
            </h3>

            <span className="mt-2 inline-flex items-center rounded-full bg-[#64D98B] px-4 py-1.5 text-xs font-semibold text-[#081B29] transition group-hover:translate-x-1">
              Explore Tours →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
