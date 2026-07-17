import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/destination/Breadcrumb";
import DestinationGallery from "@/components/destination/DestinationGallery";
import Highlights from "@/components/destination/Highlights";
import Itinerary from "@/components/destination/Itinerary";
import IncludedExcluded from "@/components/destination/IncludedExcluded";
import Reviews from "@/components/destination/Reviews";
import RelatedTours from "@/components/destination/RelatedTours";
import Accommodation from "@/components/destination/Accommodation";

import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  const startingPrice = destination.roomOccupancy.find(
    (room) => room.guests === 1,
  );

  return (
    <main className="min-h-screen bg-[#F8FBFC]">
      {/* ================= HERO ================= */}

      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-linear-to-t from-[#081B29]/95 via-[#081B29]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-8 pb-24">
            <div className="max-w-4xl text-white">
              <span className="inline-flex rounded-full bg-[#64D98B] px-6 py-3 font-semibold text-[#081B29] shadow-xl">
                {destination.category}
              </span>

              <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">
                {destination.name}
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
                {destination.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB ================= */}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-8 py-6">
          <Breadcrumb
            country={destination.country}
            destination={destination.name}
          />
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          {/* ================= LEFT COLUMN ================= */}

          <div className="space-y-20">
            {/* ================= OVERVIEW ================= */}

            <section>
              <div className="mb-8">
                <span className="rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
                  Tour Overview
                </span>

                <h2 className="mt-5 text-4xl font-black text-[#081B29]">
                  Discover {destination.name}
                </h2>
              </div>

              <p className="text-lg leading-9 text-gray-600">
                {destination.description}
              </p>
            </section>

            {/* Gallery */}

            <DestinationGallery
              gallery={destination.gallery}
              title={destination.name}
            />

            {/* Highlights */}

            <Highlights highlights={destination.highlights} />

            {/* Itinerary */}

            <Itinerary itinerary={destination.itinerary} />

            <Accommodation
              standardImage="/images/rooms/standard.jpg"
              deluxeImage="/images/rooms/deluxe.jpg"
              luxuryImage="/images/rooms/luxury.jpg"
            />

            {/* Included / Excluded */}

            <IncludedExcluded
              included={destination.included}
              excluded={destination.excluded}
            />

            {/* Reviews */}

            <Reviews />

            {/* Related Tours */}

            <RelatedTours
              currentSlug={destination.slug}
              category={destination.category}
            />
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}

          <aside>
            <div className="sticky top-28 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
              <h3 className="text-3xl font-black text-[#081B29]">
                Tour Summary
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Country</span>
                  <strong>{destination.country}</strong>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Duration</span>
                  <strong>{destination.duration}</strong>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Group Size</span>
                  <strong>{destination.groupSize}</strong>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-gray-500">Difficulty</span>
                  <strong>{destination.difficulty}</strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Best Time</span>
                  <strong>{destination.bestTime}</strong>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-[#F8FBFC] p-6">
                <p className="text-sm text-gray-500">Starting From</p>

                <h2 className="mt-2 text-4xl font-black text-[#64D98B]">
                  ${startingPrice?.standard.low.toLocaleString()}
                </h2>

                <p className="mt-2 text-sm text-gray-500">Per Person Sharing</p>
              </div>

              <button className="mt-8 w-full rounded-full bg-[#64D98B] py-4 text-lg font-bold text-[#081B29] transition hover:bg-green-500">
                Book This Tour
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
