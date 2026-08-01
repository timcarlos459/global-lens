import { NextResponse } from "next/server";

import { getBookings } from "@/actions/adminBookings";
import { getCustomers } from "@/actions/adminCustomers";
import { getPayments } from "@/actions/adminPayments";

function escapeCsv(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  const text = String(value);

  // Escape commas, quotes and line breaks correctly for CSV
  if (
    text.includes(",") ||
    text.includes('"') ||
    text.includes("\n") ||
    text.includes("\r")
  ) {
    return `"${text.replace(/"/g, '""')}"`;
  }

  return text;
}

export async function GET() {
  try {
    const bookings = await getBookings();
    const customers = await getCustomers();
    const payments = await getPayments();

    let csv = "";

    // =====================================================
    // GLOBAL LENS TOURS REPORT
    // =====================================================

    csv += "GLOBAL LENS TOURS REPORT\n\n";

    // =====================================================
    // BOOKINGS
    // =====================================================

    csv += "BOOKINGS\n";

    csv +=
      "Reference,Customer,Tour,Arrival Date,Adults,Children,Total Price,Payment Status,Booking Status\n";

    bookings.forEach((booking) => {
      csv +=
        `${escapeCsv(booking.booking_reference)},` +
        `${escapeCsv(booking.full_name)},` +
        `${escapeCsv(booking.tour_slug)},` +
        `${escapeCsv(booking.arrival_date)},` +
        `${escapeCsv(booking.adults)},` +
        `${escapeCsv(booking.children)},` +
        `${escapeCsv(booking.total_price)},` +
        `${escapeCsv(booking.payment_status)},` +
        `${escapeCsv(booking.booking_status)}\n`;
    });

    csv += "\n\n";

    // =====================================================
    // CUSTOMERS
    // =====================================================

    csv += "CUSTOMERS\n";

    csv += "Name,Email,Phone,Country,City,Joined,Status,Bookings,Spent\n";

    customers.forEach((customer) => {
      csv +=
        `${escapeCsv(customer.full_name)},` +
        `${escapeCsv(customer.email)},` +
        `${escapeCsv(customer.phone)},` +
        `${escapeCsv(customer.country)},` +
        `${escapeCsv(customer.city)},` +
        `${escapeCsv(customer.joined_date)},` +
        `${escapeCsv(customer.status)},` +
        `${escapeCsv(customer.total_bookings)},` +
        `${escapeCsv(customer.total_spent)}\n`;
    });

    csv += "\n\n";

    // =====================================================
    // PAYMENTS
    // =====================================================

    csv += "PAYMENTS\n";

    csv +=
      "Reference,Booking,Customer,Amount,Method,Status,Transaction ID,Payment Date\n";

    payments.forEach((payment) => {
      csv +=
        `${escapeCsv(payment.payment_reference)},` +
        `${escapeCsv(payment.booking_reference)},` +
        `${escapeCsv(payment.customer_name)},` +
        `${escapeCsv(payment.amount)},` +
        `${escapeCsv(payment.payment_method)},` +
        `${escapeCsv(payment.payment_status)},` +
        `${escapeCsv(payment.transaction_id)},` +
        `${escapeCsv(payment.payment_date)}\n`;
    });

    // =====================================================
    // RESPONSE
    // =====================================================

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="Global-Lens-Report.csv"',
      },
    });
  } catch (error) {
    console.error("CSV report error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate CSV report.",
      },
      {
        status: 500,
      },
    );
  }
}
