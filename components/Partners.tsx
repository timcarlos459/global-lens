"use client";

import Image from "next/image";

const airlines = [
  "kenya-airways",
  "ethiopian",
  "rwandair",
  "uganda-airlines",
  "air-tanzania",
  "south-african-airways",
  "qatar",
  "emirates",
  "turkish-airlines",
  "klm",
  "lufthansa",
  "british-airways",
  "air-france",
];

const payments = [
  "visa",
  "mastercard",
  "paypal",
  "mpesa",
  "american-express",
  "discover",
  "stripe",
];

const hotels = [
  "serena-hotels",
  "marriott",
  "hilton",
  "radisson-blu",
  "fairmont",
];

const travel = ["booking-com", "expedia", "tripadvisor"];

function Carousel({ logos }: { logos: string[] }) {
  const items = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-[#081B29] to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-[#081B29] to-transparent" />

      {/* Moving logos */}
      <div className="flex w-max animate-marquee gap-8">
        {items.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-28 w-48 shrink-0 items-center justify-center rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <Image
              src={`/images/partners/${logo}.png`}
              alt={`${logo.replaceAll("-", " ")} logo`}
              width={130}
              height={70}
              className="object-contain grayscale transition duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnerGroup({ title, logos }: { title: string; logos: string[] }) {
  return (
    <div>
      <h3 className="mb-8 text-center text-2xl font-bold text-white">
        {title}
      </h3>

      <Carousel logos={logos} />
    </div>
  );
}

export default function Partners() {
  return (
    <section className="overflow-hidden bg-[#081B29] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-[6px] text-[#64D98B]">
            Trusted Around The World
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Travel With Confidence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Global Lens Tours & Travel works with trusted travel providers and
            supports secure payment methods to ensure a seamless travel
            experience from booking to your return home.
          </p>
        </div>

        {/* PARTNERS */}
        <div className="space-y-16">
          <PartnerGroup title="Airlines" logos={airlines} />

          <PartnerGroup title="Payment Methods" logos={payments} />

          <PartnerGroup title="Hotel Brands" logos={hotels} />

          <PartnerGroup title="Travel Platforms" logos={travel} />
        </div>
      </div>
    </section>
  );
}
