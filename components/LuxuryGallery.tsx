"use client";

import Image from "next/image";

const gallery = [
  "/images/safari/murchison4.jpg",
  "/images/lake/lakekivu1.jpg",
  "/images/mountain/mountain1.jpg",
  "/images/gorilla/gorilla1.jpg",
  "/images/island/mauritius3.jpg",
  "/images/culture/maasai1.jpg",
  "/images/beach/beauvallon3.jpg",
  "/images/city/capetown4.jpg",
  "/images/museum/memorial4.jpg",
  "/images/desert/sossusvlei4.jpg",
  "/images/forest/nyungwe3.jpg",
  "/images/nature/victoriafalls3.jpg",
];

export default function LuxuryGallery() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[6px] text-[#64D98B] font-semibold">
            Travel Gallery
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#081B29]">
            Experience Africa
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every journey tells a story. Explore breathtaking moments captured
            across Africas most iconic destinations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((image) => (
            <div
              key={image}
              className="group relative h-72 overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt="Africa"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 translate-y-4 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold">Explore Africa</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
