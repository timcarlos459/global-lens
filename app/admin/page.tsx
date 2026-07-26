import DashboardStats from "@/components/admin/DashboardStats";
import RevenueChart from "@/components/admin/RevenueChart";
import QuickActions from "@/components/admin/QuickActions";
import RecentBookings from "@/components/admin/RecentBookings";
import PopularDestinations from "@/components/admin/PopularDestinations";

import { getBookings } from "@/actions/adminBookings";
import { getCustomers } from "@/actions/adminCustomers";
import { getPayments } from "@/actions/adminPayments";
import { getDestinations } from "@/actions/adminDestinations";

export default async function AdminDashboard() {
  const bookings = await getBookings();
  const customers = await getCustomers();
  const payments = await getPayments();
  const destinations = await getDestinations();

  const totalRevenue = payments
    .filter((payment) => payment.payment_status === "Paid")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="space-y-10">
      {/* Header */}

      <div>
        <h1 className="text-5xl font-black text-[#081B29]">Dashboard</h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Statistics */}

      <DashboardStats
        totalRevenue={totalRevenue}
        bookings={bookings.length}
        customers={customers.length}
        destinations={destinations.length}
      />

      {/* Quick Actions */}

      <QuickActions />

      {/* Revenue */}

      <RevenueChart payments={payments} />

      {/* Recent Bookings */}

      <RecentBookings bookings={bookings} />

      {/* Popular Destinations */}

      <PopularDestinations bookings={bookings} destinations={destinations} />
    </div>
  );
}
