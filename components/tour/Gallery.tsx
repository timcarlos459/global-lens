"use client";

import { useState } from "react";
import Image from "next/image";
import { Destination } from "@/data/destinations";

interface GalleryProps {
  destination: Destination;
}

export default function Gallery({ destination }: GalleryProps) {
  const [selected, setSelected] = useState(destination.gallery[0]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-[#081B29] mb-8">Photo Gallery</h2>

      <div className="grid lg:grid-cols-4 gap-5">
        {/* Main Image */}
        <div className="lg:col-span-3">
          <Image
            src={selected}
            alt={destination.name}
            width={1200}
            height={700}
            className="rounded-3xl object-cover w-full h-137.5"
          />
        </div>

        {/* Thumbnails */}
        <div className="space-y-4">
          {destination.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelected(image)}
              className={`w-full overflow-hidden rounded-2xl border-4 transition ${
                selected === image ? "border-[#64D98B]" : "border-transparent"
              }`}
            >
              <Image
                src={image}
                alt={`${destination.name}-${index}`}
                width={400}
                height={200}
                className="h-28 w-full object-cover hover:scale-105 transition"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
