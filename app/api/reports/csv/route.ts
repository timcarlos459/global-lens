import { NextResponse } from "next/server";

import { getBookings } from "@/actions/adminBookings";
import { getCustomers } from "@/actions/adminCustomers";
import { getPayments } from "@/actions/adminPayments";

export async function GET() {
  const bookings = await getBookings();

  const customers = await getCustomers();

  const payments = await getPayments();

  let csv = "";

  csv += "GLOBAL LENS TOURS REPORT\n\n";

  csv += "BOOKINGS\n";

  csv +=
    "Reference,Customer,Destination,Arrival Date,Adults,Children,Total Price,Payment Status,Booking Status\n";

  bookings.forEach((booking) => {
    csv +=
      `${booking.booking_reference},` +
      `${booking.full_name},` +
      `${booking.destination},` +
      `${booking.arrival_date},` +
      `${booking.adults},` +
      `${booking.children},` +
      `${booking.total_price},` +
      `${booking.payment_status},` +
      `${booking.booking_status}\n`;
  });

  csv += "\n\n";

  csv += "CUSTOMERS\n";

  csv += "Name,Email,Phone,Country,City,Joined,Status,Bookings,Spent\n";

  customers.forEach((customer) => {
    csv +=
      `${customer.full_name},` +
      `${customer.email},` +
      `${customer.phone},` +
      `${customer.country},` +
      `${customer.city},` +
      `${customer.joined_date},` +
      `${customer.status},` +
      `${customer.total_bookings},` +
      `${customer.total_spent}\n`;
  });

  csv += "\n\n";

  csv += "PAYMENTS\n";

  csv +=
    "Reference,Booking,Customer,Amount,Method,Status,Transaction ID,Payment Date\n";

  payments.forEach((payment) => {
    csv +=
      `${payment.payment_reference},` +
      `${payment.booking_reference},` +
      `${payment.customer_name},` +
      `${payment.amount},` +
      `${payment.payment_method},` +
      `${payment.payment_status},` +
      `${payment.transaction_id},` +
      `${payment.payment_date}\n`;
  });

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",

      "Content-Disposition": 'attachment; filename="Global-Lens-Report.csv"',
    },
  });
}
