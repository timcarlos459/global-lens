"use client";

import type { Payment } from "@/types/adminPayment";
import type { Customer } from "@/types/adminCustomer";

import { Globe2, TrendingUp, MapPin } from "lucide-react";

interface Props {
  payments: Payment[];
  customers: Customer[];
}

interface CountryRevenue {
  country: string;
  revenue: number;
  transactions: number;
}

export default function RevenueByCountry({ payments, customers }: Props) {
  /*
   * Build a customer lookup so payments can be connected
   * to the customer's country.
   */
  const customerCountryMap = new Map<number, string>();

  customers.forEach((customer) => {
    customerCountryMap.set(customer.id, customer.country || "Unknown");
  });

  /*
   * IMPORTANT:
   *
   * Your current Payment type does not contain customer_id.
   * Therefore this component first tries to match the payment
   * to a customer using the customer's name.
   *
   * This works with your current database structure without
   * requiring changes to your types.
   */
  const countryData: Record<string, CountryRevenue> = {};

  payments
    .filter((payment) => payment.payment_status === "Paid")
    .forEach((payment) => {
      const matchingCustomer = customers.find(
        (customer) =>
          customer.full_name.trim().toLowerCase() ===
          payment.customer_name.trim().toLowerCase(),
      );

      const country = matchingCustomer?.country?.trim() || "Unknown";

      if (!countryData[country]) {
        countryData[country] = {
          country,
          revenue: 0,
          transactions: 0,
        };
      }

      countryData[country].revenue += payment.amount;
      countryData[country].transactions += 1;
    });

  const data = Object.values(countryData)
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 8);

  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);

  const maxRevenue =
    data.length > 0 ? Math.max(...data.map((item) => item.revenue)) : 0;

  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <Globe2 size={21} />
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#081B29]">
                Revenue by Country
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Revenue distribution based on customer location.
              </p>
            </div>
          </div>
        </div>

        {totalRevenue > 0 && (
          <div className="rounded-2xl bg-[#F8FBFC] px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Recorded Revenue
            </p>

            <p className="mt-1 text-xl font-black text-[#081B29]">
              ${totalRevenue.toLocaleString("en-US")}
            </p>
          </div>
        )}
      </div>

      {/* Empty State */}
      {data.length === 0 ? (
        <div className="flex min-h-70 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-6">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm">
              <Globe2 size={25} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#081B29]">
              No country revenue yet
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Revenue by country will appear automatically after customers
              complete paid bookings.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {data.map((item, index) => {
            const percentage =
              totalRevenue > 0 ? (item.revenue / totalRevenue) * 100 : 0;

            const width =
              maxRevenue > 0 ? (item.revenue / maxRevenue) * 100 : 0;

            return (
              <div
                key={item.country}
                className="group rounded-2xl border border-gray-100 p-5 transition-all duration-200 hover:border-[#64D98B]/30 hover:bg-[#F8FBFC]"
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#081B29] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Country */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="shrink-0 text-[#64D98B]" />

                        <span className="truncate font-bold text-[#081B29]">
                          {item.country}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-gray-400">
                          {item.transactions}{" "}
                          {item.transactions === 1
                            ? "transaction"
                            : "transactions"}
                        </span>

                        <span className="font-black text-[#081B29]">
                          ${item.revenue.toLocaleString("en-US")}
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#64D98B] transition-all duration-700"
                          style={{
                            width: `${width}%`,
                          }}
                        />
                      </div>

                      <span className="w-12 text-right text-xs font-bold text-gray-500">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer Insight */}
      {data.length > 0 && (
        <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#081B29] p-5 text-white">
          <TrendingUp size={20} className="mt-0.5 shrink-0 text-[#64D98B]" />

          <div>
            <p className="font-bold">Country performance</p>

            <p className="mt-1 text-sm leading-6 text-gray-300">
              {data[0].country} currently contributes the highest recorded
              revenue from paid transactions.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
