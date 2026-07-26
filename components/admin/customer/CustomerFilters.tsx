"use client";

import { Search, Filter, Plus } from "lucide-react";

export default function CustomerFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg lg:flex-row lg:items-center lg:justify-between">
      {/* Left Side */}
      <div className="flex flex-1 flex-col gap-4 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search customer..."
            className="w-full rounded-2xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#64D98B]"
          />
        </div>

        {/* Status */}
        <select className="rounded-2xl border border-gray-300 px-5 py-3 outline-none focus:border-[#64D98B]">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* Country */}
        <select className="rounded-2xl border border-gray-300 px-5 py-3 outline-none focus:border-[#64D98B]">
          <option>All Countries</option>
          <option>Kenya</option>
          <option>Tanzania</option>
          <option>Uganda</option>
          <option>Rwanda</option>
          <option>South Africa</option>
        </select>
      </div>

      {/* Right Side */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 rounded-2xl border border-gray-300 px-5 py-3 font-semibold transition hover:bg-gray-100">
          <Filter size={18} />
          Filters
        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-3 font-bold text-[#081B29] transition hover:scale-105">
          <Plus size={18} />
          Add Customer
        </button>
      </div>
    </div>
  );
}
