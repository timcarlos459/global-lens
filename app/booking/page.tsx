import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFC]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
            Luxury Bookings
          </span>

          <h1 className="mt-6 text-5xl font-black text-[#081B29] md:text-6xl">
            Book Your African Adventure
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Select your preferred destination to begin your booking. Our travel
            specialists will guide you through every step.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/booking/${destination.slug}`}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#64D98B] hover:shadow-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[#64D98B]">
                {destination.country}
              </p>

              <h2 className="mt-3 text-2xl font-black text-[#081B29]">
                {destination.name}
              </h2>

              <p className="mt-4 text-gray-600">{destination.duration}</p>

              <div className="mt-8 inline-flex items-center font-bold text-[#64D98B]">
                Book This Tour →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
