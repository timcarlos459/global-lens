"use client";

import { DollarSign, CheckCircle2, Clock3, RotateCcw } from "lucide-react";

interface Props {
  totalRevenue: number;
  paid: number;
  pending: number;
  refunded: number;
}

export default function PaymentStats({
  totalRevenue,
  paid,
  pending,
  refunded,
}: Props) {
  const cards = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      bg: "bg-green-100",
      text: "text-green-700",
    },
    {
      title: "Paid Payments",
      value: paid,
      icon: CheckCircle2,
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
    {
      title: "Pending Payments",
      value: pending,
      icon: Clock3,
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    },
    {
      title: "Refunded",
      value: refunded,
      icon: RotateCcw,
      bg: "bg-red-100",
      text: "text-red-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h3 className="mt-3 text-3xl font-black text-[#081B29]">
                  {card.value}
                </h3>
              </div>

              <div className={`rounded-2xl p-4 ${card.bg}`}>
                <Icon size={28} className={card.text} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
