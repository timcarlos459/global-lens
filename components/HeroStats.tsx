"use client";

export default function HeroStats() {
  const stats = [
    {
      number: "80+",
      label: "Destinations",
    },
    {
      number: "250+",
      label: "Tour Packages",
    },
    {
      number: "15K+",
      label: "Happy Travelers",
    },
    {
      number: "24/7",
      label: "Support",
    },
    {
      number: "98%",
      label: "Satisfaction",
    },
  ];

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-8">

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">

        <div className="grid grid-cols-2 md:grid-cols-5">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center py-8 border-r last:border-r-0 border-white/10"
            >
              <h2 className="text-4xl font-bold text-[#64D98B]">
                {item.number}
              </h2>

              <p className="text-white mt-2 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}