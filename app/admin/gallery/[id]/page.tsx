import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Pencil,
  Star,
  Tag,
  MapPin,
} from "lucide-react";

import { getGalleryItem } from "@/actions/adminGallery";

interface GalleryViewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GalleryViewPage({
  params,
}: GalleryViewPageProps) {
  const { id } = await params;

  const item = await getGalleryItem(id);

  if (!item) {
    return (
      <div className="space-y-6">
        <Link
          href="/admin/gallery"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition hover:text-[#081B29]"
        >
          <ArrowLeft size={17} />
          Back to Gallery
        </Link>

        <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
          <h1 className="text-2xl font-black text-red-700">
            Gallery Image Not Found
          </h1>

          <p className="mt-2 text-red-600">
            We could not find the gallery image you are looking for.
          </p>
        </div>
      </div>
    );
  }

  const statusClass =
    item.status === "Published"
      ? "bg-green-100 text-green-700"
      : item.status === "Draft"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-gray-100 text-gray-600";

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* HEADER */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/admin/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition hover:text-[#081B29]"
          >
            <ArrowLeft size={17} />
            Back to Gallery
          </Link>

          <div className="mt-5">
            <h1 className="text-4xl font-black text-[#081B29]">
              Gallery Image
            </h1>

            <p className="mt-2 text-gray-500">
              View the details of this Global Lens Tours gallery image.
            </p>
          </div>
        </div>

        <Link
          href={`/admin/gallery/${item.id}/edit`}
          className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] transition hover:scale-105"
        >
          <Pencil size={18} />
          Edit Image
        </Link>
      </div>

      {/* MAIN CONTENT */}

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        {/* IMAGE */}

        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="relative aspect-16/10 w-full bg-gray-100">
            {item.image_url?.trim() ? (
              <Image
                src={item.image_url.trim()}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                No image available
              </div>
            )}

            {item.featured && (
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-black text-yellow-950 shadow-lg">
                <Star size={16} fill="currentColor" />
                Featured
              </div>
            )}
          </div>

          <div className="p-7">
            <h2 className="text-3xl font-black text-[#081B29]">{item.title}</h2>

            {item.description && (
              <p className="mt-4 leading-7 text-gray-600">{item.description}</p>
            )}
          </div>
        </section>

        {/* DETAILS */}

        <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
          <h2 className="text-2xl font-black text-[#081B29]">Image Details</h2>

          <div className="mt-7 space-y-6">
            {/* STATUS */}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                Status
              </p>

              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${statusClass}`}
              >
                <CheckCircle2 size={16} />
                {item.status}
              </span>
            </div>

            {/* CATEGORY */}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                Category
              </p>

              <div className="flex items-center gap-2 font-bold text-[#081B29]">
                <Tag size={17} className="text-[#64D98B]" />
                {item.category}
              </div>
            </div>

            {/* DESTINATION */}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                Destination
              </p>

              <div className="flex items-center gap-2 font-bold text-[#081B29]">
                <MapPin size={17} className="text-[#64D98B]" />

                {item.destination || "Not specified"}
              </div>
            </div>

            {/* FEATURED */}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                Featured
              </p>

              <div className="flex items-center gap-2 font-bold text-[#081B29]">
                <Star
                  size={17}
                  className="text-yellow-500"
                  fill={item.featured ? "currentColor" : "none"}
                />

                {item.featured ? "Yes" : "No"}
              </div>
            </div>

            {/* CREATED */}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                Added
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                <CalendarDays size={17} />

                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : "—"}
              </div>
            </div>

            {/* IMAGE URL */}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                Image Path
              </p>

              <div className="break-all rounded-2xl bg-gray-50 p-4 text-sm text-gray-500">
                {item.image_url || "No image URL"}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BOTTOM ACTIONS */}

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
        <Link
          href="/admin/gallery"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 font-bold text-gray-600 transition hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back to Gallery
        </Link>

        <Link
          href={`/admin/gallery/${item.id}/edit`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] transition hover:scale-105"
        >
          <Pencil size={18} />
          Edit Image
        </Link>
      </div>
    </div>
  );
}
