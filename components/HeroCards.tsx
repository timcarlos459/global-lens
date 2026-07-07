"use client";

import Image from "next/image";

const cards = [
  {
    title: "Safari Adventures",
    image: "/images/safari/safari1.jpg",
  },
  {
    title: "Beach Escapes",
    image: "/images/beach/beach1.jpg",
  },
  {
    title: "Mountain Adventures",
    image: "/images/mountain/mountain1.jpg",
  },
  {
    title: "Gorilla Trekking",
    image: "/images/gorilla/gorilla1.jpg",
  },
  {
    title: "Island Escapes",
    image: "/images/island/island1.jpg",
  },
  {
    title: "Culture & Heritage",
    image: "/images/culture/culture1.jpg",
  },
];

export default function HeroCards() {
  return (
    <div className="hidden xl:grid grid-cols-2 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className="group relative h-44 w-64 overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >

          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-5 left-5">

            <h3 className="text-white font-bold text-xl">
              {card.title}
            </h3>

            <p className="text-green-300 text-sm mt-1">
              Explore →
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}