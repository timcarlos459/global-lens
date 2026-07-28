"use client";

import Image from "next/image";

export interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  category: string;
  destination: string | null;
  description: string | null;
  featured: boolean;
}

interface LuxuryGalleryProps {
  items: GalleryItem[];
}

export default function LuxuryGallery({ items }: LuxuryGalleryProps) {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[6px] text-[#64D98B]">
            Travel Gallery
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#081B29]">
            Experience Africa
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every journey tells a story. Explore breathtaking moments captured
            across Africa&apos;s most iconic destinations.
          </p>
        </div>

        {/* EMPTY STATE */}
        {items.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-gray-50 px-6 py-20 text-center">
            <p className="text-lg font-bold text-[#081B29]">
              Our gallery is being updated.
            </p>

            <p className="mt-2 text-gray-500">
              Beautiful travel moments will appear here soon.
            </p>
          </div>
        ) : (
          /* GALLERY */
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative h-72 overflow-hidden rounded-3xl"
              >
                {/* IMAGE */}
                {item.image_url?.trim() ? (
                  <Image
                    src={item.image_url.trim()}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-100 text-sm text-gray-400">
                    No image
                  </div>
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[2px] text-[#64D98B]">
                    {item.category}
                  </p>

                  <h3 className="text-xl font-bold">{item.title}</h3>

                  {item.destination && (
                    <p className="mt-1 text-sm text-white/80">
                      {item.destination}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
