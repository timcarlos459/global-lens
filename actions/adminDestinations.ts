"use server";

import { supabase } from "@/utils/supabase";
import type { Destination } from "@/types/adminDestination";

// =======================================
// GET ALL DESTINATIONS
// =======================================

export async function getDestinations(): Promise<Destination[]> {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return (data ?? []) as Destination[];
}

// =======================================
// GET SINGLE DESTINATION
// =======================================

export async function getDestination(id: number) {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data as Destination;
}

// =======================================
// CREATE DESTINATION
// =======================================

export async function createDestination(
  destination: Omit<Destination, "id" | "created_at">,
) {
  const { error } = await supabase.from("destinations").insert([
    {
      name: destination.name,
      slug: destination.slug,
      country: destination.country,
      city: destination.city,
      category: destination.category,
      duration: destination.duration,
      price: destination.price,
      rating: destination.rating,
      featured: destination.featured,
      description: destination.description,
      thumbnail: destination.thumbnail,
      gallery: destination.gallery,
    },
  ]);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return true;
}

// =======================================
// UPDATE DESTINATION
// =======================================

export async function updateDestination(destination: Destination) {
  const { error } = await supabase
    .from("destinations")
    .update({
      name: destination.name,
      slug: destination.slug,
      country: destination.country,
      city: destination.city,
      category: destination.category,
      duration: destination.duration,
      price: destination.price,
      rating: destination.rating,
      featured: destination.featured,
      description: destination.description,
      thumbnail: destination.thumbnail,
      gallery: destination.gallery,
    })
    .eq("id", destination.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return true;
}

// =======================================
// DELETE DESTINATION
// =======================================

export async function deleteDestination(id: number) {
  const { error } = await supabase.from("destinations").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return true;
}
