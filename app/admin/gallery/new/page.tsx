import NewGalleryForm from "@/components/admin/gallery/NewGalleryForm";

export default function NewGalleryPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[4px] text-[#64D98B]">
          Content Management
        </p>

        <h1 className="mt-2 text-4xl font-black text-[#081B29]">
          Add Gallery Photo
        </h1>

        <p className="mt-2 text-gray-500">
          Add a new image to the Global Lens Tours gallery.
        </p>
      </div>

      <NewGalleryForm />
    </div>
  );
}
