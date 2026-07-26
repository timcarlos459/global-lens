"use server";

import { supabase } from "@/utils/supabase";
import type { Customer } from "@/types/adminCustomer";

// ===========================
// GET CUSTOMERS
// ===========================

export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("joined_date", {
      ascending: false,
    });

  if (error) throw error;

  return (data ?? []) as Customer[];
}

// ===========================
// UPDATE
// ===========================

export async function updateCustomer(customer: Customer) {
  const { error } = await supabase
    .from("customers")
    .update({
      full_name: customer.full_name,
      email: customer.email,
      phone: customer.phone,
      country: customer.country,
      city: customer.city,
      status: customer.status,
    })
    .eq("id", customer.id);

  if (error) throw error;

  return true;
}

// ===========================
// ACTIVATE
// ===========================

export async function activateCustomer(id: number) {
  const { error } = await supabase
    .from("customers")
    .update({
      status: "active",
    })
    .eq("id", id);

  if (error) throw error;

  return true;
}

// ===========================
// DEACTIVATE
// ===========================

export async function deactivateCustomer(id: number) {
  const { error } = await supabase
    .from("customers")
    .update({
      status: "inactive",
    })
    .eq("id", id);

  if (error) throw error;

  return true;
}

// ===========================
// DELETE
// ===========================

export async function deleteCustomer(id: number) {
  const { error } = await supabase.from("customers").delete().eq("id", id);

  if (error) throw error;

  return true;
}
