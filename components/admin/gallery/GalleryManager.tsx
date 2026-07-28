"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Archive,
  CheckCircle2,
  Eye,
  Pencil,
  Plus,
  RotateCcw,
  Search,
  Star,
  Trash2,
} from "lucide-react";

import type {
  GalleryCategory,
  GalleryItem,
  GalleryStatus,
} from "@/types/adminGallery";

import {
  deleteGalleryItem,
  toggleGalleryFeatured,
  toggleGalleryStatus,
} from "@/actions/adminGallery";

interface Props {
  items: GalleryItem[];
}

const categories: GalleryCategory[] = [
  "Safari",
  "Beach",
  "Mountain",
  "Island",
  "Gorilla Trekking",
  "Culture",
];

const statuses: GalleryStatus[] = ["Published", "Draft", "Archived"];

export default function GalleryManager({ items }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<GalleryCategory | "">("");
  const [status, setStatus] = useState<GalleryStatus | "">("");

  // IMPORTANT:
  // Supabase gallery IDs are UUID strings.
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    const query = search.toLowerCase().trim();

    return items.filter((item) => {
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        (item.destination ?? "").toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      const matchesCategory = !category || item.category === category;

      const matchesStatus = !status || item.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [items, search, category, status]);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setStatus("");
  };

  // ============================
  // DELETE
  // ============================

  const handleDelete = async (id: string, title: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      await deleteGalleryItem(id);

      router.refresh();
    } catch (error) {
      console.error("Delete gallery item error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete gallery item.",
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ============================
  // STATUS
  // ============================

  const handleStatusChange = async (id: string, newStatus: GalleryStatus) => {
    try {
      setUpdatingId(id);

      await toggleGalleryStatus(id, newStatus);

      router.refresh();
    } catch (error) {
      console.error("Gallery status update error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to update gallery status.",
      );
    } finally {
      setUpdatingId(null);
    }
  };

  // ============================
  // FEATURED
  // ============================

  const handleFeaturedChange = async (id: string, featured: boolean) => {
    try {
      setUpdatingId(id);

      await toggleGalleryFeatured(id, featured);

      router.refresh();
    } catch (error) {
      console.error("Gallery featured update error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to update featured status.",
      );
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* =====================================================
          FILTERS
      ====================================================== */}

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-black text-[#081B29]">
              Manage Gallery
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Search and filter your Global Lens Tours gallery images.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600">
              {filteredItems.length} of {items.length}
            </span>

            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
            >
              <RotateCcw size={16} />
              Clear
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* SEARCH */}

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search image, destination..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            />
          </div>

          {/* CATEGORY */}

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as GalleryCategory | "")
            }
            className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
          >
            <option value="">All Categories</option>

            {categories.map((itemCategory) => (
              <option key={itemCategory} value={itemCategory}>
                {itemCategory}
              </option>
            ))}
          </select>

          {/* STATUS */}

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as GalleryStatus | "")
            }
            className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
          >
            <option value="">All Status</option>

            {statuses.map((itemStatus) => (
              <option key={itemStatus} value={itemStatus}>
                {itemStatus}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        {/* HEADER */}

        <div className="flex flex-col gap-4 border-b border-gray-100 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#081B29]">Gallery</h2>

            <p className="mt-1 text-sm text-gray-500">
              Showing {filteredItems.length} of {items.length} gallery images.
            </p>
          </div>

          <Link
            href="/admin/gallery/new"
            className="flex w-fit items-center gap-2 rounded-xl bg-[#64D98B] px-5 py-3 font-bold text-[#081B29] transition hover:scale-105"
          >
            <Plus size={18} />
            Add Image
          </Link>
        </div>

        {/* EMPTY STATE */}

        {filteredItems.length === 0 ? (
          <div className="px-6 py-24 text-center">
            <Search size={42} className="mx-auto mb-4 text-gray-300" />

            <p className="font-bold text-gray-500">No gallery images found.</p>

            <p className="mt-1 text-sm text-gray-400">
              Try changing your search or filters.
            </p>

            {items.length === 0 && (
              <Link
                href="/admin/gallery/new"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#64D98B] px-5 py-3 font-bold text-[#081B29]"
              >
                <Plus size={18} />
                Add Your First Image
              </Link>
            )}
          </div>
        ) : (
          /* GALLERY GRID */

          <div className="grid gap-6 p-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => {
              const isUpdating = updatingId === item.id;

              const isDeleting = deletingId === item.id;

              return (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGE */}

                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {item.image_url?.trim() ? (
                      <Image
                        src={item.image_url.trim()}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-gray-400">
                        No image
                      </div>
                    )}

                    {/* FEATURED */}

                    {item.featured && (
                      <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-black text-yellow-950 shadow-lg">
                        <Star size={13} fill="currentColor" />
                        Featured
                      </div>
                    )}

                    {/* STATUS */}

                    <div className="absolute right-4 top-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold shadow-lg ${
                          item.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Draft"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-black text-[#081B29]">
                          {item.title}
                        </h3>

                        {item.destination && (
                          <p className="mt-1 text-sm text-gray-500">
                            {item.destination}
                          </p>
                        )}
                      </div>

                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                        {item.category}
                      </span>
                    </div>

                    {item.description && (
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    )}

                    {/* ACTIONS */}

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                      {/* VIEW */}

                      <Link
                        href={`/admin/gallery/${item.id}`}
                        title="View image"
                        className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      >
                        <Eye size={17} />
                      </Link>

                      {/* EDIT */}

                      <Link
                        href={`/admin/gallery/${item.id}/edit`}
                        title="Edit image"
                        className="rounded-xl bg-green-100 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
                      >
                        <Pencil size={17} />
                      </Link>

                      {/* FEATURED */}

                      <button
                        type="button"
                        disabled={isUpdating}
                        onClick={() =>
                          handleFeaturedChange(item.id, !item.featured)
                        }
                        title={
                          item.featured ? "Remove featured" : "Mark as featured"
                        }
                        className={`rounded-xl p-3 transition ${
                          item.featured
                            ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600"
                        } disabled:cursor-not-allowed disabled:opacity-50`}
                      >
                        <Star
                          size={17}
                          fill={item.featured ? "currentColor" : "none"}
                        />
                      </button>

                      {/* PUBLISH */}

                      {item.status !== "Published" && (
                        <button
                          type="button"
                          disabled={isUpdating}
                          onClick={() =>
                            handleStatusChange(item.id, "Published")
                          }
                          title="Publish image"
                          className="rounded-xl bg-[#64D98B]/20 p-3 text-[#64D98B] transition hover:bg-[#64D98B] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <CheckCircle2 size={17} />
                        </button>
                      )}

                      {/* ARCHIVE */}

                      {item.status !== "Archived" && (
                        <button
                          type="button"
                          disabled={isUpdating}
                          onClick={() =>
                            handleStatusChange(item.id, "Archived")
                          }
                          title="Archive image"
                          className="rounded-xl bg-orange-100 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Archive size={17} />
                        </button>
                      )}

                      {/* DELETE */}

                      <button
                        type="button"
                        disabled={isDeleting}
                        onClick={() => handleDelete(item.id, item.title)}
                        title="Delete image"
                        className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
