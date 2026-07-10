import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  description: string;
  location: string;
}

export default function ExperienceCard({
  title,
  image,
  description,
  location,
}: Props) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-8">
        <span className="text-sm font-semibold text-[#64D98B]">{location}</span>

        <h3 className="mt-3 text-2xl font-black text-[#081B29]">{title}</h3>

        <p className="mt-4 text-gray-600 leading-8">{description}</p>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-[#081B29] hover:bg-[#102B42] text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
