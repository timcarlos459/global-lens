import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-175 overflow-hidden">
      <Image
        src="/images/contact/hero.jpg"
        alt="Contact Global Lens Tours"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#64D98B]/40 bg-[#64D98B]/20 px-5 py-2 text-sm font-semibold text-white">
              Contact Global Lens Tours
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black text-white leading-tight">
              Let us Create Your
              <br />
              African Adventure
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/90">
              Our travel specialists are available to help you plan
              unforgettable luxury safaris, beach holidays, mountain expeditions
              and tailor-made African journeys.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                href="tel:+254712345678"
                className="bg-[#64D98B] hover:bg-[#54c97a] text-[#081B29] px-8 py-4 rounded-2xl font-bold transition"
              >
                Call Us
              </Link>

              <Link
                href="https://wa.me/254712345678"
                className="border border-white text-white hover:bg-white hover:text-[#081B29] px-8 py-4 rounded-2xl font-bold transition"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
