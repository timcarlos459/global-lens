import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryName = decodeURIComponent(category).toLowerCase();

  const filteredDestinations = destinations.filter(
    (destination) => destination.category.toLowerCase() === categoryName,
  );

  if (filteredDestinations.length === 0) {
    notFound();
  }

  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="rounded-full bg-[#64D98B]/20 px-5 py-2 font-semibold text-[#081B29]">
            Explore
          </span>

          <h1 className="mt-6 text-5xl font-black text-[#081B29] capitalize">
            {categoryName} Destinations
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover our best {categoryName} experiences across Africa.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-black text-[#081B29]">
                  {destination.name}
                </h2>

                <p className="mt-4 text-gray-600 line-clamp-3">
                  {destination.overview}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-[#64D98B] font-bold">
                    {destination.duration}
                  </span>

                  <span className="rounded-full bg-[#64D98B] px-4 py-2 text-white font-semibold">
                    View Tour
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
