"use server";

import { createClient } from "@/utils/supabase/server";

import type { Tour } from "@/types/adminTour";

export async function getTours(): Promise<Tour[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("getTours error:", error);
    throw new Error(error.message);
  }

  return (data ?? []) as Tour[];
}

export async function getTour(id: number): Promise<Tour | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("getTour error:", error);
    return null;
  }

  return data as Tour;
}

export async function createTour(
  tour: Omit<Tour, "id" | "created_at" | "updated_at">,
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tours")
    .insert(tour)
    .select()
    .single();

  if (error) {
    console.error("createTour error:", error);
    throw new Error(error.message);
  }

  return data as Tour;
}

export async function updateTour(tour: Tour) {
  const supabase = await createClient();

  const { id, ...updates } = tour;

  const { data, error } = await supabase
    .from("tours")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("updateTour error:", error);
    throw new Error(error.message);
  }

  return data as Tour;
}

export async function deleteTour(id: number) {
  const supabase = await createClient();

  const { error } = await supabase.from("tours").delete().eq("id", id);

  if (error) {
    console.error("deleteTour error:", error);
    throw new Error(error.message);
  }

  return { success: true };
}

export async function toggleTourStatus(id: number, status: Tour["status"]) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tours")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("toggleTourStatus error:", error);
    throw new Error(error.message);
  }

  return data as Tour;
}
