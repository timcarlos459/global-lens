"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  country: string;
  destination: string;
}

export default function Breadcrumb({ country, destination }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm"
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-500 transition hover:text-[#64D98B]"
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight size={16} className="text-gray-400" />

      <Link
        href="/countries"
        className="text-gray-500 transition hover:text-[#64D98B]"
      >
        Countries
      </Link>

      <ChevronRight size={16} className="text-gray-400" />

      <Link
        href={`/countries/${country.toLowerCase()}`}
        className="text-gray-500 transition hover:text-[#64D98B]"
      >
        {country}
      </Link>

      <ChevronRight size={16} className="text-gray-400" />

      <span className="font-semibold text-[#081B29]">{destination}</span>
    </nav>
  );
}
