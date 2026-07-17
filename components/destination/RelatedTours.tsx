"use client";

import Image from "next/image";
import Link from "next/link";

import { destinations } from "@/data/destinations";

interface Props {
  currentSlug: string;
  category: string;
}

export default function RelatedTours({ currentSlug, category }: Props) {
  const related = destinations
    .filter((tour) => tour.slug !== currentSlug && tour.category === category)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-24">
      <div className="mb-10">
        <span className="rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
          More Adventures
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#081B29]">
          Related Tours
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {related.map((tour) => (
          <Link
            key={tour.slug}
            href={`/destinations/${tour.slug}`}
            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-64">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#081B29]">{tour.name}</h3>

              <p className="mt-3 line-clamp-2 text-gray-600">{tour.overview}</p>

              <span className="mt-6 inline-flex font-semibold text-[#64D98B]">
                View Tour →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
