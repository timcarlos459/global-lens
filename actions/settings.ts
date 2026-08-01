"use server";

import { createClient } from "@/utils/supabase/server";
import type { Settings } from "@/types/settings";

const defaultSettings: Settings = {
  id: 1,

  company_name: "",
  tagline: "",
  ceo: "",
  founded_year: "",
  description: "",

  address: "",
  city: "",
  country: "",

  phone: "",
  phone2: "",
  whatsapp: "",
  email: "",
  website: "",

  facebook: "",
  instagram: "",
  tiktok: "",
  linkedin: "",
  youtube: "",
  x: "",

  currency: "KES",

  booking_deposit: 0,
  min_booking_days: 1,
  max_guests: 1,

  instant_booking: false,
  manual_approval: true,

  logo_url: "",
  favicon_url: "",

  meta_title: "",
  meta_description: "",
  keywords: "",

  google_analytics: "",
  facebook_pixel: "",

  created_at: "",
  updated_at: "",
};

export async function getSettings(): Promise<Settings> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .eq("id", 1)
    .maybeSingle();

  if (error) {
    console.error(error);
    return defaultSettings;
  }

  return data ?? defaultSettings;
}

export async function updateSettings(
  values: Partial<Settings>,
): Promise<{ success: boolean; message: string }> {
  const supabase = await createClient();

  const { error } = await supabase.from("settings").update(values).eq("id", 1);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Settings updated successfully.",
  };
}
