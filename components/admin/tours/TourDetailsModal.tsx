"use client";

import Image from "next/image";
import { X, Star, Calendar, MapPin } from "lucide-react";

import type { Tour } from "@/types/adminTour";

interface Props {
  tour: Tour | null;
  open: boolean;
  onClose: () => void;
}

export default function TourDetailsModal({ tour, open, onClose }: Props) {
  if (!open || !tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="relative">
          {tour.image?.trim() ? (
            <div className="relative h-64 w-full">
              <Image
                src={tour.image.trim()}
                alt={tour.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center bg-gray-100 text-gray-400">
              No image
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-black/60 p-3 text-white hover:bg-black"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6 p-7">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                {tour.category}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  tour.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : tour.status === "Draft"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {tour.status}
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-black text-[#081B29]">
              {tour.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <MapPin className="text-[#64D98B]" size={20} />
              <div>
                <p className="text-xs text-gray-500">Destination</p>
                <p className="font-bold">{tour.destination}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <Calendar className="text-[#64D98B]" size={20} />
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-bold">{tour.duration || "Not specified"}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">Price</p>
              <p className="text-xl font-black text-[#64D98B]">
                ${Number(tour.price).toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <div>
                <p className="text-xs text-gray-500">Rating</p>
                <p className="font-bold">{tour.rating ?? 0}/5</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-[#081B29]">Description</h3>

            <p className="mt-2 leading-7 text-gray-600">
              {tour.description || "No description available."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl bg-[#081B29] px-5 py-3 font-bold text-white hover:bg-[#102b3c]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
