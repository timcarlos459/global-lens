"use client";

import type { Payment } from "@/types/adminPayment";

import {
  ArrowDownLeft,
  CreditCard,
  Smartphone,
  Building2,
  WalletCards,
  Receipt,
} from "lucide-react";

interface Props {
  payments: Payment[];
}

function getPaymentIcon(method: Payment["payment_method"]) {
  switch (method) {
    case "Mpesa":
      return Smartphone;

    case "Card":
      return CreditCard;

    case "Paypal":
      return WalletCards;

    case "Bank":
      return Building2;

    default:
      return Receipt;
  }
}

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "—";
  }

  return parsedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function RecentTransactions({ payments }: Props) {
  const recentPayments = [...payments]
    .sort(
      (a, b) =>
        new Date(b.payment_date).getTime() - new Date(a.payment_date).getTime(),
    )
    .slice(0, 6);

  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      {/* Header */}
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <ArrowDownLeft size={21} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#081B29]">
                Recent Transactions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Latest payment activity across Global Lens Tours.
              </p>
            </div>
          </div>
        </div>

        {recentPayments.length > 0 && (
          <span className="w-fit rounded-full bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-600">
            {recentPayments.length} recent
          </span>
        )}
      </div>

      {/* Empty State */}
      {recentPayments.length === 0 ? (
        <div className="flex min-h-65 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm">
              <Receipt size={25} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#081B29]">
              No transactions yet
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Payment transactions will appear here automatically once customers
              complete bookings and payments.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
            <div className="grid grid-cols-[1.3fr_1.2fr_1fr_1fr_1fr] bg-[#F8FBFC] px-5 py-4 text-xs font-bold uppercase tracking-wide text-gray-500">
              <span>Customer</span>
              <span>Reference</span>
              <span>Method</span>
              <span>Date</span>
              <span className="text-right">Amount</span>
            </div>

            <div className="divide-y divide-gray-100">
              {recentPayments.map((payment) => {
                const Icon = getPaymentIcon(payment.payment_method);

                return (
                  <div
                    key={payment.id}
                    className="grid grid-cols-[1.3fr_1.2fr_1fr_1fr_1fr] items-center px-5 py-5 transition hover:bg-[#F8FBFC]"
                  >
                    {/* Customer */}
                    <div className="min-w-0">
                      <p className="truncate font-bold text-[#081B29]">
                        {payment.customer_name || "Unknown customer"}
                      </p>

                      <p className="mt-1 truncate text-xs text-gray-400">
                        {payment.transaction_id || "No transaction ID"}
                      </p>
                    </div>

                    {/* Reference */}
                    <div>
                      <span className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-600">
                        {payment.payment_reference || "—"}
                      </span>
                    </div>

                    {/* Method */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#64D98B]/10 text-[#64D98B]">
                        <Icon size={17} />
                      </div>

                      <span className="text-sm font-semibold text-gray-700">
                        {payment.payment_method}
                      </span>
                    </div>

                    {/* Date */}
                    <span className="text-sm text-gray-500">
                      {formatDate(payment.payment_date)}
                    </span>

                    {/* Amount */}
                    <div className="text-right">
                      <p className="font-black text-[#081B29]">
                        ${payment.amount.toLocaleString("en-US")}
                      </p>

                      <span
                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                          payment.payment_status === "Paid"
                            ? "bg-green-50 text-green-700"
                            : payment.payment_status === "Refunded"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {payment.payment_status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 md:hidden">
            {recentPayments.map((payment) => {
              const Icon = getPaymentIcon(payment.payment_method);

              return (
                <div
                  key={payment.id}
                  className="rounded-2xl border border-gray-200 p-4 transition hover:border-[#64D98B]/40 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#64D98B]/10 text-[#64D98B]">
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-bold text-[#081B29]">
                          {payment.customer_name || "Unknown customer"}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {payment.payment_reference || "No reference"}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-black text-[#081B29]">
                        ${payment.amount.toLocaleString("en-US")}
                      </p>

                      <span
                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                          payment.payment_status === "Paid"
                            ? "bg-green-50 text-green-700"
                            : payment.payment_status === "Refunded"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {payment.payment_status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                    <span>{payment.payment_method}</span>

                    <span>{formatDate(payment.payment_date)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
