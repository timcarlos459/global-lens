"use client";

import { SlidersHorizontal } from "lucide-react";

export default function Filters() {
  return (
    <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        {/* Left */}

        <div className="flex items-center gap-3">
          <SlidersHorizontal className="text-[#64D98B]" />

          <h3 className="text-xl font-bold text-[#081B29]">Filter Tours</h3>
        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-4">
          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>Price Range</option>
            <option>Under $500</option>
            <option>$500 - $1,000</option>
            <option>$1,000 - $2,000</option>
            <option>$2,000+</option>
          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>Duration</option>
            <option>1-3 Days</option>
            <option>4-7 Days</option>
            <option>8-14 Days</option>
            <option>15+ Days</option>
          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>Difficulty</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Challenging</option>
          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>Sort By</option>
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Price Low → High</option>
            <option>Price High → Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </section>
  );
}
