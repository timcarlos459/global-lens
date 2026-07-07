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

const travel = [
  "booking-com",
  "expedia",
  "tripadvisor",
];

function Carousel({
  logos,
}: {
  logos: string[];
}) {
  const items = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative w-full">

      <div className="flex animate-marquee gap-12 w-max">

        {items.map((logo, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg w-48 h-28 flex items-center justify-center hover:shadow-2xl transition duration-300"
          >

            <Image
              src={`/images/partners/${logo}.png`}
              alt={logo}
              width={130}
              height={70}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default function Partners() {
  return (
    <section className="py-28 bg-[#081B29] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#64D98B] font-semibold">

            Trusted Around The World

          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-5">

            Travel With Confidence

          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-8">

            Global Lens Tours & Travel works with trusted travel providers
            and supports secure payment methods to ensure a seamless travel
            experience from booking to your return home.

          </p>

        </div>

        <div className="space-y-16">

          <div>

            <h3 className="text-white text-2xl font-bold mb-8 text-center">

              Airlines

            </h3>

            <Carousel logos={airlines} />

          </div>

          <div>

            <h3 className="text-white text-2xl font-bold mb-8 text-center">

              Payment Methods

            </h3>

            <Carousel logos={payments} />

          </div>

          <div>

            <h3 className="text-white text-2xl font-bold mb-8 text-center">

              Hotel Brands

            </h3>

            <Carousel logos={hotels} />

          </div>

          <div>

            <h3 className="text-white text-2xl font-bold mb-8 text-center">

              Travel Platforms

            </h3>

            <Carousel logos={travel} />

          </div>

        </div>

      </div>

    </section>
  );
}