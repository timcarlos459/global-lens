import Link from "next/link";
import { Destination } from "@/data/destinations/types";

interface HeroProps {
  destination: Destination;
}

export default function Hero({ destination }: HeroProps) {
  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${destination.image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 pb-20 text-white">
          <span className="inline-block bg-[#64D98B] text-[#081B29] font-semibold px-4 py-2 rounded-full mb-6">
            {destination.category}
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            {destination.name}
          </h1>

          <div className="flex flex-wrap gap-6 text-lg opacity-90 mb-8">
            <span>📍 {destination.location}</span>

            <span>⭐ {destination.rating}/5</span>

            <span>🕒 {destination.duration}</span>

            <span>🌍 {destination.country}</span>
          </div>

          <p className="max-w-3xl text-xl leading-8 text-gray-200 mb-10">
            {destination.overview}
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href={`/booking/${destination.slug}`}
              className="bg-[#64D98B] hover:bg-[#53c67b] text-[#081B29] px-8 py-4 rounded-2xl font-bold transition"
            >
              Book This Tour
            </Link>

            <Link
              href="/contact"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-[#081B29] transition"
            >
              Ask About This Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
