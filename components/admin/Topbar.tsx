"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">
      <div className="relative w-105">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          placeholder="Search bookings, customers..."
          className="w-full rounded-2xl border border-gray-200 py-3 pl-12 pr-4 outline-none focus:border-[#64D98B]"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell size={24} />

          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <UserCircle2 size={40} />

          <div>
            <h3 className="font-bold">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Global Lens Tours
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}