import GalleryManager from "@/components/admin/gallery/GalleryManager";
import { getGalleryItems } from "@/actions/adminGallery";

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-[#081B29]">Gallery</h1>

        <p className="mt-2 text-gray-500">
          Manage photos and visual content used across Global Lens Tours.
        </p>
      </div>

      <GalleryManager items={items} />
    </div>
  );
}
