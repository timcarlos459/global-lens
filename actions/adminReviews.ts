"use server";

import { createClient } from "@/utils/supabase/server";
import type { Review } from "@/types/adminReview";

/* =========================================
   GET ALL REVIEWS
========================================= */

export async function getReviews(): Promise<Review[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("getReviews error:", error);
    throw new Error(error.message);
  }

  return (data ?? []) as Review[];
}

/* =========================================
   GET ONE REVIEW
========================================= */

export async function getReview(id: number): Promise<Review | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("getReview error:", error);
    return null;
  }

  return data as Review;
}

/* =========================================
   UPDATE REVIEW
========================================= */

export async function updateReview(review: Review) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("reviews")
    .update({
      name: review.name,
      country: review.country,
      image_url: review.image_url,
      rating: review.rating,
      review: review.review,
      destination: review.destination,
      review_date: review.review_date,
      status: review.status,
      featured: review.featured,
      updated_at: new Date().toISOString(),
    })
    .eq("id", review.id);

  if (error) {
    console.error("updateReview error:", error);
    throw new Error(error.message);
  }

  return true;
}

/* =========================================
   UPDATE REVIEW STATUS
========================================= */

export async function updateReviewStatus(id: number, status: string) {
  const allowedStatuses = ["Pending", "Published", "Rejected"];

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid review status.");
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("reviews")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("updateReviewStatus error:", error);
    throw new Error(error.message);
  }

  return true;
}

/* =========================================
   FEATURE / UNFEATURE REVIEW
========================================= */

export async function updateReviewFeatured(id: number, featured: boolean) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("reviews")
    .update({
      featured,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("updateReviewFeatured error:", error);
    throw new Error(error.message);
  }

  return true;
}

/* =========================================
   DELETE REVIEW
========================================= */

export async function deleteReview(id: number) {
  const supabase = await createClient();

  const { error } = await supabase.from("reviews").delete().eq("id", id);

  if (error) {
    console.error("deleteReview error:", error);
    throw new Error(error.message);
  }

  return true;
}
