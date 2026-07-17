"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-162.5 overflow-hidden">
      {/* Background */}

      <Image
        src="/images/about/hero.jpg"
        alt="About Global Lens Tours"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-linear-to-t from-[#081B29]/95 via-[#081B29]/40 to-transparent" />

      {/* Decorative Glow */}

      <div className="absolute left-0 top-0 h-full w-full">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#64D98B]/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#64D98B]/10 blur-[140px]" />
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#64D98B]/40 bg-[#64D98B]/15 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B] backdrop-blur">
            About Global Lens Tours
          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Africa,
            <br />
            Through A Different Lens
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-200">
            We do not simply organize holidays—we craft unforgettable luxury
            journeys that connect travelers with Africa breathtaking wildlife,
            spectacular landscapes, rich cultures and extraordinary people.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="flex items-center gap-3 rounded-full bg-[#64D98B] px-8 py-4 font-bold text-[#081B29] transition-all duration-300 hover:scale-105 hover:bg-[#53d17d]"
            >
              Plan Your Journey
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/destinations"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#081B29]"
            >
              Explore Destinations
            </Link>
          </div>

          {/* Statistics */}

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-black text-[#64D98B]">80+</h3>

              <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-300">
                Destinations
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#64D98B]">15K+</h3>

              <p className="mt-1 text-xs uppercase tracking-[2px] text-gray-300">
                Happy Travelers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#64D98B]">12</h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">
                African Countries
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#64D98B]">99%</h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-16 w-9 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
