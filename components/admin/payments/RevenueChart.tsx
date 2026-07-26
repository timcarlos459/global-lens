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

interface Props {
  payments: Payment[];
}

export default function RevenueChart({ payments }: Props) {
  const monthlyRevenue: Record<string, number> = {};

  payments
    .filter((p) => p.payment_status === "Paid")
    .forEach((payment) => {
      const month = new Date(payment.payment_date).toLocaleString("default", {
        month: "short",
      });

      monthlyRevenue[month] = (monthlyRevenue[month] || 0) + payment.amount;
    });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = months.map((month) => ({
    month,
    revenue: monthlyRevenue[month] ?? 0,
  }));

  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
      {/* Header */}

      <div className="flex items-center justify-between border-b px-8 py-6">
        <div>
          <h2 className="text-2xl font-black text-[#081B29]">
            Revenue Overview
          </h2>

          <p className="mt-2 text-gray-500">
            Monthly payment revenue for the current year
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">Total Revenue</p>

          <h3 className="text-3xl font-black text-[#64D98B]">
            ${totalRevenue.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Chart */}

      <div className="h-105 px-6 py-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64D98B" stopOpacity={0.35} />

                <stop offset="95%" stopColor="#64D98B" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F0F0F0"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#6B7280",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#6B7280",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "none",
                boxShadow: "0 15px 40px rgba(0,0,0,.12)",
              }}
              formatter={(value) => [
                `$${Number(value ?? 0).toLocaleString()}`,
                "Revenue",
              ]}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#64D98B"
              strokeWidth={4}
              fill="url(#colorRevenue)"
              dot={{
                r: 5,
                fill: "#64D98B",
                strokeWidth: 2,
                stroke: "#fff",
              }}
              activeDot={{
                r: 7,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
