"use server";

import { createClient } from "@/utils/supabase/server";

export interface AnalyticsData {
  totalRevenue: number;
  totalBookings: number;
  totalCustomers: number;
  totalDestinations: number;

  monthlyRevenue: {
    month: string;
    revenue: number;
  }[];

  bookingStatus: {
    status: string;
    count: number;
  }[];

  destinationPerformance: {
    destination: string;
    bookings: number;
    revenue: number;
  }[];
}

export async function getAnalytics(): Promise<AnalyticsData> {
  const supabase = await createClient();

  const [bookingsResult, customersResult, destinationsResult, paymentsResult] =
    await Promise.all([
      // IMPORTANT:
      // bookings has tour_slug, NOT destination
      supabase
        .from("bookings")
        .select("id, tour_slug, booking_status, total_price, created_at"),

      supabase.from("customers").select("id"),

      supabase.from("destinations").select("id, name, slug"),

      supabase
        .from("payments")
        .select("id, amount, payment_status, payment_date"),
    ]);

  // =========================================
  // ERROR CHECKING
  // =========================================

  if (bookingsResult.error) {
    console.error("Analytics bookings error:", bookingsResult.error);
    throw new Error(bookingsResult.error.message);
  }

  if (customersResult.error) {
    console.error("Analytics customers error:", customersResult.error);
    throw new Error(customersResult.error.message);
  }

  if (destinationsResult.error) {
    console.error("Analytics destinations error:", destinationsResult.error);
    throw new Error(destinationsResult.error.message);
  }

  if (paymentsResult.error) {
    console.error("Analytics payments error:", paymentsResult.error);
    throw new Error(paymentsResult.error.message);
  }

  // =========================================
  // DATA
  // =========================================

  const bookings = bookingsResult.data ?? [];
  const customers = customersResult.data ?? [];
  const destinations = destinationsResult.data ?? [];
  const payments = paymentsResult.data ?? [];

  // =========================================
  // REVENUE
  // =========================================

  const completedPayments = payments.filter((payment) => {
    const status = String(payment.payment_status ?? "").toLowerCase();

    return status === "paid" || status === "completed";
  });

  const totalRevenue = completedPayments.reduce(
    (total, payment) => total + Number(payment.amount ?? 0),
    0,
  );

  // =========================================
  // BOOKING STATUS
  // =========================================

  const statusMap: Record<string, number> = {};

  bookings.forEach((booking) => {
    const status = booking.booking_status || "unknown";

    statusMap[status] = (statusMap[status] ?? 0) + 1;
  });

  const bookingStatus = Object.entries(statusMap).map(([status, count]) => ({
    status,
    count,
  }));

  // =========================================
  // MONTHLY REVENUE
  // =========================================

  const revenueMap: Record<string, number> = {};

  completedPayments.forEach((payment) => {
    if (!payment.payment_date) return;

    const date = new Date(payment.payment_date);

    const month = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });

    revenueMap[month] = (revenueMap[month] ?? 0) + Number(payment.amount ?? 0);
  });

  const monthlyRevenue = Object.entries(revenueMap).map(([month, revenue]) => ({
    month,
    revenue,
  }));

  // =========================================
  // DESTINATION PERFORMANCE
  // =========================================
  //
  // bookings.tour_slug is matched against
  // destinations.slug.
  //

  const destinationMap: Record<
    string,
    {
      bookings: number;
      revenue: number;
    }
  > = {};

  bookings.forEach((booking) => {
    const slug = booking.tour_slug;

    const destination = destinations.find((item) => item.slug === slug);

    const destinationName = destination?.name || slug || "Unknown";

    if (!destinationMap[destinationName]) {
      destinationMap[destinationName] = {
        bookings: 0,
        revenue: 0,
      };
    }

    destinationMap[destinationName].bookings += 1;

    destinationMap[destinationName].revenue += Number(booking.total_price ?? 0);
  });

  const destinationPerformance = Object.entries(destinationMap).map(
    ([destination, data]) => ({
      destination,
      bookings: data.bookings,
      revenue: data.revenue,
    }),
  );

  // =========================================
  // RETURN COMPLETE OBJECT
  // =========================================

  return {
    totalRevenue,

    totalBookings: bookings.length,

    totalCustomers: customers.length,

    totalDestinations: destinations.length,

    monthlyRevenue,

    bookingStatus,

    destinationPerformance,
  };
}
