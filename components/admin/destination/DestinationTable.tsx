"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import type { Destination } from "@/types/adminDestination";

import { Eye, Pencil, Trash2, Star } from "lucide-react";

import DestinationDetailsModal from "./DestinationDetailsModal";
import EditDestinationModal from "./EditDestinationModal";
import DeleteDestinationModal from "./DeleteDestinationModal";

import {
  updateDestination,
  deleteDestination,
} from "@/actions/adminDestinations";

interface Props {
  destinations: Destination[];
}

export default function DestinationTable({ destinations }: Props) {
  const router = useRouter();

  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // =====================
  // VIEW
  // =====================

  const openView = (destination: Destination) => {
    setSelectedDestination(destination);
    setDetailsOpen(true);
  };

  const closeView = () => {
    setSelectedDestination(null);
    setDetailsOpen(false);
  };

  // =====================
  // EDIT
  // =====================

  const openEdit = (destination: Destination) => {
    setSelectedDestination({ ...destination });
    setEditOpen(true);
  };

  const closeEdit = () => {
    setSelectedDestination(null);
    setEditOpen(false);
  };

  // =====================
  // DELETE
  // =====================

  const openDelete = (destination: Destination) => {
    setSelectedDestination(destination);
    setDeleteOpen(true);
  };

  const closeDelete = () => {
    setSelectedDestination(null);
    setDeleteOpen(false);
  };

  // =====================
  // SAVE
  // =====================

  const handleSave = async (updatedDestination: Destination) => {
    try {
      await updateDestination(updatedDestination);

      closeEdit();

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  // =====================
  // DELETE
  // =====================

  const handleDelete = async () => {
    if (!selectedDestination) return;

    try {
      await deleteDestination(selectedDestination.id);

      closeDelete();

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <table className="w-full">
          <thead className="bg-[#081B29] text-white">
            <tr>
              <th className="px-6 py-5 text-left">Destination</th>
              <th className="px-6 py-5 text-left">Country</th>
              <th className="px-6 py-5 text-left">Category</th>
              <th className="px-6 py-5 text-left">Duration</th>
              <th className="px-6 py-5 text-left">Price</th>
              <th className="px-6 py-5 text-left">Rating</th>
              <th className="px-6 py-5 text-left">Featured</th>
              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {destinations.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-20 text-center text-gray-500">
                  No destinations found.
                </td>
              </tr>
            ) : (
              destinations.map((destination) => (
                <tr
                  key={destination.id}
                  className="border-b transition hover:bg-[#F8FBFC]"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <Image
                        src={destination.thumbnail}
                        alt={destination.name}
                        width={70}
                        height={70}
                        className="rounded-xl object-cover"
                      />

                      <div>
                        <h3 className="font-bold text-[#081B29]">
                          {destination.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {destination.city}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">{destination.country}</td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                      {destination.category}
                    </span>
                  </td>

                  <td className="px-6 py-5">{destination.duration}</td>

                  <td className="px-6 py-5 font-bold text-[#64D98B]">
                    ${destination.price.toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {destination.rating}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    {destination.featured ? (
                      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Featured
                      </span>
                    ) : (
                      <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
                        Normal
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => openView(destination)}
                        className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => openEdit(destination)}
                        className="rounded-xl bg-green-100 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => openDelete(destination)}
                        className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:bg-red-600 hover:text-white"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <DestinationDetailsModal
        destination={selectedDestination}
        open={detailsOpen}
        onClose={closeView}
      />

      <EditDestinationModal
        destination={selectedDestination}
        setDestination={setSelectedDestination}
        open={editOpen}
        onClose={closeEdit}
        onSave={handleSave}
      />

      <DeleteDestinationModal
        open={deleteOpen}
        onCancel={closeDelete}
        onConfirm={handleDelete}
      />
    </>
  );
}
