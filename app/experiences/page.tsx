import Link from "next/link";

import Hero from "@/components/experiences/Hero";
import ExperienceGrid from "@/components/experiences/ExperienceGrid";
import WhyChooseExperiences from "@/components/experiences/WhyChooseExperiences";
export default function ExperiencesPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO */}

        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center rounded-full bg-[#64D98B]/20 px-5 py-2 text-sm font-semibold text-[#081B29]">
            Luxury African Experiences
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black text-[#081B29] leading-tight">
            Create Memories Beyond the Journey
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Every destination has a story waiting to be experienced. From
            breathtaking sunrise balloon safaris over the Maasai Mara, to
            unforgettable gorilla encounters in Uganda and luxury dhow cruises
            along the East African coast, discover handpicked experiences
            designed to make your African adventure truly extraordinary.
          </p>
        </div>

        {/* EXPERIENCES */}

        <ExperienceGrid />

        {/* WHY CHOOSE US */}

        <WhyChooseExperiences />

        {/* CALL TO ACTION */}

        <section className="mt-28 rounded-[40px] bg-[#081B29] px-10 py-20 text-center text-white">
          <span className="inline-flex rounded-full bg-[#64D98B]/20 px-5 py-2 text-sm font-semibold text-[#64D98B]">
            Start Your Adventure
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black">
            Ready For An Unforgettable Experience?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
            Whether you are dreaming of an exclusive safari, a romantic beach
            escape, a cultural immersion or a once-in-a-lifetime wildlife
            encounter, our travel specialists are ready to design the perfect
            experience just for you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/booking"
              className="rounded-2xl bg-[#64D98B] px-8 py-4 font-bold text-[#081B29] transition hover:bg-[#54c97a]"
            >
              Book Now
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-[#081B29]"
            >
              Contact Our Experts
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
