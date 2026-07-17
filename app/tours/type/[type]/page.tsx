import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{
    type: string;
  }>;
};

export default async function TourTypePage({ params }: Props) {
  const { type } = await params;

  const tours = destinations.filter(
    (tour) =>
      tour.tourType.toLowerCase() === decodeURIComponent(type).toLowerCase(),
  );

  if (tours.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-black text-[#081B29]">
          {decodeURIComponent(type)} Tours
        </h1>

        <p className="mt-4 text-gray-600">
          Browse our {decodeURIComponent(type).toLowerCase()} experiences.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition"
          >
            <div className="relative h-72">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-black text-[#081B29]">
                {tour.name}
              </h2>

              <p className="mt-4 text-gray-600 line-clamp-3">{tour.overview}</p>

              <div className="mt-6">
                <span className="rounded-xl bg-[#64D98B] px-5 py-3 font-bold text-[#081B29]">
                  View Tour
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
