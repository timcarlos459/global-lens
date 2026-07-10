"use client";

import { Search, MapPin, CalendarDays, Users } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="-mt-24 relative z-20">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Destination */}

          <div>
            <label className="block text-sm font-semibold text-[#081B29] mb-2">
              Destination
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <MapPin className="w-5 h-5 text-[#64D98B]" />

              <input
                type="text"
                placeholder="Where to?"
                className="ml-3 w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Category */}

          <div>
            <label className="block text-sm font-semibold text-[#081B29] mb-2">
              Category
            </label>

            <select className="w-full border rounded-xl px-4 py-3 outline-none">
              <option>All Categories</option>
              <option>Safari</option>
              <option>Beach</option>
              <option>Mountain</option>
              <option>Island</option>
              <option>Culture</option>
              <option>Gorilla Trekking</option>
            </select>
          </div>

          {/* Travel Date */}

          <div>
            <label className="block text-sm font-semibold text-[#081B29] mb-2">
              Travel Date
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <CalendarDays className="w-5 h-5 text-[#64D98B]" />

              <input
                type="date"
                className="ml-3 w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Guests */}

          <div>
            <label className="block text-sm font-semibold text-[#081B29] mb-2">
              Guests
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <Users className="w-5 h-5 text-[#64D98B]" />

              <input
                type="number"
                min={1}
                defaultValue={2}
                className="ml-3 w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Search */}

          <div className="flex items-end">
            <button className="w-full flex items-center justify-center gap-3 bg-[#64D98B] hover:bg-[#54c97a] text-[#081B29] font-bold rounded-xl py-4 transition">
              <Search size={20} />
              Search Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
