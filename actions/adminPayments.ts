"use server";

import { supabase } from "@/utils/supabase";
import type { Payment } from "@/types/adminPayment";

// ===============================
// GET ALL PAYMENTS
// ===============================

export async function getPayments(): Promise<Payment[]> {
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return (data ?? []) as Payment[];
}

// ===============================
// UPDATE PAYMENT
// ===============================

export async function updatePayment(payment: Payment) {
  const { error } = await supabase
    .from("payments")
    .update({
      customer_name: payment.customer_name,
      amount: payment.amount,
      payment_method: payment.payment_method,
      payment_status: payment.payment_status,
      transaction_id: payment.transaction_id,
      payment_date: payment.payment_date,
    })
    .eq("id", payment.id);

  if (error) throw error;

  return true;
}

// ===============================
// DELETE
// ===============================

export async function deletePayment(id: number) {
  const { error } = await supabase.from("payments").delete().eq("id", id);

  if (error) throw error;

  return true;
}

// ===============================
// MARK AS PAID
// ===============================

export async function markAsPaid(id: number) {
  const { error } = await supabase
    .from("payments")
    .update({
      payment_status: "Paid",
    })
    .eq("id", id);

  if (error) throw error;

  return true;
}

// ===============================
// REFUND
// ===============================

export async function refundPayment(id: number) {
  const { error } = await supabase
    .from("payments")
    .update({
      payment_status: "Refunded",
    })
    .eq("id", id);

  if (error) throw error;

  return true;
}
