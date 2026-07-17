"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom",
    image: "/images/testimonials/user1.jpg",
    review:
      "Global Lens gave us the most incredible safari experience in Kenya. Every detail was perfectly planned, from accommodation to game drives.",
  },
  {
    name: "David Miller",
    country: "Canada",
    image: "/images/testimonials/user2.jpg",
    review:
      "Our Zanzibar honeymoon was beyond expectations. Luxury hotels, amazing beaches and outstanding service throughout the trip.",
  },
  {
    name: "Grace Wanjiku",
    country: "Kenya",
    image: "/images/testimonials/user3.jpg",
    review:
      "Professional guides, excellent communication and unforgettable memories. I highly recommend Global Lens Tours & Travel.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#64D98B] font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-black text-[#081B29] mt-4">
            Loved By Travelers
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Thousands of travelers have trusted Global Lens Tours & Travel to
            create unforgettable African adventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex text-yellow-400 text-xl">★★★★★</div>

              <p className="mt-6 text-gray-600 leading-8 italic">
                &ldquo;{person.review}&rdquo;
              </p>

              <div className="flex items-center mt-8">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />

                <div className="ml-5">
                  <h4 className="font-bold text-xl text-[#081B29]">
                    {person.name}
                  </h4>

                  <p className="text-[#64D98B]">{person.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
