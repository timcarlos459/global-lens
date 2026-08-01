"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Edit,
  Eye,
  MessageSquare,
  Star,
  Trash2,
  XCircle,
} from "lucide-react";

import {
  deleteReview,
  updateReviewFeatured,
  updateReviewStatus,
} from "@/actions/adminReviews";

import type { Review } from "@/types/adminReview";

interface Props {
  items: Review[];
}

type ReviewFilter = "All" | "Pending" | "Published" | "Rejected";

export default function ReviewManager({ items: initialItems }: Props) {
  const [items, setItems] = useState<Review[]>(initialItems);

  const [filter, setFilter] = useState<ReviewFilter>("All");

  const [search, setSearch] = useState("");

  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const [loadingId, setLoadingId] = useState<number | null>(null);

  /* =========================================
     FILTER REVIEWS
  ========================================= */

  const filteredReviews = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return items.filter((review) => {
      const matchesStatus = filter === "All" || review.status === filter;

      const matchesSearch =
        !searchTerm ||
        review.name.toLowerCase().includes(searchTerm) ||
        review.country.toLowerCase().includes(searchTerm) ||
        review.review.toLowerCase().includes(searchTerm) ||
        review.destination?.toLowerCase().includes(searchTerm);

      return matchesStatus && matchesSearch;
    });
  }, [items, filter, search]);

  /* =========================================
     STATISTICS
  ========================================= */

  const totalReviews = items.length;

  const publishedReviews = items.filter(
    (review) => review.status === "Published",
  ).length;

  const pendingReviews = items.filter(
    (review) => review.status === "Pending",
  ).length;

  const fiveStarReviews = items.filter((review) => review.rating === 5).length;

  const averageRating =
    totalReviews === 0
      ? 0
      : items.reduce((total, review) => total + review.rating, 0) /
        totalReviews;

  /* =========================================
     UPDATE STATUS
  ========================================= */

  async function handleStatusChange(review: Review, status: Review["status"]) {
    try {
      setLoadingId(review.id);

      await updateReviewStatus(review.id, status);

      setItems((current) =>
        current.map((item) =>
          item.id === review.id
            ? {
                ...item,
                status,
              }
            : item,
        ),
      );

      setSelectedReview((current) =>
        current?.id === review.id
          ? {
              ...current,
              status,
            }
          : current,
      );
    } catch (error) {
      console.error("Review status update error:", error);

      alert("Unable to update review status.");
    } finally {
      setLoadingId(null);
    }
  }

  /* =========================================
     FEATURE / UNFEATURE
  ========================================= */

  async function handleFeaturedChange(review: Review) {
    try {
      setLoadingId(review.id);

      const featured = !review.featured;

      await updateReviewFeatured(review.id, featured);

      setItems((current) =>
        current.map((item) =>
          item.id === review.id
            ? {
                ...item,
                featured,
              }
            : item,
        ),
      );

      setSelectedReview((current) =>
        current?.id === review.id
          ? {
              ...current,
              featured,
            }
          : current,
      );
    } catch (error) {
      console.error("Featured review update error:", error);

      alert("Unable to update featured status.");
    } finally {
      setLoadingId(null);
    }
  }

  /* =========================================
     DELETE REVIEW
  ========================================= */

  async function handleDelete(review: Review) {
    const confirmed = window.confirm(
      `Delete the review from ${review.name}? This action cannot be undone.`,
    );

    if (!confirmed) return;

    try {
      setLoadingId(review.id);

      await deleteReview(review.id);

      setItems((current) => current.filter((item) => item.id !== review.id));

      if (selectedReview?.id === review.id) {
        setSelectedReview(null);
      }
    } catch (error) {
      console.error("Delete review error:", error);

      alert("Unable to delete review.");
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="space-y-8">
      {/* =========================================
          STATISTICS
      ========================================= */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        <StatCard
          icon={<MessageSquare size={22} />}
          label="Total Reviews"
          value={totalReviews.toString()}
          iconClass="bg-[#64D98B]/10 text-[#64D98B]"
        />

        <StatCard
          icon={<CheckCircle2 size={22} />}
          label="Published"
          value={publishedReviews.toString()}
          iconClass="bg-green-100 text-green-600"
        />

        <StatCard
          icon={<XCircle size={22} />}
          label="Pending"
          value={pendingReviews.toString()}
          iconClass="bg-amber-100 text-amber-600"
        />

        <StatCard
          icon={<Star size={22} className="fill-current" />}
          label="Average Rating"
          value={averageRating.toFixed(1)}
          iconClass="bg-yellow-100 text-yellow-600"
        />

        <StatCard
          icon={<Star size={22} />}
          label="5-Star Reviews"
          value={fiveStarReviews.toString()}
          iconClass="bg-blue-100 text-blue-600"
        />
      </div>

      {/* =========================================
          SEARCH + FILTERS
      ========================================= */}

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* SEARCH */}

          <div className="w-full lg:max-w-md">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search reviews, customers or destinations..."
              className="w-full rounded-2xl border border-gray-200 px-5 py-3.5 text-sm outline-none transition focus:border-[#64D98B] focus:ring-2 focus:ring-[#64D98B]/20"
            />
          </div>

          {/* FILTER */}

          <div className="flex flex-wrap gap-2">
            {(
              ["All", "Pending", "Published", "Rejected"] as ReviewFilter[]
            ).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilter(status)}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  filter === status
                    ? "bg-[#081B29] text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          TABLE
      ========================================= */}

      <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-300">
            <thead className="bg-[#081B29] text-left text-sm text-white">
              <tr>
                <th className="px-6 py-5">Customer</th>
                <th className="px-6 py-5">Rating</th>
                <th className="px-6 py-5">Review</th>
                <th className="px-6 py-5">Destination</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Featured</th>
                <th className="px-6 py-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredReviews.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-20 text-center">
                    <MessageSquare
                      size={40}
                      className="mx-auto text-gray-300"
                    />

                    <p className="mt-4 font-bold text-gray-500">
                      No reviews found
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Try changing your search or filter.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredReviews.map((review) => {
                  const isLoading = loadingId === review.id;

                  return (
                    <tr key={review.id} className="transition hover:bg-gray-50">
                      {/* CUSTOMER */}

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          {review.image_url ? (
                            <Image
                              src={review.image_url}
                              alt={review.name}
                              width={48}
                              height={48}
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#64D98B]/10 font-bold text-[#64D98B]">
                              {review.name.charAt(0).toUpperCase()}
                            </div>
                          )}

                          <div>
                            <p className="font-bold text-[#081B29]">
                              {review.name}
                            </p>

                            <p className="text-sm text-gray-500">
                              {review.country}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* RATING */}

                      <td className="px-6 py-5">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              size={16}
                              className={
                                index < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>

                        <p className="mt-1 text-xs font-semibold text-gray-500">
                          {review.rating}/5
                        </p>
                      </td>

                      {/* REVIEW */}

                      <td className="max-w-sm px-6 py-5">
                        <p className="line-clamp-2 text-sm leading-6 text-gray-600">
                          {review.review}
                        </p>
                      </td>

                      {/* DESTINATION */}

                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-gray-700">
                          {review.destination || "-"}
                        </span>
                      </td>

                      {/* DATE */}

                      <td className="px-6 py-5">
                        <span className="text-sm text-gray-600">
                          {review.review_date
                            ? new Date(review.review_date).toLocaleDateString()
                            : "-"}
                        </span>
                      </td>

                      {/* STATUS */}

                      <td className="px-6 py-5">
                        <StatusBadge status={review.status} />
                      </td>

                      {/* FEATURED */}

                      <td className="px-6 py-5">
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => handleFeaturedChange(review)}
                          className={`rounded-xl px-3 py-2 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                            review.featured
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {review.featured ? "Featured" : "Normal"}
                        </button>
                      </td>

                      {/* ACTIONS */}

                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          <ActionButton
                            label="View review"
                            onClick={() => setSelectedReview(review)}
                            className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white"
                          >
                            <Eye size={17} />
                          </ActionButton>

                          <ActionButton
                            label="Edit review"
                            onClick={() => {
                              window.location.href = `/admin/reviews/${review.id}/edit`;
                            }}
                            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                          >
                            <Edit size={17} />
                          </ActionButton>

                          {review.status !== "Published" && (
                            <ActionButton
                              label="Publish review"
                              disabled={isLoading}
                              onClick={() =>
                                handleStatusChange(review, "Published")
                              }
                              className="bg-green-50 text-green-600 hover:bg-green-600 hover:text-white"
                            >
                              <CheckCircle2 size={17} />
                            </ActionButton>
                          )}

                          {review.status !== "Rejected" && (
                            <ActionButton
                              label="Reject review"
                              disabled={isLoading}
                              onClick={() =>
                                handleStatusChange(review, "Rejected")
                              }
                              className="bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white"
                            >
                              <XCircle size={17} />
                            </ActionButton>
                          )}

                          <ActionButton
                            label="Delete review"
                            disabled={isLoading}
                            onClick={() => handleDelete(review)}
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
      </section>

      {/* =========================================
          VIEW REVIEW MODAL
      ========================================= */}

      {selectedReview && (
        <ReviewDetailsModal
          review={selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </div>
  );
}

/* =========================================
   STAT CARD
========================================= */

function StatCard({
  icon,
  label,
  value,
  iconClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconClass: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}
      >
        {icon}
      </div>

      <p className="mt-5 text-sm font-semibold text-gray-500">{label}</p>

      <h2 className="mt-2 text-3xl font-black text-[#081B29]">{value}</h2>
    </div>
  );
}

/* =========================================
   STATUS BADGE
========================================= */

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Published: "bg-green-50 text-green-700 ring-green-200",
    Pending: "bg-amber-50 text-amber-700 ring-amber-200",
    Rejected: "bg-red-50 text-red-700 ring-red-200",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ring-1 ${
        styles[status] ?? "bg-gray-100 text-gray-600 ring-gray-200"
      }`}
    >
      {status}
    </span>
  );
}

/* =========================================
   ACTION BUTTON
========================================= */

function ActionButton({
  label,
  onClick,
  disabled,
  className = "",
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center rounded-xl transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

/* =========================================
   DETAILS MODAL
========================================= */

function ReviewDetailsModal({
  review,
  onClose,
}: {
  review: Review;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            {review.image_url ? (
              <Image
                src={review.image_url}
                alt={review.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#64D98B]/10 text-xl font-black text-[#64D98B]">
                {review.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <p className="text-sm font-bold uppercase tracking-[3px] text-[#64D98B]">
                Customer Review
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#081B29]">
                {review.name}
              </h2>

              <p className="text-sm text-gray-500">
                {review.country}
                {review.destination ? ` • ${review.destination}` : ""}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-4 py-2 font-bold text-gray-500 hover:bg-gray-100"
          >
            Close
          </button>
        </div>

        {/* RATING */}

        <div className="mt-8 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={22}
              className={
                index < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}

          <span className="ml-2 font-bold text-gray-600">
            {review.rating}/5
          </span>
        </div>

        {/* REVIEW */}

        <blockquote className="mt-6 rounded-2xl bg-[#F8FAFC] p-6 text-lg italic leading-8 text-gray-600">
          “{review.review}”
        </blockquote>

        {/* INFORMATION */}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <InfoBox label="Status" value={review.status} />

          <InfoBox label="Featured" value={review.featured ? "Yes" : "No"} />

          <InfoBox label="Destination" value={review.destination || "-"} />

          <InfoBox
            label="Review Date"
            value={
              review.review_date
                ? new Date(review.review_date).toLocaleDateString()
                : "-"
            }
          />
        </div>

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-2xl bg-[#081B29] py-4 font-bold text-white transition hover:bg-[#102B3C]"
        >
          Close Review
        </button>
      </div>
    </div>
  );
}

/* =========================================
   INFO BOX
========================================= */

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <p className="mt-1 font-bold text-[#081B29]">{value}</p>
    </div>
  );
}
