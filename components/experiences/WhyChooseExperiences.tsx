"use client";

import { Crown, MapPinned, CalendarCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Luxury Planning",
    text: "Every itinerary is thoughtfully designed with premium accommodations, exclusive experiences and exceptional attention to detail.",
  },
  {
    icon: MapPinned,
    title: "Local Experts",
    text: "Travel with experienced local guides who know every hidden gem, wildlife trail and authentic cultural experience.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Booking",
    text: "Enjoy tailor-made journeys that can be personalized around your travel style, dates and budget.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Support",
    text: "From the moment you book until you return home, our travel specialists are always available to assist you.",
  },
];

export default function WhyChooseExperiences() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#64D98B]/15 px-5 py-2 text-sm font-semibold text-[#64D98B]">
            Why Choose Global Lens Tours
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-[#081B29] md:text-6xl">
            Exceptional Experiences,
            <br />
            Designed Around You
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every journey is crafted with passion, local expertise and luxury
            service to ensure unforgettable memories across Africa most
            spectacular destinations.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Background Accent */}

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#64D98B]/10 blur-3xl transition duration-500 group-hover:scale-150" />

                {/* Icon */}

                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[#64D98B]/15 transition duration-500 group-hover:bg-[#64D98B]">
                  <Icon
                    size={36}
                    className="text-[#64D98B] transition duration-500 group-hover:text-white"
                  />
                </div>

                {/* Content */}

                <h3 className="relative mt-8 text-2xl font-black text-[#081B29]">
                  {feature.title}
                </h3>

                <p className="relative mt-5 leading-8 text-gray-600">
                  {feature.text}
                </p>

                {/* Bottom Accent */}

                <div className="mt-8 h-1 w-16 rounded-full bg-[#64D98B] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
