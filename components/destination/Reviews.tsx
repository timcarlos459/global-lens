"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    id: 101,
    name: "Sophie Laurent",
    country: "France",
    image: "/images/testimonials/traveler1.jpg",
    rating: 5,
    date: "March 2026",
    review:
      "Every detail exceeded expectations. From sunrise safaris to luxury camps overlooking the savannah, this became one of the finest journeys we've ever experienced.",
  },
  {
    id: 201,
    name: "Michael Schneider",
    country: "Germany",
    image: "/images/testimonials/traveler2.jpg",
    rating: 5,
    date: "February 2026",
    review:
      "Professional planning, outstanding guides and exceptional service throughout. Africa felt effortless with Global Lens taking care of everything.",
  },
  {
    id: 303,
    name: "Isabella Rossi",
    country: "Italy",
    image: "/images/testimonials/traveler3.jpg",
    rating: 5,
    date: "January 2026",
    review:
      "Our honeymoon across Tanzania and Zanzibar was absolutely magical. Luxury, privacy and unforgettable memories in every destination.",
  },
  {
    id: 404,
    name: "Daniel Alvarez",
    country: "Spain",
    image: "/images/testimonials/traveler4.jpg",
    rating: 5,
    date: "April 2026",
    review:
      "The safari experience was breathtaking. Seeing the Big Five with expert guides while staying in beautiful lodges was beyond imagination.",
  },
  {
    id: 504,
    name: "Olivia Bennett",
    country: "Australia",
    image: "/images/testimonials/traveler5.jpg",
    rating: 5,
    date: "May 2026",
    review:
      "I've travelled extensively, but this was easily among my top travel experiences. Every transfer, activity and destination felt perfectly curated.",
  },
  {
    id: 606,
    name: "Noah van Dijk",
    country: "Netherlands",
    image: "/images/testimonials/traveler6.jpg",
    rating: 5,
    date: "June 2026",
    review:
      "Excellent communication from booking to departure. The itinerary balanced adventure and relaxation beautifully. We cannot wait to return.",
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to- from-white via-[#F8FBFC] to-white">
      {/* Decorative Background */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-112.5 w-112.5 rounded-full bg-[#081B29]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#64D98B]/15 px-5 py-2 text-sm font-bold uppercase tracking-[4px] text-[#64D98B]">
            Guest Reviews
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081B29] md:text-6xl">
            Stories From Around The World
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every journey tells a story. Discover why travelers from across the
            globe continue choosing Global Lens Tours for unforgettable African
            adventures.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#64D98B]/40 hover:shadow-2xl"
            >
              {/* Quote */}

              <div className="absolute right-6 top-6">
                <div className="rounded-full bg-[#64D98B]/10 p-3">
                  <Quote
                    size={34}
                    className="text-[#64D98B]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Rating */}

              <div className="mb-6 flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}

              <p className="relative z-10 mt-6 italic leading-8 text-gray-600">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-linear-to-b from-transparent via-gray-300 to-transparent" />

              {/* Profile */}

              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={72}
                    height={72}
                    className="rounded-full object-cover ring-4 ring-[#64D98B]/20 transition group-hover:ring-[#64D98B]"
                  />

                  <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#081B29]">
                    {review.name}
                  </h3>

                  <p className="font-medium text-[#64D98B]">{review.country}</p>

                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
