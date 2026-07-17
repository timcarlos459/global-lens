import Link from "next/link";

import Hero from "@/components/experiences/Hero";
import ExperienceGrid from "@/components/experiences/ExperienceGrid";
import WhyChooseExperiences from "@/components/experiences/WhyChooseExperiences";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFC]">
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* ================= INTRO ================= */}

        <div className="mx-auto mb-28 max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
            Luxury African Experiences
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-[#081B29] md:text-6xl">
            Extraordinary Moments,
            <br />
            Crafted For Every Traveller
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-600">
            Africa is more than a destination—it is a collection of
            unforgettable moments. From sunrise hot-air balloon safaris above
            the Maasai Mara, to intimate gorilla encounters, private island
            escapes and exclusive luxury adventures, every experience is
            carefully designed to create memories that last a lifetime.
          </p>
        </div>

        {/* ================= EXPERIENCES ================= */}

        <ExperienceGrid />

        {/* ================= WHY CHOOSE ================= */}

        <div className="mt-36">
          <WhyChooseExperiences />
        </div>

        {/* ================= PREMIUM CTA ================= */}

        <section className="relative mt-36 overflow-hidden rounded-[48px] bg-[#081B29] px-10 py-28 text-white">
          {/* Background Glow */}

          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-[150px]" />

          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
              Start Your Journey
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Your African Adventure
              <br />
              Begins Here
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
              Every itinerary is tailor-made around your travel dreams. Whether
              you are seeking luxury safaris, romantic escapes, wildlife
              encounters or cultural discoveries, our specialists will create a
              journey designed exclusively for you.
            </p>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-10">
              <div>
                <h3 className="text-5xl font-black text-[#64D98B]">80+</h3>

                <p className="mt-2 text-gray-400">Destinations</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#64D98B]">300+</h3>

                <p className="mt-2 text-gray-400">Experiences</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#64D98B]">15K+</h3>

                <p className="mt-2 text-gray-400">Happy Travellers</p>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <Link
                href="/booking"
                className="rounded-full bg-[#64D98B] px-10 py-5 text-lg font-bold text-[#081B29] transition duration-300 hover:scale-105 hover:bg-[#53d17d]"
              >
                Book Luxury Experience
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-10 py-5 text-lg font-semibold transition duration-300 hover:border-[#64D98B] hover:bg-white/10"
              >
                Speak With Our Experts
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
