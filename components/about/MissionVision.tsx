import {
  Compass,
  Eye,
  Gem,
  Leaf,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#081B29] py-32">
      {/* Decorative Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-112.5 w-112.5 rounded-full bg-[#64D98B]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
            Our Foundation
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Driven By Purpose,
            <br />
            Inspired By Africa
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Everything we do is guided by our commitment to creating
            unforgettable African journeys while protecting the destinations,
            cultures and communities that make them extraordinary.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Mission */}

          <div className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#64D98B]/40 hover:bg-white/10">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#64D98B]/20">
              <Compass className="text-[#64D98B]" size={40} />
            </div>

            <h3 className="mt-8 text-3xl font-black text-white">Our Mission</h3>

            <p className="mt-6 leading-9 text-gray-300">
              To deliver personalized luxury African travel experiences that
              inspire, educate and create lifelong memories through exceptional
              service and authentic adventures.
            </p>
          </div>

          {/* Vision */}

          <div className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#64D98B]/40 hover:bg-white/10">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#64D98B]/20">
              <Eye className="text-[#64D98B]" size={40} />
            </div>

            <h3 className="mt-8 text-3xl font-black text-white">Our Vision</h3>

            <p className="mt-6 leading-9 text-gray-300">
              To become Africa leading luxury travel company, recognized for
              innovation, sustainability and world-class travel experiences
              across the continent.
            </p>
          </div>

          {/* Values */}

          <div className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#64D98B]/40 hover:bg-white/10">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#64D98B]/20">
              <Gem className="text-[#64D98B]" size={40} />
            </div>

            <h3 className="mt-8 text-3xl font-black text-white">Our Values</h3>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-[#64D98B]" size={20} />

                <span className="text-gray-300">Integrity & Trust</span>
              </div>

              <div className="flex items-center gap-4">
                <HeartHandshake className="text-[#64D98B]" size={20} />

                <span className="text-gray-300">Exceptional Hospitality</span>
              </div>

              <div className="flex items-center gap-4">
                <Leaf className="text-[#64D98B]" size={20} />

                <span className="text-gray-300">Sustainable Tourism</span>
              </div>

              <div className="flex items-center gap-4">
                <Gem className="text-[#64D98B]" size={20} />

                <span className="text-gray-300">Luxury Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
