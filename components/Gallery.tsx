"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Camera, MapPin, X } from "lucide-react";

import type { GalleryCategory, GalleryItem } from "@/types/adminGallery";

interface GalleryProps {
  items: GalleryItem[];
}

const categories: Array<"All" | GalleryCategory> = [
  "All",
  "Safari",
  "Beach",
  "Mountain",
  "Island",
  "Gorilla Trekking",
  "Culture",
];

export default function Gallery({ items }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | GalleryCategory>(
    "All",
  );

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#F7FAF8] py-24"
      >
        {/* Background decoration */}

        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#64D98B]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#081B29]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#64D98B]/15 px-4 py-2 text-sm font-bold text-[#081B29]">
              <Camera size={16} />
              Travel Gallery
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#081B29] sm:text-5xl">
              Moments Worth
              <span className="text-[#64D98B]"> Remembering</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
              Explore unforgettable moments captured across our destinations,
              from African safaris and beautiful beaches to mountains, islands
              and cultural experiences.
            </p>
          </div>

          {/* CATEGORY FILTERS */}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    active
                      ? "bg-[#081B29] text-white shadow-lg"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-[#64D98B] hover:text-[#081B29]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* GALLERY */}

          {filteredItems.length === 0 ? (
            <div className="mt-16 rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center shadow-sm">
              <Camera size={42} className="mx-auto mb-4 text-gray-300" />

              <h3 className="text-xl font-black text-[#081B29]">
                No gallery images yet
              </h3>

              <p className="mt-2 text-gray-500">
                More travel moments will be added soon.
              </p>
            </div>
          ) : (
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative block h-90 overflow-hidden rounded-3xl bg-gray-200 text-left shadow-lg"
                >
                  {/* IMAGE */}

                  {item.image_url?.trim() ? (
                    <Image
                      src={item.image_url.trim()}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-gray-400">
                      No image available
                    </div>
                  )}

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-90 transition duration-300" />

                  {/* CATEGORY */}

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-[#081B29] backdrop-blur">
                      {item.category}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>

                    {item.destination && (
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-white/80">
                        <MapPin size={14} />

                        <span>{item.destination}</span>
                      </div>
                    )}

                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#64D98B]">
                      View Image
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* BOTTOM CTA */}

          <div className="mt-14 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#081B29] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#102D40]"
            >
              Explore Full Gallery
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <div
            className="relative h-[75vh] w-full max-w-6xl overflow-hidden rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            {selectedImage.image_url?.trim() && (
              <Image
                src={selectedImage.image_url.trim()}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl font-black text-white">
                {selectedImage.title}
              </h3>

              {selectedImage.destination && (
                <div className="mt-2 flex items-center gap-2 text-white/80">
                  <MapPin size={16} />
                  {selectedImage.destination}
                </div>
              )}

              {selectedImage.description && (
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
