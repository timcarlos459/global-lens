"use client";

import HeroCards from "./HeroCards";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero1.jpg')",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/70"></div>

      {/* Content */}

      <div className="relative z-20 max-w-7xl mx-auto px-8 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white tracking-[4px] uppercase text-sm">

              Luxury African Experiences

            </span>

            <h1 className="mt-8 font-black leading-tight">

              <span className="block text-6xl lg:text-8xl text-white">
                Explore
              </span>

              <span className="block text-6xl lg:text-8xl text-[#64D98B]">
                Africa
              </span>

              <span className="block text-5xl lg:text-7xl text-white mt-2">
                Through A Different Lens
              </span>

            </h1>

            <p className="mt-8 text-xl text-gray-200 max-w-xl leading-9">

              Discover Africa through unforgettable safaris,
              pristine beaches, mountain expeditions,
              gorilla trekking, island escapes,
              and rich cultural experiences.

            </p>

            <div className="flex gap-6 mt-10">

              <button className="bg-[#64D98B] hover:bg-green-500 transition px-8 py-4 rounded-full text-white font-semibold">

                Explore Tours

              </button>

              <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold">

                Book Now

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <HeroCards />

        </div>

      </div>

      <HeroStats />

    </section>
  );
}