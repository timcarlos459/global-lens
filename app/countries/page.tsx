import Hero from "@/components/countries/Hero";
import CountryGrid from "@/components/countries/CountryGrid";

export default function CountriesPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="rounded-full bg-[#64D98B]/20 px-5 py-2 font-semibold text-[#081B29]">
            Choose Your Destination
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081B29]">
            Explore Countries
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Select a country to discover its breathtaking destinations, luxury
            accommodation, curated itineraries and unforgettable travel
            experiences.
          </p>
        </div>

        <CountryGrid />
      </section>
    </main>
  );
}
