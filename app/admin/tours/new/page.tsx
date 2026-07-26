"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Image as ImageIcon, Save, Star } from "lucide-react";

import { createTour } from "@/actions/adminTours";

const categories = [
  "Safari",
  "Beach",
  "Mountain",
  "Island",
  "Gorilla Trekking",
  "Culture",
];

type TourStatus = "Published" | "Draft" | "Archived";

interface FormState {
  title: string;
  slug: string;
  destination: string;
  country: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  category: string;
  status: TourStatus;
  featured: boolean;
  rating: string;
}

const initialForm: FormState = {
  title: "",
  slug: "",
  destination: "",
  country: "",
  description: "",
  image: "",
  duration: "",
  price: "",
  category: "Safari",
  status: "Draft",
  featured: false,
  rating: "5",
};

function generateSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function NewTourPage() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = <K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleTitleChange = (value: string) => {
    setForm((current) => ({
      ...current,
      title: value,
      slug: generateSlug(value),
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const title = form.title.trim();
    const slug = form.slug.trim() || generateSlug(title);
    const destination = form.destination.trim();
    const country = form.country.trim();
    const description = form.description.trim();
    const image = form.image.trim();
    const duration = form.duration.trim();

    const numericPrice = Number(form.price);
    const numericRating = Number(form.rating);

    /* VALIDATION */

    if (!title) {
      setError("Tour title is required.");
      return;
    }

    if (!slug) {
      setError("Tour slug is required.");
      return;
    }

    if (!destination) {
      setError("Destination is required.");
      return;
    }

    if (!country) {
      setError("Country is required.");
      return;
    }

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
      setLoading(true);

      await createTour({
        title,
        slug,
        destination,
        country,
        description: description || null,
        image: image || null,
        duration: duration || null,
        price: numericPrice,
        category: form.category,
        status: form.status,
        featured: form.featured,
        bookings_count: 0,
        rating: numericRating,
      });

      router.push("/admin/tours");
      router.refresh();
    } catch (err) {
      console.error("Create tour error:", err);

      setError(
        err instanceof Error ? err.message : "Unable to create the tour.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* HEADER */}

      <div>
        <Link
          href="/admin/tours"
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#64D98B]"
        >
          <ArrowLeft size={17} />
          Back to Tours
        </Link>

        <h1 className="text-4xl font-black text-[#081B29]">Add New Tour</h1>

        <p className="mt-2 text-gray-500">
          Create a new tour package for Global Lens Tours.
        </p>
      </div>

      {/* ERROR */}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* BASIC INFORMATION */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="text-2xl font-black text-[#081B29]">
              Basic Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Information visitors will see about the tour.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* TITLE */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Tour Title *
              </label>

              <input
                type="text"
                value={form.title}
                onChange={(event) => handleTitleChange(event.target.value)}
                placeholder="e.g. Maasai Mara Luxury Safari"
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>

            {/* SLUG */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                URL Slug *
              </label>

              <input
                type="text"
                value={form.slug}
                onChange={(event) =>
                  updateField("slug", generateSlug(event.target.value))
                }
                placeholder="maasai-mara-luxury-safari"
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />

              <p className="mt-2 text-xs text-gray-400">
                Automatically generated from the tour title.
              </p>
            </div>

            {/* DESTINATION */}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Destination *
              </label>

              <input
                type="text"
                value={form.destination}
                onChange={(event) =>
                  updateField("destination", event.target.value)
                }
                placeholder="Maasai Mara"
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>

            {/* COUNTRY */}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Country *
              </label>

              <input
                type="text"
                value={form.country}
                onChange={(event) => updateField("country", event.target.value)}
                placeholder="Kenya"
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>

            {/* DESCRIPTION */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Description
              </label>

              <textarea
                value={form.description}
                onChange={(event) =>
                  updateField("description", event.target.value)
                }
                rows={6}
                placeholder="Describe the tour experience..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>
          </div>
        </section>

        {/* TOUR DETAILS */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="text-2xl font-black text-[#081B29]">Tour Details</h2>

            <p className="mt-1 text-sm text-gray-500">
              Pricing, duration and classification.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* PRICE */}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Price (USD) *
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={(event) => updateField("price", event.target.value)}
                placeholder="2500"
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>

            {/* DURATION */}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Duration
              </label>

              <input
                type="text"
                value={form.duration}
                onChange={(event) =>
                  updateField("duration", event.target.value)
                }
                placeholder="5 Days / 4 Nights"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>

            {/* CATEGORY */}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Category *
              </label>

              <select
                value={form.category}
                onChange={(event) =>
                  updateField("category", event.target.value)
                }
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-[#64D98B] focus:bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* RATING */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#081B29]">
                <Star size={15} className="text-yellow-500" />
                Rating
              </label>

              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={form.rating}
                onChange={(event) => updateField("rating", event.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>
          </div>
        </section>

        {/* TOUR IMAGE */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="flex items-center gap-2 text-2xl font-black text-[#081B29]">
              <ImageIcon size={24} />
              Tour Image
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add an image path from your public folder or an allowed external
              image URL.
            </p>
          </div>

          <input
            type="text"
            value={form.image}
            onChange={(event) => updateField("image", event.target.value)}
            placeholder="/images/safari/safari1.jpg"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
          />

          <p className="mt-3 text-xs text-gray-400">
            Example: /images/safari/safari1.jpg
          </p>

          {/* IMAGE PREVIEW */}

          {form.image.trim() && (
            <div className="relative mt-5 h-64 w-full overflow-hidden rounded-2xl border border-gray-200">
              <Image
                src={form.image.trim()}
                alt="Tour preview"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}
        </section>

        {/* PUBLISHING */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="text-2xl font-black text-[#081B29]">Publishing</h2>

            <p className="mt-1 text-sm text-gray-500">
              Control how this tour appears on the website.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* STATUS */}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Status
              </label>

              <select
                value={form.status}
                onChange={(event) =>
                  updateField("status", event.target.value as TourStatus)
                }
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-[#64D98B] focus:bg-white"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            {/* FEATURED */}

            <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) =>
                  updateField("featured", event.target.checked)
                }
                className="h-5 w-5 accent-[#64D98B]"
              />

              <div>
                <p className="font-bold text-[#081B29]">Featured Tour</p>

                <p className="mt-1 text-sm text-gray-500">
                  Show this tour in featured sections.
                </p>
              </div>
            </label>
          </div>
        </section>

        {/* ACTIONS */}

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
          <Link
            href="/admin/tours"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-4 font-bold text-gray-600 transition hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#64D98B] px-7 py-4 font-bold text-[#081B29] transition hover:bg-[#52cc7b] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={19} />

            {loading ? "Saving Tour..." : "Save Tour"}
          </button>
        </div>
      </form>
    </div>
  );
}
