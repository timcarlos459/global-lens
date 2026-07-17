"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

interface Props {
  title: string;
  image: string;
  description: string;
  location: string;
  href?: string;
}

export default function ExperienceCard({
  title,
  image,
  description,
  location,
  href = "/contact",
}: Props) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-4xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-[#081B29]/90 via-black/20 to-transparent" />

        {/* Location */}

        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#081B29] backdrop-blur-xl">
          <MapPin size={16} className="text-[#64D98B]" />
          {location}
        </div>

        {/* Title */}

        <div className="absolute bottom-8 left-8 right-8">
          <h2 className="text-3xl font-black text-white transition group-hover:text-[#64D98B]">
            {title}
          </h2>
        </div>
      </div>

      {/* Content */}

      <div className="space-y-8 p-8">
        <p className="leading-8 text-gray-600">{description}</p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-[#081B29] transition group-hover:text-[#64D98B]">
            Explore Experience
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#64D98B] text-[#081B29] transition duration-500 group-hover:rotate-45">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}
