import Image from "next/image";

interface DestinationGalleryProps {
  title: string;
  gallery: string[];
}

export default function DestinationGallery({
  title,
  gallery,
}: DestinationGalleryProps) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="space-y-8">
      <div>
        <span className="rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
          Photo Gallery
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#081B29]">
          Explore {title}
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          A glimpse of what awaits you on this unforgettable journey.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="group relative aspect-4/3 overflow-hidden rounded-3xl"
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />
          </div>
        ))}
      </div>
    </section>
  );
}
