import Link from "next/link";
import Image from "next/image";

import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{
    country: string;
  }>;
};

export default async function CountryPage({ params }: Props) {
  const { country } = await params;

  const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

  const countryDestinations = destinations.filter(
    (destination) => slugify(destination.country) === country,
  );

  if (countryDestinations.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black text-[#081B29]">
          No destinations found
        </h1>
      </main>
    );
  }

  const countryName = countryDestinations[0].country;

  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-black text-[#081B29]">{countryName}</h1>

          <p className="mt-6 text-lg text-gray-600">
            Explore all destinations available in {countryName}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {countryDestinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition"
            >
              <div className="relative h-72">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-black text-[#081B29]">
                  {destination.name}
                </h2>

                <p className="mt-4 text-gray-600 line-clamp-3">
                  {destination.overview}
                </p>

                <div className="mt-6">
                  <span className="rounded-xl bg-[#64D98B] px-5 py-3 font-bold text-[#081B29]">
                    Explore Destination
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
