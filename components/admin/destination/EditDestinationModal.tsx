"use client";

import { X } from "lucide-react";
import type { Destination } from "@/types/adminDestination";

interface Props {
  destination: Destination | null;
  setDestination: React.Dispatch<React.SetStateAction<Destination | null>>;
  open: boolean;
  onClose: () => void;
  onSave: (destination: Destination) => void;
}

export default function EditDestinationModal({
  destination,
  setDestination,
  open,
  onClose,
  onSave,
}: Props) {
  if (!open || !destination) return null;

  const updateField = <K extends keyof Destination>(
    field: K,
    value: Destination[K],
  ) => {
    setDestination((prev) =>
      prev
        ? {
            ...prev,
            [field]: value,
          }
        : prev,
    );
  };

  const handleSave = () => {
    onSave(destination);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-black text-[#081B29]">
              Edit Destination
            </h2>

            <p className="mt-2 text-gray-500">{destination.name}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Form */}

        <div className="grid gap-6 p-8 md:grid-cols-2">
          <div>
            <label>Name</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>

          <div>
            <label>Slug</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.slug}
              onChange={(e) => updateField("slug", e.target.value)}
            />
          </div>

          <div>
            <label>Country</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.country}
              onChange={(e) => updateField("country", e.target.value)}
            />
          </div>

          <div>
            <label>City</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.city}
              onChange={(e) => updateField("city", e.target.value)}
            />
          </div>

          <div>
            <label>Category</label>

            <select
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.category}
              onChange={(e) =>
                updateField(
                  "category",
                  e.target.value as Destination["category"],
                )
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
              value={destination.duration}
              onChange={(e) => updateField("duration", e.target.value)}
            />
          </div>

          <div>
            <label>Price</label>

            <input
              type="number"
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.price}
              onChange={(e) => updateField("price", Number(e.target.value))}
            />
          </div>

          <div>
            <label>Rating</label>

            <input
              type="number"
              min={1}
              max={5}
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.rating}
              onChange={(e) => updateField("rating", Number(e.target.value))}
            />
          </div>

          <div className="md:col-span-2">
            <label>Description</label>

            <textarea
              rows={5}
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.description}
              onChange={(e) => updateField("description", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label>Thumbnail URL</label>

            <input
              className="mt-2 w-full rounded-xl border p-3"
              value={destination.thumbnail}
              onChange={(e) => updateField("thumbnail", e.target.value)}
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              checked={destination.featured}
              onChange={(e) => updateField("featured", e.target.checked)}
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
