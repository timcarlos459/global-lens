"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Image as ImageIcon, Save, Star } from "lucide-react";

import { updateGalleryItem } from "@/actions/adminGallery";

import type {
  GalleryCategory,
  GalleryItem,
  GalleryStatus,
} from "@/types/adminGallery";

interface Props {
  item: GalleryItem;
}

const categories: GalleryCategory[] = [
  "Safari",
  "Beach",
  "Mountain",
  "Island",
  "Gorilla Trekking",
  "Culture",
];

const statuses: GalleryStatus[] = ["Draft", "Published", "Archived"];

export default function EditGalleryForm({ item }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: item.title ?? "",
    image_url: item.image_url ?? "",
    category: item.category,
    destination: item.destination ?? "",
    description: item.description ?? "",
    status: item.status,
    featured: item.featured ?? false,
  });

  const updateField = <K extends keyof typeof form>(
    field: K,
    value: (typeof form)[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    // ============================
    // VALIDATION
    // ============================

    if (!form.title.trim()) {
      setError("Please enter an image title.");
      return;
    }

    if (!form.image_url.trim()) {
      setError("Please enter an image path or image URL.");
      return;
    }

    if (!form.category) {
      setError("Please select a gallery category.");
      return;
    }

    setLoading(true);

    try {
      await updateGalleryItem({
        id: item.id,
        title: form.title.trim(),
        image_url: form.image_url.trim(),
        category: form.category,
        destination: form.destination.trim() || null,
        description: form.description.trim() || null,
        status: form.status,
        featured: form.featured,
      });
      router.push("/admin/gallery");
      router.refresh();
    } catch (err) {
      console.error("Update gallery item error:", err);

      setError(
        err instanceof Error ? err.message : "Unable to update gallery image.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div>
        <Link
          href="/admin/gallery"
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#64D98B]"
        >
          <ArrowLeft size={17} />
          Back to Gallery
        </Link>

        <h1 className="text-4xl font-black text-[#081B29]">
          Edit Gallery Image
        </h1>

        <p className="mt-2 text-gray-500">
          Update the details for{" "}
          <span className="font-semibold text-[#081B29]">{item.title}</span>.
        </p>
      </div>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      {/* =====================================================
          FORM
      ====================================================== */}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* =================================================
            BASIC INFORMATION
        ================================================== */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="text-2xl font-black text-[#081B29]">
              Image Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update the information visitors will see for this gallery image.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* TITLE */}

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Image Title *
              </label>

              <input
                type="text"
                value={form.title}
                onChange={(event) => updateField("title", event.target.value)}
                placeholder="e.g. Maasai Mara Safari Adventure"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
                required
              />
            </div>

            {/* DESTINATION */}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#081B29]">
                Destination
              </label>

              <input
                type="text"
                value={form.destination}
                onChange={(event) =>
                  updateField("destination", event.target.value)
                }
                placeholder="e.g. Maasai Mara"
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
                  updateField("category", event.target.value as GalleryCategory)
                }
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
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
                placeholder="Describe the image or experience..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              />
            </div>
          </div>
        </section>

        {/* =================================================
            IMAGE
        ================================================== */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="flex items-center gap-2 text-2xl font-black text-[#081B29]">
              <ImageIcon size={24} />
              Gallery Image
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update the image path or URL.
            </p>
          </div>

          <label className="mb-2 block text-sm font-bold text-[#081B29]">
            Image Path / URL *
          </label>

          <input
            type="text"
            value={form.image_url}
            onChange={(event) => updateField("image_url", event.target.value)}
            placeholder="/images/gallery/safari.jpg"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
            required
          />

          <p className="mt-3 text-xs text-gray-400">
            Example: /images/gallery/safari.jpg
          </p>

          {/* IMAGE PREVIEW */}

          {form.image_url.trim() ? (
            <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
              <div className="border-b border-gray-200 px-5 py-4">
                <p className="text-sm font-bold text-[#081B29]">
                  Image Preview
                </p>
              </div>

              <div className="relative h-80 w-full">
                <Image
                  src={form.image_url.trim()}
                  alt={form.title || "Gallery image preview"}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="mt-6 flex h-80 items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50">
              <div className="text-center">
                <ImageIcon size={40} className="mx-auto text-gray-300" />

                <p className="mt-3 text-sm font-semibold text-gray-400">
                  No image preview
                </p>
              </div>
            </div>
          )}
        </section>

        {/* =================================================
            PUBLISHING
        ================================================== */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <div className="mb-7">
            <h2 className="text-2xl font-black text-[#081B29]">Publishing</h2>

            <p className="mt-1 text-sm text-gray-500">
              Control how this image appears on the website.
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
                  updateField("status", event.target.value as GalleryStatus)
                }
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#64D98B] focus:bg-white"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* FEATURED */}

            <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-[#64D98B]">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) =>
                  updateField("featured", event.target.checked)
                }
                className="h-5 w-5 accent-[#64D98B]"
              />

              <div>
                <div className="flex items-center gap-2">
                  <Star
                    size={17}
                    className="text-yellow-500"
                    fill={form.featured ? "currentColor" : "none"}
                  />

                  <p className="font-bold text-[#081B29]">Featured Image</p>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  Show this image in featured gallery sections.
                </p>
              </div>
            </label>
          </div>
        </section>

        {/* =================================================
            CURRENT IMAGE INFO
        ================================================== */}

        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Gallery Image ID
          </p>

          <p className="mt-2 break-all font-mono text-sm text-gray-600">
            {item.id}
          </p>
        </section>

        {/* =================================================
            BUTTONS
        ================================================== */}

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
          <Link
            href="/admin/gallery"
            className="rounded-2xl border border-gray-200 bg-white px-7 py-4 text-center font-bold text-gray-600 transition hover:bg-gray-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#64D98B] px-7 py-4 font-bold text-[#081B29] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={19} />

            {loading ? "Updating Image..." : "Update Image"}
          </button>
        </div>
      </form>
    </div>
  );
}
