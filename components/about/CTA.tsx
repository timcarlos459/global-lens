import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-112.5 w-112.5 rounded-full bg-[#64D98B]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[48px] bg-[#081B29] shadow-2xl">
          <div className="px-10 py-24 text-center lg:px-24">
            <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
              Begin Your Journey
            </span>

            <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-tight text-white lg:text-7xl">
              Africa Is Waiting
              <br />
              To Be Discovered
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-300">
              Whether you&apos;re dreaming of witnessing the Great Migration,
              trekking mountain gorillas, relaxing on pristine beaches, climbing
              Africa&apos;s highest peaks or enjoying an exclusive luxury
              safari, Global Lens Tours is ready to make your journey
              extraordinary.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">
              <Link
                href="/booking"
                className="flex items-center gap-3 rounded-full bg-[#64D98B] px-10 py-5 text-lg font-bold text-[#081B29] transition-all duration-300 hover:scale-105 hover:bg-[#53d17d]"
              >
                Book Your Adventure
                <ArrowRight size={22} />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#081B29]"
              >
                Speak To A Travel Expert
              </Link>
            </div>

            {/* Bottom Statistics */}

            <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-4">
              <div>
                <h3 className="text-5xl font-black text-[#64D98B]">80+</h3>
                <p className="mt-3 text-gray-400">Destinations</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#64D98B]">300+</h3>
                <p className="mt-3 text-gray-400">Luxury Experiences</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#64D98B]">15K+</h3>
                <p className="mt-3 text-gray-400">Happy Travelers</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#64D98B]">12</h3>
                <p className="mt-3 text-gray-400">African Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
