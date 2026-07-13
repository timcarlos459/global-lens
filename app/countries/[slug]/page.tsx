import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Globe2, MapPin } from "lucide-react";

import { countries } from "@/data/countries";
import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;

  const country = countries.find((item) => item.slug === slug);

  const countryTours = destinations.filter(
    (tour) => tour.country.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!country || countryTours.length === 0) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="relative h-175">
        <Image
          src={country.image}
          alt={country.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center bg-black/60">
          <div className="mx-auto max-w-7xl px-8 text-white">
            <h1 className="text-6xl font-black">{country.name}</h1>

            <p className="mt-6 max-w-3xl text-xl">{country.description}</p>
          </div>
        </div>
      </section>

      {/* Destinations */}

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="mb-10 flex items-center gap-3">
          <Globe2 className="text-[#64D98B]" />

          <h2 className="text-4xl font-black">Top Destinations</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countryTours.map((tour) => (
            <div
              key={tour.slug}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:shadow-2xl"
            >
              <div className="relative h-60">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-[#64D98B]">
                  <MapPin size={18} />

                  <span>{tour.location}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#081B29]">
                  {tour.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-gray-600">
                  {tour.overview}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-semibold">{tour.duration}</span>

                  <Link
                    href={`/tours/${tour.slug}`}
                    className="rounded-xl bg-[#64D98B] px-5 py-2 font-semibold text-[#081B29] transition hover:bg-[#53c67b]"
                  >
                    View Tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
