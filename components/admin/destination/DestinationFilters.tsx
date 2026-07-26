"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  country: string;
  setCountry: (value: string) => void;

  featured: string;
  setFeatured: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;
}

export default function DestinationFilters({
  search,
  setSearch,
  category,
  setCategory,
  country,
  setCountry,
  featured,
  setFeatured,
  sort,
  setSort,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center gap-3">
        <SlidersHorizontal className="text-[#64D98B]" size={24} />

        <h2 className="text-2xl font-black text-[#081B29]">Filters</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        {/* Search */}

        <div className="relative lg:col-span-2">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destination..."
            className="w-full rounded-2xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#64D98B]"
          />
        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-2xl border border-gray-300 p-3 outline-none focus:border-[#64D98B]"
        >
          <option value="">All Categories</option>
          <option>Safari</option>
          <option>Beach</option>
          <option>Mountain</option>
          <option>Island</option>
          <option>Cultural</option>
          <option>Adventure</option>
        </select>

        {/* Country */}

        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="rounded-2xl border border-gray-300 p-3 outline-none focus:border-[#64D98B]"
        />

        {/* Featured */}

        <select
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
          className="rounded-2xl border border-gray-300 p-3 outline-none focus:border-[#64D98B]"
        >
          <option value="">All</option>
          <option value="featured">Featured</option>
          <option value="normal">Normal</option>
        </select>
      </div>

      {/* Sort */}

      <div className="mt-6 flex justify-end">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-2xl border border-gray-300 px-5 py-3 outline-none focus:border-[#64D98B]"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="price-low">Price (Low → High)</option>
          <option value="price-high">Price (High → Low)</option>
          <option value="rating-high">Highest Rated</option>
          <option value="rating-low">Lowest Rated</option>
          <option value="name">A → Z</option>
        </select>
      </div>
    </div>
  );
}
