"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DestinationTable from "./DestinationTable";
import AddDestinationModal from "./AddDestinationModal";

import { Plus } from "lucide-react";

import type { Destination } from "@/types/adminDestination";

import { createDestination } from "@/actions/adminDestinations";

interface Props {
  initialDestinations: Destination[];
}

export default function DestinationManager({ initialDestinations }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleCreate = async (
    destination: Omit<Destination, "id" | "created_at">,
  ) => {
    try {
      await createDestination(destination);

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-[#081B29]">Destinations</h1>

          <p className="mt-2 text-gray-500">Manage all destinations</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 rounded-xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] hover:scale-105"
        >
          <Plus size={20} />
          Add Destination
        </button>
      </div>

      <DestinationTable destinations={initialDestinations} />

      <AddDestinationModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleCreate}
      />
    </div>
  );
}
