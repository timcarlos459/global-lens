"use client";

import Image from "next/image";

const gallery = [
  {
    title: "Safari Adventure",
    image: "/images/safari/safari1.jpg",
  },
  {
    title: "Beach Escape",
    image: "/images/beach/beach1.jpg",
  },
  {
    title: "Mountain Trek",
    image: "/images/mountain/mountain1.jpg",
  },
  {
    title: "Gorilla Trekking",
    image: "/images/gorilla/gorilla1.jpg",
  },
  {
    title: "Island Paradise",
    image: "/images/island/island1.jpg",
  },
  {
    title: "Cultural Experience",
    image: "/images/culture/culture1.jpg",
  },
  {
    title: "Luxury Safari",
    image: "/images/safari/safari2.jpg",
  },
  {
    title: "Indian Ocean",
    image: "/images/beach/beach2.jpg",
  },
];

export default function LuxuryGallery() {
  return (
    <section className="py-28 bg-[#081B29]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#64D98B] font-semibold">

            Gallery

          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-4">

            Moments That Inspire Travel

          </h2>

          <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto">

            Explore unforgettable moments captured across Africa—from thrilling
            safaris and mountain adventures to pristine beaches, vibrant
            cultures, and breathtaking islands.

          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {gallery.map((photo) => (

            <div
              key={photo.title}
              className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer"
            >

              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition duration-500">

                <h3 className="text-white text-xl font-bold">

                  {photo.title}

                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}