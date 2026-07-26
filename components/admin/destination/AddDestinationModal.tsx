"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Destination } from "@/types/adminDestination";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (destination: Omit<Destination, "id" | "created_at">) => void;
}

export default function AddDestinationModal({ open, onClose, onSave }: Props) {
  const [form, setForm] = useState<Omit<Destination, "id" | "created_at">>({
    name: "",
    slug: "",
    country: "",
    city: "",
    category: "Safari",
    price: 0,
    duration: "",
    rating: 5,
    featured: false,
    description: "",
    thumbnail: "",
    gallery: [],
  });

  if (!open) return null;

  const update = <K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K],
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    onSave(form);

    setForm({
      name: "",
      slug: "",
      country: "",
      city: "",
      category: "Safari",
      price: 0,
      duration: "",
      rating: 5,
      featured: false,
      description: "",
      thumbnail: "",
      gallery: [],
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <h2 className="text-3xl font-black text-[#081B29]">
            Add Destination
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Body */}

        <div className="grid gap-6 p-8 md:grid-cols-2">
          <div>
            <label>Name</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </div>

          <div>
            <label>Slug</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={form.slug}
              onChange={(e) => update("slug", e.target.value)}
            />
          </div>

          <div>
            <label>Country</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
            />
          </div>

          <div>
            <label>City</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
            />
          </div>

          <div>
            <label>Category</label>

            <select
              className="mt-2 w-full rounded-xl border p-3"
              value={form.category}
              onChange={(e) =>
                update("category", e.target.value as Destination["category"])
              }
            >
              <option>Safari</option>
              <option>Beach</option>
              <option>Mountain</option>
              <option>Island</option>
              <option>Cultural</option>
              <option>Adventure</option>
            </select>
          </div>

          <div>
            <label>Duration</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={form.duration}
              onChange={(e) => update("duration", e.target.value)}
            />
          </div>

          <div>
            <label>Price ($)</label>

            <input
              type="number"
              className="mt-2 w-full rounded-xl border p-3"
              value={form.price}
              onChange={(e) => update("price", Number(e.target.value))}
            />
          </div>

          <div>
            <label>Rating</label>

            <input
              type="number"
              min={1}
              max={5}
              className="mt-2 w-full rounded-xl border p-3"
              value={form.rating}
              onChange={(e) => update("rating", Number(e.target.value))}
            />
          </div>

          <div className="md:col-span-2">
            <label>Description</label>

            <textarea
              rows={5}
              className="mt-2 w-full rounded-xl border p-3"
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label>Thumbnail URL</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={form.thumbnail}
              onChange={(e) => update("thumbnail", e.target.value)}
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-4">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => update("featured", e.target.checked)}
            />

            <label>Featured Destination</label>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t px-8 py-6">
          <button onClick={onClose} className="rounded-xl border px-6 py-3">
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-[#64D98B] px-8 py-3 font-bold text-[#081B29]"
          >
            Add Destination
          </button>
        </div>
      </div>
    </div>
  );
}
