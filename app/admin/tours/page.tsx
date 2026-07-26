import { Plus } from "lucide-react";
import Link from "next/link";

import { getTours } from "@/actions/adminTours";
import TourManager from "@/components/admin/tours/TourManager";

export default async function ToursPage() {
  const tours = await getTours();

  const publishedCount = tours.filter(
    (tour) => tour.status === "Published",
  ).length;

  const draftCount = tours.filter((tour) => tour.status === "Draft").length;

  const archivedCount = tours.filter(
    (tour) => tour.status === "Archived",
  ).length;

  const totalBookings = tours.reduce(
    (sum, tour) => sum + Number(tour.bookings_count || 0),
    0,
  );

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-black text-[#081B29]">Tours</h1>

          <p className="mt-2 text-gray-500">
            Manage Global Lens Tours packages and experiences.
          </p>
        </div>

        <Link
          href="/admin/tours/new"
          className="flex w-fit items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] transition hover:scale-105"
        >
          <Plus size={20} />
          Add Tour
        </Link>
      </div>

      {/* STATS */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Stat label="Total Tours" value={tours.length} />

        <Stat label="Published" value={publishedCount} green />

        <Stat label="Drafts" value={draftCount} />

        <Stat label="Archived" value={archivedCount} />
      </div>

      {/* BOOKINGS */}
      <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg">
        <p className="text-sm font-semibold text-gray-500">Total Bookings</p>

        <h2 className="mt-3 text-4xl font-black text-[#081B29]">
          {totalBookings.toLocaleString()}
        </h2>
      </div>

      {/* TOUR MANAGER */}
      <TourManager tours={tours} />
    </div>
  );
}

function Stat({
  label,
  value,
  green = false,
}: {
  label: string;
  value: number;
  green?: boolean;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg">
      <p className="text-sm font-semibold text-gray-500">{label}</p>

      <h2
        className={`mt-3 text-4xl font-black ${
          green ? "text-[#64D98B]" : "text-[#081B29]"
        }`}
      >
        {value.toLocaleString()}
      </h2>
    </div>
  );
}
