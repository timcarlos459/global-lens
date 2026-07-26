import DashboardStats from "@/components/admin/DashboardStats";
import BookingManagement from "@/components/admin/BookingManagement";

import { getBookings } from "@/actions/adminBookings";
import { getCustomers } from "@/actions/adminCustomers";
import { getPayments } from "@/actions/adminPayments";
import { getDestinations } from "@/actions/adminDestinations";

export default async function BookingsPage() {
  const [bookings, customers, payments, destinations] = await Promise.all([
    getBookings(),
    getCustomers(),
    getPayments(),
    getDestinations(),
  ]);

  const totalRevenue = payments
    .filter((payment) => payment.payment_status === "Paid")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-5xl font-black tracking-tight text-[#081B29]">
          Bookings
        </h1>

        <p className="mt-2 text-gray-500">
          Manage customer reservations, travel dates, payments and booking
          status.
        </p>
      </div>

      {/* Overview */}

      <DashboardStats
        totalRevenue={totalRevenue}
        bookings={bookings.length}
        customers={customers.length}
        destinations={destinations.length}
      />

      <BookingManagement bookings={bookings} />
    </div>
  );
}
