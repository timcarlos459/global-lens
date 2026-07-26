import { Plus, Images } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-black text-[#081B29]">Gallery</h1>

          <p className="mt-2 text-gray-500">
            Manage photos and visual content used across Global Lens Tours.
          </p>
        </div>

        <Link
          href="/admin/gallery/new"
          className="flex w-fit items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] transition hover:scale-105"
        >
          <Plus size={20} />
          Add Photo
        </Link>
      </div>

      {/* Gallery */}

      <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
        <div className="flex min-h-80 items-center justify-center">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <Images size={30} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-[#081B29]">
              Gallery Management
            </h2>

            <p className="mt-2 leading-7 text-gray-500">
              Your travel photos will appear here. We will connect this section
              to the database and add image upload, categories, editing and
              deletion next.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
