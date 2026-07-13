import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  country: {
    name: string;
    slug: string;
    image: string;
    description: string;
  };
};

export default function CountryCard({ country }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300">
      <div className="relative h-72">
        <Image
          src={country.image}
          alt={country.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-black text-[#081B29]">{country.name}</h2>

        <p className="mt-4 text-gray-600 leading-8 line-clamp-4">
          {country.description}
        </p>

        <Link
          href={`/countries/${country.slug}`}
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#64D98B] px-6 py-3 font-bold text-[#081B29] hover:bg-[#53c67b]"
        >
          Explore Country
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
