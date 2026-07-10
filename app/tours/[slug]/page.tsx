import { notFound } from "next/navigation";

import { destinations } from "@/data/destinations";

import Hero from "@/components/tour/Hero";
import Gallery from "@/components/tour/Gallery";
import Overview from "@/components/tour/Overview";
import Highlights from "@/components/tour/Highlights";
import Itinerary from "@/components/tour/Itinerary";
import Included from "@/components/tour/Included";
import BookingCard from "@/components/tour/BookingCard";
import RelatedTours from "@/components/tour/RelatedTours";

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const destination = destinations.find((tour) => tour.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="bg-[#F8F9FA]">
      <Hero destination={destination} />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <Gallery destination={destination} />

            <Overview destination={destination} />

            <Highlights destination={destination} />

            <Itinerary destination={destination} />

            <Included destination={destination} />
          </div>

          <BookingCard destination={destination} />
        </div>

        <RelatedTours currentSlug={destination.slug} />
      </section>
    </main>
  );
}
