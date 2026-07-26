"use client";

import { RotateCcw, Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  totalCount: number;
  filteredCount: number;
}

export default function TourFilters({
  search,
  setSearch,
  status,
  setStatus,
  totalCount,
  filteredCount,
}: Props) {
  const clearFilters = () => {
    setSearch("");
    setStatus("");
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-black text-[#081B29]">Manage Tours</h2>

          <p className="mt-1 text-sm text-gray-500">
            Search and filter your tour packages.
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

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tour, destination or category..."
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
          />
        </div>

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
