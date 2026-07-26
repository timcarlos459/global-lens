import { Plus } from "lucide-react";
import Link from "next/link";

import { getPayments } from "@/actions/adminPayments";

import PaymentStats from "@/components/admin/payments/PaymentStats";
import PaymentManager from "@/components/admin/payments/PaymentManager";
import RevenueChart from "@/components/admin/payments/RevenueChart";

export default async function PaymentsPage() {
  const payments = await getPayments();

  const totalRevenue = payments
    .filter((payment) => payment.payment_status === "Paid")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const paidCount = payments.filter(
    (payment) => payment.payment_status === "Paid",
  ).length;

  const pendingCount = payments.filter(
    (payment) => payment.payment_status === "Pending",
  ).length;

  const refundedCount = payments.filter(
    (payment) => payment.payment_status === "Refunded",
  ).length;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-black text-[#081B29]">Payments</h1>

          <p className="mt-2 text-gray-500">
            Monitor every payment made on Global Lens Tours.
          </p>
        </div>

        <Link
          href="/admin/payments/new"
          className="flex w-fit items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] transition hover:scale-105"
        >
          <Plus size={20} />
          Add Payment
        </Link>
      </div>

      {/* Statistics */}

      <PaymentStats
        totalRevenue={totalRevenue}
        paid={paidCount}
        pending={pendingCount}
        refunded={refundedCount}
      />

      {/* Filters + Table */}

      <PaymentManager payments={payments} />

      {/* Revenue Chart */}

      <RevenueChart payments={payments} />
    </div>
  );
}
