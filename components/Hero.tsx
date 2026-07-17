"use client";

import Link from "next/link";
import HeroCards from "./HeroCards";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero1.jpg')",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-[#081B29]/90 via-[#081B29]/60 to-[#081B29]/85" />

      {/* Decorative Glow */}

      <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#64D98B]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-3xl" />

      {/* Content */}

      <div className="relative z-20 mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 pt-36 pb-24 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-white backdrop-blur-xl">
            Luxury African Experiences
          </span>

          <h1 className="mt-8 font-black leading-tight">
            <span className="block text-6xl text-white lg:text-8xl">
              Explore
            </span>

            <span className="block text-6xl text-[#64D98B] lg:text-8xl">
              Africa
            </span>

            <span className="mt-2 block text-5xl text-white lg:text-7xl">
              Through A Different Lens
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-200">
            Discover luxury safaris, tropical beaches, mountain adventures,
            gorilla trekking, cultural journeys and unforgettable African
            experiences curated by Global Lens Tours.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/tours"
              className="rounded-full bg-[#64D98B] px-9 py-4 font-bold text-[#081B29] transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Explore Tours
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-9 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#081B29]"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <HeroCards />
      </div>

      {/* Bottom Statistics */}

      <HeroStats />
    </section>
  );
}
