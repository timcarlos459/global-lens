import {
  Globe2,
  ShieldCheck,
  MapPinned,
  Crown,
  Headphones,
  Compass,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Authentic African Experiences",
    description:
      "Every itinerary is carefully designed to immerse you in Africa's wildlife, landscapes, culture and unforgettable moments.",
  },
  {
    icon: Crown,
    title: "Luxury Tailor-Made Journeys",
    description:
      "No two travelers are alike. We customize every safari, honeymoon, beach escape and adventure around your dreams.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Travel",
    description:
      "Licensed guides, trusted partners and carefully selected accommodations ensure complete peace of mind.",
  },
  {
    icon: MapPinned,
    title: "Local Destination Experts",
    description:
      "Our experienced travel specialists know Africa inside out and recommend only the very best destinations.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge Support",
    description:
      "From your first enquiry until you safely return home, our team remains available whenever you need assistance.",
  },
  {
    icon: Compass,
    title: "Sustainable Tourism",
    description:
      "We believe luxury travel should also protect wildlife, empower local communities and preserve Africa's natural beauty.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-32 bg-[#F8FBFC]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
            Why Choose Us
          </span>

          <h2 className="mt-8 text-5xl font-black text-[#081B29] lg:text-6xl">
            Luxury Travel,
            <br />
            Crafted To Perfection
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            Every journey we create combines luxury, comfort, authenticity and
            exceptional service to deliver unforgettable African experiences.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[36px] border border-gray-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#64D98B]/30 hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#64D98B]/10 transition-all duration-300 group-hover:bg-[#64D98B]">
                  <Icon
                    size={38}
                    className="text-[#081B29] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-black text-[#081B29]">
                  {feature.title}
                </h3>

                <p className="mt-6 leading-9 text-gray-600">
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
