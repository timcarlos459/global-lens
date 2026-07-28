"use client";

import { RotateCcw, Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  totalCount: number;
  filteredCount: number;
}

const categories = [
  "Safari",
  "Beach",
  "Mountain",
  "Island",
  "Gorilla Trekking",
  "Culture",
];

export default function GalleryFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  totalCount,
  filteredCount,
}: Props) {
  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setStatus("");
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
      {/* HEADER */}

      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-black text-[#081B29]">Manage Gallery</h2>

          <p className="mt-1 text-sm text-gray-500">
            Search and filter your Global Lens Tours gallery images.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600">
            {filteredCount} of {totalCount}
          </span>

          <button
            type="button"
            onClick={clearFilters}
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
          >
            <RotateCcw size={16} />
            Clear
          </button>
        </div>
      </div>

      {/* FILTERS */}

      <div className="grid gap-4 lg:grid-cols-3">
        {/* SEARCH */}

        <div className="relative lg:col-span-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search gallery..."
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
          />
        </div>

        {/* CATEGORY */}

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
        >
          <option value="">All Categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* STATUS */}

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
        >
          <option value="">All Status</option>

          <option value="Published">Published</option>

          <option value="Draft">Draft</option>

          <option value="Archived">Archived</option>
        </select>
      </div>
    </div>
  );
}
