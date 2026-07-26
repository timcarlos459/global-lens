"use client";

import type { Payment } from "@/types/adminPayment";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DollarSign, CreditCard, TrendingUp } from "lucide-react";

interface Props {
  payments: Payment[];
}

export default function RevenueAnalytics({ payments }: Props) {
  const paidPayments = payments.filter(
    (payment) => payment.payment_status === "Paid",
  );

  const totalRevenue = paidPayments.reduce(
    (sum, payment) => sum + payment.amount,
    0,
  );

  const averagePayment =
    paidPayments.length === 0 ? 0 : totalRevenue / paidPayments.length;

  const monthlyRevenue: Record<string, number> = {};

  paidPayments.forEach((payment) => {
    const month = new Date(payment.payment_date).toLocaleString("default", {
      month: "short",
    });

    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + payment.amount;
  });

  const data = Object.entries(monthlyRevenue).map(([month, revenue]) => ({
    month,
    revenue,
  }));

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-[#081B29]">
            Revenue Analytics
          </h2>

          <p className="mt-2 text-gray-500">
            Financial performance from completed payments.
          </p>
        </div>
      </div>

      {/* Summary */}

      <div className="mb-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl bg-[#F8FBFC] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>

              <h3 className="mt-2 text-3xl font-black text-[#081B29]">
                ${totalRevenue.toLocaleString()}
              </h3>
            </div>

            <div className="rounded-xl bg-green-100 p-3">
              <DollarSign className="text-green-700" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#F8FBFC] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Paid Transactions</p>

              <h3 className="mt-2 text-3xl font-black text-[#081B29]">
                {paidPayments.length}
              </h3>
            </div>

            <div className="rounded-xl bg-blue-100 p-3">
              <CreditCard className="text-blue-700" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#F8FBFC] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Payment</p>

              <h3 className="mt-2 text-3xl font-black text-[#081B29]">
                $
                {averagePayment.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </h3>
            </div>

            <div className="rounded-xl bg-emerald-100 p-3">
              <TrendingUp className="text-emerald-700" />
            </div>
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-700">
              No revenue available
            </h3>

            <p className="mt-2 text-gray-500">
              Revenue insights will appear after the first completed payment.
            </p>
          </div>
        </div>
      ) : (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#64D98B" stopOpacity={0.35} />

                  <stop offset="95%" stopColor="#64D98B" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="4 4" vertical={false} />

              <XAxis
                dataKey="month"
                tick={{ fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tickFormatter={(value) => `$${value}`}
                tick={{ fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                formatter={(value) => [
                  `$${Number(value).toLocaleString()}`,
                  "Revenue",
                ]}
                contentStyle={{
                  borderRadius: 16,
                  border: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                }}
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#64D98B"
                strokeWidth={4}
                fill="url(#revenueGradient)"
                activeDot={{
                  r: 6,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
