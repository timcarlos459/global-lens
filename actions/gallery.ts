"use server";

import { supabase } from "@/utils/supabase";

export interface PublicGalleryItem {
  id: string;
  title: string;
  image_url: string;
  category: string;
  destination: string | null;
  description: string | null;
  featured: boolean;
}

export async function getPublishedGallery(): Promise<PublicGalleryItem[]> {
  const { data, error } = await supabase
    .from("gallery")
    .select(
      "id, title, image_url, category, destination, description, featured",
    )
    .eq("status", "Published")
    .order("featured", {
      ascending: false,
    })
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Failed to load gallery:", error);
    return [];
  }

  return (data ?? []) as PublicGalleryItem[];
}
