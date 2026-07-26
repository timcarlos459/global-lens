import Link from "next/link";
import { Plus } from "lucide-react";

import DestinationTable from "@/components/admin/destination/DestinationTable";
import { getDestinations } from "@/actions/adminDestinations";
import type { Destination } from "@/types/adminDestination";

export default async function DestinationsPage() {
  let destinations: Destination[] = [];

  try {
    destinations = await getDestinations();
  } catch (error) {
    console.error("Failed to load destinations:", error);
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-[#081B29]">Destinations</h1>

          <p className="mt-2 text-gray-500">
            Manage every destination available on Global Lens Tours.
          </p>
        </div>

        <Link
          href="/admin/destinations/new"
          className="flex items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] transition hover:scale-105"
        >
          <Plus size={20} />
          Add Destination
        </Link>
      </div>

      {/* Content */}

      {destinations.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-[#081B29]">
            No destinations found
          </h2>

          <p className="mt-3 text-gray-500">
            Create your first destination to start building your travel catalog.
          </p>

          <Link
            href="/admin/destinations/new"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-3 font-bold text-[#081B29] transition hover:scale-105"
          >
            <Plus size={18} />
            Add Destination
          </Link>
        </div>
      ) : (
        <DestinationTable destinations={destinations} />
      )}
    </div>
  );
}
