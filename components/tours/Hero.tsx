"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-175 overflow-hidden">
      {/* Background Image */}

      <Image
        src="/images/hero.jpg"
        alt="Global Lens Tours"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-[#081B29]/90 via-[#081B29]/60 to-black/30" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <span className="inline-block bg-[#64D98B] text-[#081B29] px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
            Luxury African Adventures
          </span>

          <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight text-white">
            Discover Africa
            <br />
            Like Never Before
          </h1>

          <p className="mt-8 text-xl text-gray-200 leading-9">
            Luxury safaris, beach escapes, mountain adventures, cultural
            journeys and unforgettable wildlife experiences across Africa with
            Global Lens Tours & Travel.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/booking"
              className="bg-[#64D98B] hover:bg-[#54c97a] text-[#081B29] font-bold px-8 py-4 rounded-2xl transition"
            >
              Book Your Adventure
            </Link>

            <Link
              href="/destinations"
              className="border-2 border-white text-white hover:bg-white hover:text-[#081B29] px-8 py-4 rounded-2xl font-bold transition"
            >
              Explore Destinations
            </Link>
          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <h2 className="text-4xl font-black text-[#64D98B]">80+</h2>

              <p className="text-gray-300 mt-2">Destinations</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#64D98B]">20K+</h2>

              <p className="text-gray-300 mt-2">Happy Travellers</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#64D98B]">15+</h2>

              <p className="text-gray-300 mt-2">African Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#F8F9FA] to-transparent" />
    </section>
  );
}
