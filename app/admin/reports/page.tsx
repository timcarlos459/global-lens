import DashboardOverview from "@/components/admin/reports/DashboardOverview";
import BookingAnalytics from "@/components/admin/reports/BookingAnalytics";
import RevenueAnalytics from "@/components/admin/reports/RevenueAnalytics";
import CustomerAnalytics from "@/components/admin/reports/CustomerAnalytics";
import ExportReports from "@/components/admin/reports/ExportReports";
import RecentTransactions from "@/components/admin/reports/RecentTransactions";
import RevenueByCountry from "@/components/admin/reports/RevenueByCountry";
import TopDestinations from "@/components/admin/reports/TopDestinations";

import { getBookings } from "@/actions/adminBookings";
import { getCustomers } from "@/actions/adminCustomers";
import { getPayments } from "@/actions/adminPayments";
import { getDestinations } from "@/actions/adminDestinations";

export default async function ReportsPage() {
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
    <div className="space-y-10">
      {/* =========================================
          HEADER
      ========================================= */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-[#081B29] md:text-5xl">
            Reports & Analytics
          </h1>

          <p className="mt-2 max-w-2xl text-gray-500">
            Monitor business performance, revenue, bookings, customers and
            destination performance from one place.
          </p>
        </div>

        <ExportReports />
      </div>

      {/* =========================================
          OVERVIEW
      ========================================= */}

      <section>
        <DashboardOverview
          totalRevenue={totalRevenue}
          bookings={bookings.length}
          customers={customers.length}
          destinations={destinations.length}
          transactions={payments.length}
          growth={0}
        />
      </section>

      {/* =========================================
          MAIN ANALYTICS
      ========================================= */}

      <section className="grid gap-8 xl:grid-cols-2">
        <RevenueAnalytics payments={payments} />

        <BookingAnalytics bookings={bookings} destinations={destinations} />
      </section>

      {/* =========================================
          CUSTOMER ANALYTICS
      ========================================= */}

      <CustomerAnalytics customers={customers} bookings={bookings} />

      {/* =========================================
          TRANSACTIONS + COUNTRY REVENUE
      ========================================= */}

      <section className="grid gap-8 xl:grid-cols-2">
        <RecentTransactions payments={payments} />

        <RevenueByCountry payments={payments} customers={customers} />
      </section>

      {/* =========================================
          TOP DESTINATIONS
      ========================================= */}

      <TopDestinations bookings={bookings} />
    </div>
  );
}
