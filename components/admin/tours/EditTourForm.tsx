"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Save } from "lucide-react";

import type { Tour } from "@/types/adminTour";
import { updateTour } from "@/actions/adminTours";

interface Props {
  tour: Tour;
}

export default function EditTourForm({ tour }: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(tour.title);
  const [slug, setSlug] = useState(tour.slug);
  const [destination, setDestination] = useState(tour.destination);
  const [country, setCountry] = useState(tour.country ?? "");
  const [description, setDescription] = useState(tour.description ?? "");
  const [image, setImage] = useState(tour.image ?? "");
  const [duration, setDuration] = useState(tour.duration ?? "");
  const [price, setPrice] = useState(String(tour.price));
  const [category, setCategory] = useState(tour.category);
  const [status, setStatus] = useState<Tour["status"]>(tour.status);
  const [featured, setFeatured] = useState(tour.featured);
  const [rating, setRating] = useState(String(tour.rating));

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Tour title is required.");
      return;
    }

    if (!slug.trim()) {
      setError("Tour slug is required.");
      return;
    }

    if (!destination.trim()) {
      setError("Destination is required.");
      return;
    }

    if (!category.trim()) {
      setError("Category is required.");
      return;
    }

    const numericPrice = Number(price);
    const numericRating = Number(rating);

    if (!Number.isFinite(numericPrice) || numericPrice < 0) {
      setError("Please enter a valid price.");
      return;
    }

    if (
      !Number.isFinite(numericRating) ||
      numericRating < 0 ||
      numericRating > 5
    ) {
      setError("Rating must be between 0 and 5.");
      return;
    }

    try {
      setSaving(true);

      await updateTour({
        ...tour,
        title: title.trim(),
        slug: slug.trim().toLowerCase(),
        destination: destination.trim(),
        country: country.trim() || null,
        description: description.trim() || null,
        image: image.trim() || null,
        duration: duration.trim() || null,
        price: numericPrice,
        category: category.trim(),
        status,
        featured,
        rating: numericRating,
      });

      router.push("/admin/tours");
      router.refresh();
    } catch (error) {
      console.error("Update tour error:", error);

      setError(
        error instanceof Error ? error.message : "Failed to update tour.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ERROR */}
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      {/* BASIC INFORMATION */}
      <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
        <div>
          <h2 className="text-2xl font-black text-[#081B29]">
            Basic Information
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Update the main details of this tour package.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* TITLE */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Tour Title *
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Maasai Mara Safari Adventure"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
            />
          </div>

          {/* SLUG */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Slug *
            </label>

            <input
              type="text"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              placeholder="maasai-mara-safari"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
            />
          </div>

          {/* DESTINATION */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Destination *
            </label>

            <input
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Maasai Mara"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
            />
          </div>

          {/* COUNTRY */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Country
            </label>

            <input
              type="text"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Kenya"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
            />
          </div>

          {/* DURATION */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Duration
            </label>

            <input
              type="text"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              placeholder="3 Days / 2 Nights"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Category *
            </label>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#64D98B] focus:bg-white"
            >
              <option value="">Select category</option>
              <option value="Safari">Safari</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="Island">Island</option>
              <option value="Gorilla Trekking">Gorilla Trekking</option>
              <option value="Culture">Culture</option>
            </select>
          </div>

          {/* PRICE */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Price (USD) *
            </label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="1500"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#64D98B] focus:bg-white"
            />
          </div>

          {/* RATING */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Rating
            </label>

            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              placeholder="5"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#64D98B] focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* TOUR CONTENT */}
      <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
        <h2 className="text-2xl font-black text-[#081B29]">Tour Content</h2>

        <div className="mt-6 space-y-5">
          {/* IMAGE */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Image URL
            </label>

            <input
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="/images/safari/maasai-mara.jpg"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#64D98B] focus:bg-white"
            />

            {/* IMAGE PREVIEW */}
            {image.trim() && (
              <div className="relative mt-4 h-56 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <Image
                  src={image.trim()}
                  alt={`${title || "Tour"} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  unoptimized={image.trim().startsWith("http")}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Description
            </label>

            <textarea
              rows={7}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe the tour package..."
              className="w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 leading-7 outline-none focus:border-[#64D98B] focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* PUBLISHING */}
      <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
        <h2 className="text-2xl font-black text-[#081B29]">Publishing</h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* STATUS */}
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081B29]">
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value as Tour["status"])
              }
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-[#64D98B] focus:bg-white"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          {/* FEATURED */}
          <label className="flex cursor-pointer items-center gap-4 rounded-2xl bg-gray-50 p-4">
            <input
              type="checkbox"
              checked={featured}
              onChange={(event) => setFeatured(event.target.checked)}
              className="h-5 w-5 accent-[#64D98B]"
            />

            <span>
              <span className="block font-bold text-[#081B29]">
                Featured Tour
              </span>

              <span className="text-sm text-gray-500">
                Show this tour in featured sections.
              </span>
            </span>
          </label>
        </div>
      </section>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Link
          href="/admin/tours"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3 font-bold text-gray-600 transition hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Cancel
        </Link>

        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#64D98B] px-7 py-3 font-black text-[#081B29] transition hover:bg-[#52cc7b] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={18} />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
