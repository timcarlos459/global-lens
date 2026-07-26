"use client";

import Image from "next/image";
import { X, Star, MapPin, Clock, DollarSign } from "lucide-react";
import type { Destination } from "@/types/adminDestination";

interface Props {
  destination: Destination | null;
  open: boolean;
  onClose: () => void;
}

export default function DestinationDetailsModal({
  destination,
  open,
  onClose,
}: Props) {
  if (!open || !destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-black text-[#081B29]">
              {destination.name}
            </h2>

            <p className="mt-2 flex items-center gap-2 text-gray-500">
              <MapPin size={18} />
              {destination.city}, {destination.country}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Hero Image */}

        <div className="relative h-87.5 w-full">
          <Image
            src={destination.thumbnail}
            alt={destination.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Information */}

        <div className="grid gap-8 p-8 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Clock className="text-[#64D98B]" />
              <span>{destination.duration}</span>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="text-[#64D98B]" />
              <span className="font-bold">
                ${destination.price.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Star className="fill-yellow-400 text-yellow-400" />
              <span>{destination.rating} / 5</span>
            </div>

            <div>
              <span className="font-bold">Category:</span>{" "}
              {destination.category}
            </div>

            <div>
              <span className="font-bold">Featured:</span>{" "}
              {destination.featured ? "Yes" : "No"}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-[#081B29]">
              Description
            </h3>

            <p className="leading-8 text-gray-600">{destination.description}</p>
          </div>
        </div>

        {/* Gallery */}

        <div className="border-t p-8">
          <h3 className="mb-6 text-2xl font-black text-[#081B29]">Gallery</h3>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {destination.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-40 overflow-hidden rounded-2xl"
              >
                <Image
                  src={image}
                  alt={`${destination.name}-${index}`}
                  fill
                  className="object-cover transition hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
