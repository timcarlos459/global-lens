"use server";

import { supabase } from "@/utils/supabase";

import type {
  GalleryCategory,
  GalleryItem,
  GalleryStatus,
} from "@/types/adminGallery";

// =====================================================
// GET ALL GALLERY ITEMS
// =====================================================

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("❌ GET GALLERY ERROR:", error);
    throw new Error(error.message);
  }

  console.log("=================================");
  console.log("✅ GALLERY DATA FROM SUPABASE:");
  console.log(data);
  console.log("✅ GALLERY COUNT:", data?.length ?? 0);
  console.log("=================================");

  return (data ?? []) as GalleryItem[];
}

// =====================================================
// GET SINGLE GALLERY ITEM
// =====================================================

export async function getGalleryItem(id: string): Promise<GalleryItem | null> {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }

    console.error("Get gallery item error:", error);
    throw new Error(error.message);
  }

  return data as GalleryItem;
}

// =====================================================
// CREATE GALLERY ITEM
// =====================================================

export async function createGalleryItem(input: {
  title: string;
  image_url: string;
  category: GalleryCategory;
  destination?: string | null;
  description?: string | null;
  status?: GalleryStatus;
  featured?: boolean;
}) {
  const { data, error } = await supabase
    .from("gallery")
    .insert({
      title: input.title.trim(),
      image_url: input.image_url.trim(),
      category: input.category,
      destination: input.destination?.trim() || null,
      description: input.description?.trim() || null,
      status: input.status ?? "Draft",
      featured: input.featured ?? false,
    })
    .select()
    .single();

  if (error) {
    console.error("Create gallery item error:", error);
    throw new Error(error.message);
  }

  return data as GalleryItem;
}

// =====================================================
// UPDATE GALLERY ITEM
// =====================================================

export async function updateGalleryItem(input: {
  id: string;
  title: string;
  image_url: string;
  category: GalleryCategory;
  destination?: string | null;
  description?: string | null;
  status: GalleryStatus;
  featured: boolean;
}) {
  const { data, error } = await supabase
    .from("gallery")
    .update({
      title: input.title.trim(),
      image_url: input.image_url.trim(),
      category: input.category,
      destination: input.destination?.trim() || null,
      description: input.description?.trim() || null,
      status: input.status,
      featured: input.featured,
    })
    .eq("id", input.id)
    .select()
    .single();

  if (error) {
    console.error("Update gallery item error:", error);
    throw new Error(error.message);
  }

  return data as GalleryItem;
}

// =====================================================
// DELETE
// =====================================================

export async function deleteGalleryItem(id: string) {
  const { error } = await supabase.from("gallery").delete().eq("id", id);

  if (error) {
    console.error("Delete gallery item error:", error);
    throw new Error(error.message);
  }

  return true;
}

// =====================================================
// UPDATE STATUS
// =====================================================

export async function toggleGalleryStatus(id: string, status: GalleryStatus) {
  const { error } = await supabase
    .from("gallery")
    .update({
      status,
    })
    .eq("id", id);

  if (error) {
    console.error("Gallery status update error:", error);
    throw new Error(error.message);
  }

  return true;
}

// =====================================================
// UPDATE FEATURED
// =====================================================

export async function toggleGalleryFeatured(id: string, featured: boolean) {
  const { error } = await supabase
    .from("gallery")
    .update({
      featured,
    })
    .eq("id", id);

  if (error) {
    console.error("Gallery featured update error:", error);
    throw new Error(error.message);
  }

  return true;
}
