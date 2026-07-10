import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-175 overflow-hidden">
      <Image
        src="/images/experiences/hero1.jpg"
        alt="Luxury African Experiences"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#64D98B]/20 border border-[#64D98B]/40 px-5 py-2 text-sm font-semibold text-white">
              Premium African Experiences
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black text-white leading-tight">
              Every Journey
              <br />
              Deserves Extraordinary Moments
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/90">
              Discover unforgettable experiences across Africa — private
              safaris, hot-air balloon adventures, gorilla trekking, luxury
              cruises, cultural encounters, beach escapes and more.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                href="/booking"
                className="bg-[#64D98B] hover:bg-[#55c87c] text-[#081B29] font-bold px-8 py-4 rounded-2xl transition"
              >
                Book an Experience
              </Link>

              <Link
                href="/contact"
                className="border border-white text-white hover:bg-white hover:text-[#081B29] font-bold px-8 py-4 rounded-2xl transition"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
