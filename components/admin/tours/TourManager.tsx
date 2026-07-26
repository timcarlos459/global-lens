"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import type { Tour } from "@/types/adminTour";
import { deleteTour, toggleTourStatus } from "@/actions/adminTours";

import TourFilters from "./TourFilters";
import TourTable from "./TourTable";
import TourDetailsModal from "./TourDetailsModal";

interface Props {
  tours: Tour[];
}

export default function TourManager({ tours }: Props) {
  const router = useRouter();

  // -----------------------------
  // FILTER STATE
  // -----------------------------

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // -----------------------------
  // DELETE STATE
  // -----------------------------

  const [deletingId, setDeletingId] = useState<number | null>(null);

  // -----------------------------
  // VIEW MODAL STATE
  // -----------------------------

  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  // -----------------------------
  // FILTER TOURS
  // -----------------------------

  const filteredTours = useMemo(() => {
    const query = search.toLowerCase().trim();

    return tours.filter((tour) => {
      const matchesSearch =
        !query ||
        tour.title.toLowerCase().includes(query) ||
        tour.destination.toLowerCase().includes(query) ||
        tour.category.toLowerCase().includes(query);

      const matchesStatus = !status || tour.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [tours, search, status]);

  // -----------------------------
  // VIEW TOUR
  // -----------------------------

  const handleView = (tour: Tour) => {
    setSelectedTour(tour);
    setDetailsOpen(true);
  };

  // -----------------------------
  // CLOSE MODAL
  // -----------------------------

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedTour(null);
  };

  // -----------------------------
  // DELETE TOUR
  // -----------------------------

  const handleDelete = async (id: number, title: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      await deleteTour(id);

      // Close modal if the deleted tour was open
      if (selectedTour?.id === id) {
        handleCloseDetails();
      }

      router.refresh();
    } catch (error) {
      console.error("Delete tour error:", error);

      window.alert(
        error instanceof Error ? error.message : "Failed to delete tour.",
      );
    } finally {
      setDeletingId(null);
    }
  };

  // -----------------------------
  // CHANGE TOUR STATUS
  // -----------------------------

  const handleStatusChange = async (id: number, newStatus: Tour["status"]) => {
    try {
      await toggleTourStatus(id, newStatus);

      // If the modal is open for this tour,
      // update its status immediately too.
      setSelectedTour((current) => {
        if (!current || current.id !== id) {
          return current;
        }

        return {
          ...current,
          status: newStatus,
        };
      });

      router.refresh();
    } catch (error) {
      console.error("Update tour status error:", error);

      window.alert(
        error instanceof Error
          ? error.message
          : "Failed to update tour status.",
      );
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* -------------------------------- */}
        {/* FILTERS */}
        {/* -------------------------------- */}

        <TourFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          totalCount={tours.length}
          filteredCount={filteredTours.length}
        />

        {/* -------------------------------- */}
        {/* ADD TOUR HEADER */}
        {/* -------------------------------- */}

        <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-black text-[#081B29]">
              Tour Management
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View, edit, publish, archive, or delete your tour packages.
            </p>
          </div>

          <Link
            href="/admin/tours/new"
            className="w-fit rounded-xl bg-[#64D98B] px-5 py-3 font-bold text-[#081B29] transition hover:scale-105 hover:bg-[#52cc7b]"
          >
            + Add Tour
          </Link>
        </div>

        {/* -------------------------------- */}
        {/* TOUR TABLE */}
        {/* -------------------------------- */}

        <TourTable
          tours={filteredTours}
          deletingId={deletingId}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
          onView={handleView}
        />
      </div>

      {/* -------------------------------- */}
      {/* TOUR DETAILS MODAL */}
      {/* -------------------------------- */}

      <TourDetailsModal
        tour={selectedTour}
        open={detailsOpen}
        onClose={handleCloseDetails}
      />
    </>
  );
}
