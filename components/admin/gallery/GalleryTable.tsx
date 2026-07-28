"use client";

import Image from "next/image";
import { Eye, Pencil, Trash2, CheckCircle2, Archive, Star } from "lucide-react";

import type { GalleryItem } from "@/types/adminGallery";

interface Props {
  items: GalleryItem[];
  deletingId: string | null;
  onDelete: (id: string, title: string) => void;
  onStatusChange: (id: string, status: GalleryItem["status"]) => void;
  onView: (item: GalleryItem) => void;
  onEdit: (item: GalleryItem) => void;
}

export default function GalleryTable({
  items,
  deletingId,
  onDelete,
  onStatusChange,
  onView,
  onEdit,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
      {/* HEADER */}

      <div className="border-b border-gray-100 px-7 py-6">
        <h2 className="text-2xl font-black text-[#081B29]">Gallery Images</h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage images displayed throughout Global Lens Tours.
        </p>
      </div>

      {/* TABLE */}

      <div className="overflow-x-auto">
        <table className="w-full min-w-275">
          <thead className="bg-[#081B29] text-white">
            <tr>
              <th className="px-6 py-5 text-left">Image</th>

              <th className="px-6 py-5 text-left">Destination</th>

              <th className="px-6 py-5 text-left">Category</th>

              <th className="px-6 py-5 text-left">Featured</th>

              <th className="px-6 py-5 text-left">Status</th>

              <th className="px-6 py-5 text-left">Added</th>

              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-20 text-center">
                  <div className="mx-auto max-w-md">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
                      <Eye size={28} className="text-gray-400" />
                    </div>

                    <p className="font-semibold text-gray-500">
                      No gallery images found
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Try changing your search or filters.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 transition hover:bg-[#F8FBFC]"
                >
                  {/* IMAGE */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      {item.image_url?.trim() ? (
                        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl">
                          <Image
                            src={item.image_url.trim()}
                            alt={item.title}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-xs text-gray-400">
                          No image
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="truncate font-bold text-[#081B29]">
                          {item.title}
                        </p>

                        <p className="mt-1 max-w-xs truncate text-xs text-gray-400">
                          {item.image_url || "No image URL"}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* DESTINATION */}

                  <td className="px-6 py-5">
                    {item.destination || (
                      <span className="text-gray-400">Not specified</span>
                    )}
                  </td>

                  {/* CATEGORY */}

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                      {item.category}
                    </span>
                  </td>

                  {/* FEATURED */}

                  <td className="px-6 py-5">
                    {item.featured ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 text-sm font-semibold text-yellow-700">
                        <Star size={14} fill="currentColor" />
                        Featured
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400">No</span>
                    )}
                  </td>

                  {/* STATUS */}

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        item.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Draft"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* CREATED */}

                  <td className="px-6 py-5 text-sm text-gray-500">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString()
                      : "—"}
                  </td>

                  {/* ACTIONS */}

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      {/* VIEW */}

                      <button
                        type="button"
                        onClick={() => onView(item)}
                        title="View image"
                        className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      >
                        <Eye size={17} />
                      </button>

                      {/* EDIT */}

                      <button
                        type="button"
                        onClick={() => onEdit(item)}
                        title="Edit image"
                        className="rounded-xl bg-green-100 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
                      >
                        <Pencil size={17} />
                      </button>

                      {/* PUBLISH */}

                      {item.status !== "Published" && (
                        <button
                          type="button"
                          onClick={() => onStatusChange(item.id, "Published")}
                          title="Publish image"
                          className="rounded-xl bg-[#64D98B]/20 p-3 text-[#64D98B] transition hover:bg-[#64D98B] hover:text-white"
                        >
                          <CheckCircle2 size={17} />
                        </button>
                      )}

                      {/* ARCHIVE */}

                      {item.status !== "Archived" && (
                        <button
                          type="button"
                          onClick={() => onStatusChange(item.id, "Archived")}
                          title="Archive image"
                          className="rounded-xl bg-orange-100 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"
                        >
                          <Archive size={17} />
                        </button>
                      )}

                      {/* DELETE */}

                      <button
                        type="button"
                        onClick={() => onDelete(item.id, item.title)}
                        disabled={deletingId === item.id}
                        title="Delete image"
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
