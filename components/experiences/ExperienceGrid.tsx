"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Safari Adventures",
    image: "/images/experiences/safari.jpg",
    description:
      "Witness the Big Five, breathtaking landscapes and Africa's most iconic wildlife experiences.",
    tours: "32 Tours",
    href: "/destinations/safari",
  },
  {
    title: "Beach Escapes",
    image: "/images/experiences/beach.jpg",
    description:
      "Relax on pristine white beaches, turquoise waters and luxurious island resorts.",
    tours: "18 Tours",
    href: "/destinations/beach",
  },
  {
    title: "Mountain Expeditions",
    image: "/images/experiences/mountain.jpg",
    description:
      "Conquer Africa's highest peaks and experience unforgettable mountain adventures.",
    tours: "14 Tours",
    href: "/destinations/mountain",
  },
  {
    title: "Gorilla Trekking",
    image: "/images/experiences/gorilla.jpg",
    description:
      "Meet endangered mountain gorillas deep within Africa's ancient rainforests.",
    tours: "10 Tours",
    href: "/destinations/gorilla-trekking",
  },
  {
    title: "Culture & Heritage",
    image: "/images/experiences/culture.jpg",
    description:
      "Discover authentic traditions, local communities and vibrant African cultures.",
    tours: "20 Tours",
    href: "/destinations/culture",
  },
  {
    title: "Luxury Collection",
    image: "/images/experiences/luxury.jpg",
    description:
      "Private safaris, premium lodges and tailor-made luxury experiences across Africa.",
    tours: "15 Tours",
    href: "/destinations/luxury",
  },
];

export default function ExperienceGrid() {
  return (
    <section className="py-10">
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience) => (
          <Link
            key={experience.title}
            href={experience.href}
            className="group overflow-hidden rounded-4xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* IMAGE */}

            <div className="relative h-80 overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tours */}

              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#081B29] backdrop-blur">
                {experience.tours}
              </div>

              {/* Title */}

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-black text-white">
                  {experience.title}
                </h3>
              </div>
            </div>

            {/* CONTENT */}

            <div className="space-y-8 p-8">
              <p className="leading-8 text-gray-600">
                {experience.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-[#64D98B]">
                  Explore Experience
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#64D98B] text-[#081B29] transition group-hover:rotate-45">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
