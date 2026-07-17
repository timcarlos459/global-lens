import { Globe2, Map, Users, Award, Star, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "80+",
    title: "Destinations",
    description:
      "Luxury destinations across Africa carefully curated for unforgettable experiences.",
  },
  {
    icon: Users,
    value: "15K+",
    title: "Happy Travelers",
    description:
      "Thousands of satisfied guests who trusted us with their African adventures.",
  },
  {
    icon: Map,
    value: "12",
    title: "Countries",
    description:
      "Explore East, Central and Southern Africa through our handcrafted journeys.",
  },
  {
    icon: Award,
    value: "300+",
    title: "Luxury Experiences",
    description:
      "Safaris, beach escapes, gorilla trekking, mountains and bespoke adventures.",
  },
  {
    icon: Star,
    value: "4.9",
    title: "Guest Rating",
    description:
      "Consistently rated highly for exceptional service and unforgettable journeys.",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    title: "Travel Support",
    description: "Dedicated assistance before, during and after every journey.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFC] py-32">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-112.5 w-112.5 rounded-full bg-[#64D98B]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
            Global Lens In Numbers
          </span>

          <h2 className="mt-8 text-5xl font-black text-[#081B29] lg:text-6xl">
            Trusted Across Africa
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            Our passion for excellence has enabled thousands of travelers to
            experience Africa in comfort, luxury and authenticity.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[36px] border border-gray-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#64D98B]/30 hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#64D98B]/10 transition group-hover:bg-[#64D98B]">
                  <Icon
                    size={36}
                    className="text-[#081B29] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-6xl font-black text-[#64D98B]">
                  {item.value}
                </h3>

                <h4 className="mt-3 text-2xl font-bold text-[#081B29]">
                  {item.title}
                </h4>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
