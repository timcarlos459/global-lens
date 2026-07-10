import Hero from "@/components/tours/Hero";
import SearchBar from "@/components/tours/SearchBar";
import CategoryTabs from "@/components/tours/CategoryTabs";
import Filters from "@/components/tours/Filters";
import TourGrid from "@/components/tours/TourGrid";

export default function ToursPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center rounded-full bg-[#64D98B]/20 px-5 py-2 text-sm font-semibold text-[#081B29]">
            Explore Africa
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black text-[#081B29]">
            Find Your Perfect Adventure
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse our carefully curated collection of luxury safaris, beach
            escapes, mountain expeditions, cultural journeys, island holidays
            and unforgettable wildlife experiences across Africa.
          </p>
        </div>

        <div className="space-y-10">
          <SearchBar />

          <CategoryTabs />

          <Filters />

          <TourGrid />
        </div>
      </section>
    </main>
  );
}
