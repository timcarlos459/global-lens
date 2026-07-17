import { Quote } from "lucide-react";

const values = [
  {
    title: "Our Promise",
    quote:
      "Every journey is carefully crafted with passion, precision and attention to detail, ensuring unforgettable African experiences from beginning to end.",
  },
  {
    title: "Our Philosophy",
    quote:
      "Luxury travel is not simply about where you stay. It is about meaningful experiences, authentic encounters and memories that last forever.",
  },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-[#081B29] py-32">
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-105 w-105 rounded-full bg-[#64D98B]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
            Leadership
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            A Message From
            <br />
            Our CEO
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            At Global Lens Tours, our mission goes beyond planning holidays. We
            create meaningful African journeys that inspire, educate and leave
            lasting memories.
          </p>
        </div>

        {/* CEO Message */}

        <div className="mt-20 rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl shadow-2xl">
          <div className="flex items-start gap-8">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#64D98B]/20">
              <Quote size={40} className="text-[#64D98B]" />
            </div>

            <div>
              <blockquote className="text-2xl leading-10 italic text-white lg:text-3xl">
                &quot;Africa is more than a destination—it is a collection of
                extraordinary stories, breathtaking landscapes and remarkable
                people. Our greatest privilege is helping travelers experience
                this incredible continent in comfort, authenticity and luxury.
                Every itinerary we create reflects our passion for excellence,
                our respect for local communities and our commitment to making
                every journey unforgettable.&quot;
              </blockquote>

              <div className="mt-10 border-t border-white/10 pt-8">
                <h3 className="text-3xl font-black text-white">
                  Pius Omondi Akumu
                </h3>

                <p className="mt-2 text-lg font-semibold text-[#64D98B]">
                  Founder & Chief Executive Officer
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-gray-300">
                  &quot;Our vision is to position Global Lens Tours as Africa
                  most trusted luxury travel company by delivering exceptional
                  service, authentic experiences and personalized journeys for
                  every traveler.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#64D98B]/30 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/20">
                <Quote size={28} className="text-[#64D98B]" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-6 text-lg leading-9 italic text-gray-300">
                &quot;{item.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
