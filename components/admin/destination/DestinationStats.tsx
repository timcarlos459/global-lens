"use client";

import type { Destination } from "@/types/adminDestination";
import { MapPinned, Star, Globe, BadgeDollarSign } from "lucide-react";

interface Props {
  destinations: Destination[];
}

export default function DestinationStats({ destinations }: Props) {
  const totalDestinations = destinations.length;

  const featured = destinations.filter((d) => d.featured).length;

  const countries = new Set(destinations.map((d) => d.country)).size;

  const averagePrice =
    totalDestinations === 0
      ? 0
      : Math.round(
          destinations.reduce((sum, d) => sum + d.price, 0) / totalDestinations,
        );

  const cards = [
    {
      title: "Total Destinations",
      value: totalDestinations,
      icon: MapPinned,
      color: "bg-blue-500",
    },
    {
      title: "Featured",
      value: featured,
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Countries",
      value: countries,
      icon: Globe,
      color: "bg-green-500",
    },
    {
      title: "Average Price",
      value: `$${averagePrice.toLocaleString()}`,
      icon: BadgeDollarSign,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h3 className="mt-2 text-3xl font-black text-[#081B29]">
                  {card.value}
                </h3>
              </div>

              <div className={`rounded-2xl p-4 ${card.color} text-white`}>
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
