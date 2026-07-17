"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}

      <Image
        src="/images/experiences/hero1.jpg"
        alt="Luxury African Experiences"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-linear-to-t from-[#081B29]/95 via-[#081B29]/30 to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-[#64D98B]/20 px-6 py-3 font-semibold text-[#64D98B] backdrop-blur">
            Luxury African Experiences
          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Experience Africa
            <br />
            Beyond The Ordinary
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
            Discover unforgettable safaris, pristine beaches, mountain
            adventures, cultural encounters and bespoke luxury experiences
            crafted by Africa&apos;s travel specialists.
          </p>

          {/* Button */}

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/booking"
              className="flex items-center gap-3 rounded-full bg-[#64D98B] px-8 py-4 font-bold text-[#081B29] transition hover:scale-105"
            >
              Explore Experiences
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8">
            <div>
              <h2 className="text-5xl font-black text-[#64D98B]">80+</h2>
              <p className="mt-2 text-gray-300">Destinations</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#64D98B]">300+</h2>
              <p className="mt-2 text-gray-300">Experiences</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#64D98B]">15K+</h2>
              <p className="mt-2 text-gray-300">Happy Travelers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-16 w-9 justify-center rounded-full border border-white/50">
          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
