import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Clock3, Star, Users, CalendarDays } from "lucide-react";

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
    <main className="bg-white">
      {/* ================= HERO ================= */}

      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-8 pb-20 text-white">
            <span className="inline-block bg-[#64D98B] px-5 py-2 rounded-full font-semibold">
              {destination.category}
            </span>

            <h1 className="text-6xl font-black mt-6">{destination.name}</h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">
              {destination.overview}
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              <span className="flex items-center gap-2">
                <MapPin size={18} />

                {destination.country}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={18} />

                {destination.duration}
              </span>

              <span className="flex items-center gap-2">
                <Users size={18} />

                {destination.groupSize}
              </span>

              <span className="flex gap-1 text-yellow-400">
                {[...Array(destination.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-3 gap-16">
        {/* ================= LEFT COLUMN ================= */}

        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-[#081B29]">Tour Overview</h2>

          <p className="mt-6 text-gray-600 leading-8">
            {destination.description}
          </p>

          {/* ================= GALLERY ================= */}

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {destination.gallery.map((image) => (
              <div
                key={image}
                className="relative h-72 rounded-3xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={destination.name}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>

          {/* ================= TOUR HIGHLIGHTS ================= */}

          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[#081B29] mb-10">
              Tour Highlights
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-[#F8FBFC] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#64D98B] text-white flex items-center justify-center font-bold">
                      ✓
                    </div>

                    <p className="font-medium text-[#081B29] leading-7">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* ================= ITINERARY ================= */}

          <section className="mt-20">
            <div className="flex items-center gap-3 mb-10">
              <CalendarDays className="text-[#64D98B]" size={32} />

              <h2 className="text-3xl font-bold text-[#081B29]">
                Day-by-Day Itinerary
              </h2>
            </div>

            <div className="space-y-8">
              {destination.itinerary.map((item, index) => (
                <div key={index} className="flex gap-6">
                  {/* Timeline */}

                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#64D98B] text-white font-bold flex items-center justify-center">
                      {index + 1}
                    </div>

                    {index !== destination.itinerary.length - 1 && (
                      <div className="w-1 flex-1 bg-[#64D98B]/30 mt-2" />
                    )}
                  </div>

                  {/* Content */}

                  <div className="flex-1 bg-[#F8FBFC] rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300">
                    <p className="text-[#64D98B] font-semibold">{item.day}</p>

                    <h3 className="text-2xl font-bold mt-2 text-[#081B29]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= ROOM OCCUPANCY ================= */}

          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[#081B29] mb-8">
              Room Occupancy & Room Pricing
            </h2>

            <div className="overflow-x-auto rounded-3xl shadow-lg border border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-[#081B29] text-white">
                    <th className="px-6 py-5 text-left">Guests</th>

                    <th className="px-6 py-5 text-left">Rooms</th>

                    <th className="px-6 py-5 text-left">Room Prices</th>
                  </tr>
                </thead>

                <tbody>
                  {destination.roomOccupancy.map((room, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-[#F8FBFC]"
                      } hover:bg-green-50 transition`}
                    >
                      <td className="px-6 py-5 font-semibold">{room.guests}</td>

                      <td className="px-6 py-5">{room.rooms}</td>

                      <td className="px-6 py-5">
                        {room.guests === 7 ? (
                          <span className="font-bold text-red-600">
                            Contact Us
                          </span>
                        ) : (
                          <div className="space-y-1">
                            <div>
                              <strong>Standard:</strong> $
                              {room.standard.standard.toLocaleString()}
                            </div>

                            <div>
                              <strong>Deluxe:</strong> $
                              {room.deluxe.standard.toLocaleString()}
                            </div>

                            <div>
                              <strong>Luxury:</strong> $
                              {room.luxury.standard.toLocaleString()}
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-5">
              * Prices shown are the standard season rates per person (PP).
              Final pricing will be calculated during booking based on your
              travel season and group size.
            </p>
          </section>
          {/* ================= INCLUDED & EXCLUDED ================= */}

          <section className="mt-20">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* INCLUDED */}

              <div className="bg-green-50 rounded-3xl p-8 border border-green-100 shadow-sm">
                <h2 className="text-3xl font-bold text-green-700 mb-8">
                  ✓ What&apos;s Included
                </h2>

                <div className="space-y-5">
                  {destination.included.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        ✓
                      </div>

                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXCLUDED */}

              <div className="bg-red-50 rounded-3xl p-8 border border-red-100 shadow-sm">
                <h2 className="text-3xl font-bold text-red-700 mb-8">
                  ✕ What&apos;s Excluded
                </h2>

                <div className="space-y-5">
                  {destination.excluded.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        ✕
                      </div>

                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}

        <div className="bg-[#F8FBFC] rounded-3xl p-8 shadow-xl sticky top-28 h-fit">
          <h2 className="text-3xl font-black text-[#081B29]">Tour Details</h2>

          <div className="mt-8 space-y-7">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Location</span>

              <strong>{destination.location}</strong>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Duration</span>

              <strong>{destination.duration}</strong>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Group Size</span>

              <strong>{destination.groupSize}</strong>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Best Time</span>

              <strong>{destination.bestTime}</strong>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Difficulty</span>

              <strong>{destination.difficulty}</strong>
            </div>

            <hr />

            <div>
              <p className="text-gray-500 text-sm">Standard Room</p>

              <h3 className="text-2xl font-black text-[#64D98B]">
                From ${startingPrice?.standard.low.toLocaleString()} PP
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Standard Season: $
                {startingPrice?.standard.standard.toLocaleString()} PP
              </p>

              <p className="text-sm text-gray-500">
                Peak Season: ${startingPrice?.standard.peak.toLocaleString()} PP
              </p>
            </div>

            <hr />

            <div>
              <p className="text-gray-500 text-sm">Deluxe Room</p>

              <h3 className="text-2xl font-black text-[#081B29]">
                From ${startingPrice?.deluxe.low.toLocaleString()} PP
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Standard Season: $
                {startingPrice?.deluxe.standard.toLocaleString()} PP
              </p>

              <p className="text-sm text-gray-500">
                Peak Season: ${startingPrice?.deluxe.peak.toLocaleString()} PP
              </p>
            </div>

            <hr />

            <div>
              <p className="text-gray-500 text-sm">Luxury Suite</p>

              <h3 className="text-2xl font-black text-[#081B29]">
                From ${startingPrice?.luxury.low.toLocaleString()} PP
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Standard Season: $
                {startingPrice?.luxury.standard.toLocaleString()} PP
              </p>

              <p className="text-sm text-gray-500">
                Peak Season: ${startingPrice?.luxury.peak.toLocaleString()} PP
              </p>
            </div>

            <a
              href={`/booking?tour=${destination.slug}`}
              className="block w-full mt-8 bg-[#64D98B] hover:bg-green-500 transition py-4 rounded-full text-center text-white font-bold"
            >
              Book This Tour
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
