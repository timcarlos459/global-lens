"use client";

import {
  ShieldCheck,
  Plane,
  Headphones,
  Compass,
  Globe2,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    description:
      "Book confidently with secure payments, verified partners, and transparent pricing.",
  },
  {
    icon: Plane,
    title: "Complete Travel Planning",
    description:
      "From flights and accommodation to transfers and excursions, we handle everything.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our travel experts are available before, during, and after your journey.",
  },
  {
    icon: Compass,
    title: "Expert Local Guides",
    description:
      "Discover Africa with experienced guides who know every hidden gem.",
  },
  {
    icon: Globe2,
    title: "80+ Destinations",
    description:
      "Explore Africa through safaris, beaches, islands, mountains, culture, and wildlife.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Experiences",
    description:
      "Luxury tours designed to create unforgettable memories for every traveler.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[#64D98B] font-semibold">

            Why Choose Us

          </p>

          <h2 className="text-5xl font-black text-[#081B29] mt-4">

            Experience Africa With Confidence

          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">

            At Global Lens Tours & Travel, we create exceptional journeys
            across Africa with personalized service, trusted partnerships,
            and unforgettable experiences.

          </p>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-[#F8FAFC] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#64D98B]/10 flex items-center justify-center mb-6 group-hover:bg-[#64D98B] transition">

                  <Icon
                    className="text-[#64D98B] group-hover:text-white transition"
                    size={32}
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#081B29]">

                  {feature.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {feature.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}