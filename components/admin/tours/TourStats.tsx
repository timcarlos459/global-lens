"use client";

import { BookOpen, CheckCircle2, Archive, CalendarDays } from "lucide-react";

interface Props {
  totalTours: number;
  publishedTours: number;
  draftTours: number;
  archivedTours: number;
  totalBookings: number;
}

export default function TourStats({
  totalTours,
  publishedTours,
  draftTours,
  archivedTours,
  totalBookings,
}: Props) {
  const stats = [
    {
      label: "Total Tours",
      value: totalTours,
      icon: BookOpen,
      iconClass: "bg-blue-100 text-blue-600",
      valueClass: "text-[#081B29]",
    },
    {
      label: "Published",
      value: publishedTours,
      icon: CheckCircle2,
      iconClass: "bg-green-100 text-green-600",
      valueClass: "text-[#64D98B]",
    },
    {
      label: "Drafts",
      value: draftTours,
      icon: CalendarDays,
      iconClass: "bg-yellow-100 text-yellow-600",
      valueClass: "text-[#081B29]",
    },
    {
      label: "Archived",
      value: archivedTours,
      icon: Archive,
      iconClass: "bg-gray-100 text-gray-600",
      valueClass: "text-[#081B29]",
    },
    {
      label: "Total Bookings",
      value: totalBookings,
      icon: BookOpen,
      iconClass: "bg-purple-100 text-purple-600",
      valueClass: "text-[#081B29]",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  {stat.label}
                </p>

                <h3 className={`mt-3 text-4xl font-black ${stat.valueClass}`}>
                  {Number(stat.value).toLocaleString()}
                </h3>
              </div>

              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${stat.iconClass}`}
              >
                <Icon size={26} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
