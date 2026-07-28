import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getGalleryItem } from "@/actions/adminGallery";

import EditGalleryForm from "@/components/admin/gallery/EditGalleryForm";

interface EditGalleryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditGalleryPage({
  params,
}: EditGalleryPageProps) {
  const { id } = await params;

  // Gallery IDs in Supabase are UUID strings.
  if (!id || typeof id !== "string") {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
        <h1 className="text-2xl font-black text-red-700">
          Invalid Gallery Image
        </h1>

        <p className="mt-2 text-red-600">
          The gallery image ID provided is not valid.
        </p>

        <Link
          href="/admin/gallery"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#081B29] px-5 py-3 font-bold text-white transition hover:bg-[#102B3D]"
        >
          <ArrowLeft size={18} />
          Back to Gallery
        </Link>
      </div>
    );
  }

  const item = await getGalleryItem(id);

  if (!item) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-black text-[#081B29]">
          Gallery Image Not Found
        </h1>

        <p className="mt-2 text-gray-500">
          We could not find the gallery image you are trying to edit.
        </p>

        <Link
          href="/admin/gallery"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#081B29] px-5 py-3 font-bold text-white transition hover:bg-[#102B3D]"
        >
          <ArrowLeft size={18} />
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}

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
            Edit Gallery Image
          </h1>

          <p className="mt-2 text-gray-500">
            Update the details for{" "}
            <span className="font-semibold text-[#081B29]">{item.title}</span>.
          </p>
        </div>
      </div>

      {/* FORM */}

      <EditGalleryForm item={item} />
    </div>
  );
}
