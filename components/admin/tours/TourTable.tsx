"use client";

import Image from "next/image";
import { Eye, Pencil, Trash2, CheckCircle2, Archive } from "lucide-react";

import type { Tour } from "@/types/adminTour";

interface Props {
  tours: Tour[];
  deletingId: number | null;
  onDelete: (id: number, title: string) => void;
  onStatusChange: (id: number, status: Tour["status"]) => void;
  onView: (tour: Tour) => void;
}

export default function TourTable({
  tours,
  deletingId,
  onDelete,
  onStatusChange,
  onView,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
      <div className="border-b border-gray-100 px-7 py-6">
        <h2 className="text-2xl font-black text-[#081B29]">Tour Packages</h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage your Global Lens Tours packages.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-275">
          <thead className="bg-[#081B29] text-white">
            <tr>
              <th className="px-6 py-5 text-left">Tour</th>
              <th className="px-6 py-5 text-left">Destination</th>
              <th className="px-6 py-5 text-left">Category</th>
              <th className="px-6 py-5 text-left">Price</th>
              <th className="px-6 py-5 text-left">Bookings</th>
              <th className="px-6 py-5 text-left">Status</th>
              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tours.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-20 text-center text-gray-500"
                >
                  No tours found.
                </td>
              </tr>
            ) : (
              tours.map((tour) => (
                <tr
                  key={tour.id}
                  className="border-b border-gray-100 transition hover:bg-[#F8FBFC]"
                >
                  {/* TOUR */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      {tour.image?.trim() ? (
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={tour.image.trim()}
                            alt={tour.title}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xs text-gray-400">
                          No image
                        </div>
                      )}

                      <div>
                        <p className="font-bold text-[#081B29]">{tour.title}</p>

                        <p className="mt-1 text-sm text-gray-500">
                          {tour.duration || "Duration not specified"}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* DESTINATION */}

                  <td className="px-6 py-5">{tour.destination}</td>

                  {/* CATEGORY */}

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                      {tour.category}
                    </span>
                  </td>

                  {/* PRICE */}

                  <td className="px-6 py-5 font-bold text-[#64D98B]">
                    ${Number(tour.price).toLocaleString()}
                  </td>

                  {/* BOOKINGS */}

                  <td className="px-6 py-5 font-semibold">
                    {Number(tour.bookings_count).toLocaleString()}
                  </td>

                  {/* STATUS */}

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        tour.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : tour.status === "Draft"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tour.status}
                    </span>
                  </td>

                  {/* ACTIONS */}

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      {/* BLUE EYE - VIEW MODAL */}

                      <button
                        type="button"
                        onClick={() => onView(tour)}
                        title="View tour"
                        className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      >
                        <Eye size={17} />
                      </button>

                      {/* GREEN PENCIL - EDIT */}

                      <button
                        type="button"
                        onClick={() => {
                          window.location.href = `/admin/tours/${tour.id}/edit`;
                        }}
                        title="Edit tour"
                        className="rounded-xl bg-green-100 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
                      >
                        <Pencil size={17} />
                      </button>

                      {/* PUBLISH */}

                      {tour.status !== "Published" && (
                        <button
                          type="button"
                          onClick={() => onStatusChange(tour.id, "Published")}
                          title="Publish tour"
                          className="rounded-xl bg-[#64D98B]/20 p-3 text-[#64D98B] transition hover:bg-[#64D98B] hover:text-white"
                        >
                          <CheckCircle2 size={17} />
                        </button>
                      )}

                      {/* ARCHIVE */}

                      {tour.status !== "Archived" && (
                        <button
                          type="button"
                          onClick={() => onStatusChange(tour.id, "Archived")}
                          title="Archive tour"
                          className="rounded-xl bg-orange-100 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
                        >
                          <Archive size={17} />
                        </button>
                      )}

                      {/* DELETE */}

                      <button
                        type="button"
                        onClick={() => onDelete(tour.id, tour.title)}
                        disabled={deletingId === tour.id}
                        title="Delete tour"
                        className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
