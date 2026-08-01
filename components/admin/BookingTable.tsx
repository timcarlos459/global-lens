"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Pencil, Trash2, CheckCircle2, XCircle } from "lucide-react";

import BookingDetailsModal from "./BookingDetailsModal";
import EditBookingModal from "./EditBookingModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

import type { Booking } from "@/types/adminBooking";

import {
  confirmBooking,
  cancelBooking,
  deleteBooking,
  updateBooking,
} from "@/actions/adminBookings";

interface Props {
  bookings: Booking[];
}

export default function BookingTable({ bookings }: Props) {
  const router = useRouter();

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [loadingId, setLoadingId] = useState<string | null>(null);

  // ============================
  // VIEW
  // ============================

  const openDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setDetailsOpen(true);
  };

  const closeDetails = () => {
    setDetailsOpen(false);
    setSelectedBooking(null);
  };

  // ============================
  // EDIT
  // ============================

  const openEdit = (booking: Booking) => {
    setSelectedBooking({ ...booking });
    setEditOpen(true);
  };

  const closeEdit = () => {
    setEditOpen(false);
    setSelectedBooking(null);
  };

  // ============================
  // DELETE
  // ============================

  const openDelete = (booking: Booking) => {
    setSelectedBooking(booking);
    setDeleteOpen(true);
  };

  const closeDelete = () => {
    setDeleteOpen(false);
    setSelectedBooking(null);
  };

  // ============================
  // SAVE
  // ============================

  const handleSave = async (updatedBooking: Booking) => {
    try {
      setLoadingId(updatedBooking.id);

      await updateBooking(updatedBooking);

      closeEdit();
      router.refresh();
    } catch (error) {
      console.error("Failed to update booking:", error);
    } finally {
      setLoadingId(null);
    }
  };

  // ============================
  // DELETE
  // ============================

  const handleDelete = async () => {
    if (!selectedBooking) return;

    try {
      setLoadingId(selectedBooking.id);

      await deleteBooking(selectedBooking.id);

      closeDelete();
      router.refresh();
    } catch (error) {
      console.error("Failed to delete booking:", error);
    } finally {
      setLoadingId(null);
    }
  };

  // ============================
  // CONFIRM
  // ============================

  const handleConfirm = async (booking: Booking) => {
    if (booking.booking_status === "confirmed") return;
    if (booking.booking_status === "cancelled") return;

    try {
      setLoadingId(booking.id);

      await confirmBooking(booking.id);

      router.refresh();
    } catch (error) {
      console.error("Failed to confirm booking:", error);
    } finally {
      setLoadingId(null);
    }
  };

  // ============================
  // CANCEL
  // ============================

  const handleCancel = async (booking: Booking) => {
    if (booking.booking_status === "cancelled") return;

    try {
      setLoadingId(booking.id);

      await cancelBooking(booking.id);

      router.refresh();
    } catch (error) {
      console.error("Failed to cancel booking:", error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        {/* Mobile horizontal scroll */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-300">
            <thead className="bg-[#081B29] text-white">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Reference
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Customer
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Destination
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Travel Date
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Guests
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Amount
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Payment
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold">
                  Status
                </th>

                <th className="px-6 py-5 text-center text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-6 py-24 text-center">
                    <div className="mx-auto max-w-md">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                        <CalendarIcon />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-[#081B29]">
                        No bookings yet
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Customer reservations will appear here automatically
                        once the first booking is completed.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => {
                  const isLoading = loadingId === booking.id;

                  const isConfirmed = booking.booking_status === "confirmed";

                  const isCancelled = booking.booking_status === "cancelled";

                  return (
                    <tr
                      key={booking.id}
                      className="border-b border-gray-100 transition hover:bg-[#F8FBFC]"
                    >
                      {/* Reference */}
                      <td className="px-6 py-5">
                        <span className="font-bold text-[#081B29]">
                          {booking.booking_reference}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="px-6 py-5">
                        <div className="font-semibold text-[#081B29]">
                          {booking.full_name}
                        </div>
                      </td>

                      {/* Destination */}
                      <td className="px-6 py-5">
                        <span className="text-gray-700">
                          {booking.tour_slug}
                        </span>
                      </td>

                      {/* Travel Date */}
                      <td className="px-6 py-5">
                        <span className="text-gray-700">
                          {booking.arrival_date}
                        </span>
                      </td>

                      {/* Guests */}
                      <td className="px-6 py-5">
                        <span className="font-medium text-gray-700">
                          {booking.adults + booking.children}
                        </span>
                      </td>

                      {/* Amount */}
                      <td className="px-6 py-5">
                        <span className="font-bold text-[#081B29]">
                          ${booking.total_price.toLocaleString()}
                        </span>
                      </td>

                      {/* Payment */}
                      <td className="px-6 py-5">
                        <PaymentBadge status={booking.payment_status} />
                      </td>

                      {/* Booking status */}
                      <td className="px-6 py-5">
                        <BookingStatusBadge status={booking.booking_status} />
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          {/* View */}
                          <ActionButton
                            label="View booking"
                            onClick={() => openDetails(booking)}
                            disabled={isLoading}
                            className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white"
                          >
                            <Eye size={17} />
                          </ActionButton>

                          {/* Edit */}
                          <ActionButton
                            label="Edit booking"
                            onClick={() => openEdit(booking)}
                            disabled={isLoading}
                            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                          >
                            <Pencil size={17} />
                          </ActionButton>

                          {/* Confirm */}
                          <ActionButton
                            label={
                              isConfirmed
                                ? "Already confirmed"
                                : "Confirm booking"
                            }
                            onClick={() => handleConfirm(booking)}
                            disabled={isLoading || isConfirmed || isCancelled}
                            className="bg-green-50 text-green-600 hover:bg-green-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <CheckCircle2 size={17} />
                          </ActionButton>

                          {/* Cancel */}
                          <ActionButton
                            label={
                              isCancelled
                                ? "Already cancelled"
                                : "Cancel booking"
                            }
                            onClick={() => handleCancel(booking)}
                            disabled={isLoading || isCancelled}
                            className="bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <XCircle size={17} />
                          </ActionButton>

                          {/* Delete */}
                          <ActionButton
                            label="Delete booking"
                            onClick={() => openDelete(booking)}
                            disabled={isLoading}
                            className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
                          >
                            <Trash2 size={17} />
                          </ActionButton>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details */}
      <BookingDetailsModal
        booking={selectedBooking}
        open={detailsOpen}
        onClose={closeDetails}
      />

      {/* Edit */}
      <EditBookingModal
        key={selectedBooking?.id}
        booking={selectedBooking}
        setBooking={setSelectedBooking}
        open={editOpen}
        onClose={closeEdit}
        onSave={handleSave}
      />

      {/* Delete */}
      <DeleteConfirmModal
        open={deleteOpen}
        title="Delete Booking"
        description="This booking will be permanently deleted. This action cannot be undone."
        confirmText="Delete Booking"
        confirmColor="bg-red-600"
        onClose={closeDelete}
        onConfirm={handleDelete}
      />
    </>
  );
}

/* =========================================
   ACTION BUTTON
========================================= */

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

function ActionButton({
  label,
  onClick,
  disabled,
  className = "",
  children,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:scale-105 disabled:hover:scale-100 ${className}`}
    >
      {children}
    </button>
  );
}
/* =========================================
   PAYMENT BADGE
========================================= */

function PaymentBadge({ status }: { status: Booking["payment_status"] }) {
  const styles: Record<string, string> = {
    paid: "bg-green-50 text-green-700 ring-green-200",
    deposit: "bg-blue-50 text-blue-700 ring-blue-200",
    pending: "bg-amber-50 text-amber-700 ring-amber-200",
    unpaid: "bg-red-50 text-red-700 ring-red-200",
    partial: "bg-orange-50 text-orange-700 ring-orange-200",
    refunded: "bg-purple-50 text-purple-700 ring-purple-200",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold capitalize ring-1 ${
        styles[status] ?? "bg-gray-50 text-gray-700 ring-gray-200"
      }`}
    >
      {status}
    </span>
  );
}
/* =========================================
   BOOKING STATUS BADGE
========================================= */

function BookingStatusBadge({ status }: { status: Booking["booking_status"] }) {
  const styles: Record<string, string> = {
    confirmed: "bg-green-50 text-green-700 ring-green-200",
    cancelled: "bg-red-50 text-red-700 ring-red-200",
    pending: "bg-amber-50 text-amber-700 ring-amber-200",
    completed: "bg-blue-50 text-blue-700 ring-blue-200",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold capitalize ring-1 ${
        styles[status] ?? "bg-gray-50 text-gray-700 ring-gray-200"
      }`}
    >
      {status}
    </span>
  );
}
/* =========================================
   EMPTY STATE ICON
========================================= */

function CalendarIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-gray-500"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
