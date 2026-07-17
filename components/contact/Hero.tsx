import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background */}

      <Image
        src="/images/contact/hero.jpg"
        alt="Contact Global Lens Tours"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      {/* Luxury Gradient */}

      <div className="absolute inset-0 bg-linear-to-t from-[#081B29] via-[#081B29]/40 to-transparent" />

      {/* Decorative Glow */}

      <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#64D98B]/10 blur-[180px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full border border-[#64D98B]/40 bg-[#64D98B]/15 px-6 py-3 text-sm font-semibold tracking-widest text-[#64D98B] backdrop-blur">
            GLOBAL LENS TOURS
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Let Us Plan Your
            <span className="block text-[#64D98B]">Dream African Journey</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Speak directly with our travel specialists and let us craft a
            personalized luxury safari, honeymoon, family holiday or private
            expedition designed exclusively for you.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="tel:+254712345678"
              className="inline-flex items-center gap-3 rounded-full bg-[#64D98B] px-8 py-4 font-bold text-[#081B29] transition hover:scale-105"
            >
              <Phone size={20} />
              Call Us
            </Link>

            <Link
              href="https://wa.me/254712345678"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#081B29]"
            >
              <MessageCircle size={20} />
              WhatsApp
            </Link>
          </div>

          {/* Luxury Stats */}

          <div className="mt-20 grid max-w-3xl grid-cols-3 gap-10 border-t border-white/20 pt-10">
            <div>
              <h2 className="text-5xl font-black text-[#64D98B]">80+</h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                Destinations
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#64D98B]">15K+</h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                Happy Travelers
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#64D98B]">24/7</h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                Travel Support
              </p>
            </div>
          </div>

          {/* Location */}

          <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-white backdrop-blur">
            <MapPin className="text-[#64D98B]" size={20} />

            <span className="font-medium">Nairobi • Kenya</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-16 w-9 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-[#64D98B]" />
        </div>
      </div>
    </section>
  );
}
