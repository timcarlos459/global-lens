"use client";

import Link from "next/link";
import {
  PlusCircle,
  MapPinned,
  Plane,
  CreditCard,
  Users,
  ImageIcon,
  BarChart3,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const actions = [
  {
    title: "Create Tour",
    description: "Add a new luxury travel package",
    href: "/admin/tours/new",
    icon: Plane,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Add Destination",
    description: "Create a new destination page",
    href: "/admin/destinations/new",
    icon: MapPinned,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Bookings",
    description: "View recent reservations",
    href: "/admin/bookings",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Payments",
    description: "Manage customer payments",
    href: "/admin/payments",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Customers",
    description: "Manage travelers",
    href: "/admin/customers",
    icon: Users,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Gallery",
    description: "Upload destination photos",
    href: "/admin/gallery",
    icon: ImageIcon,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Reports",
    description: "View travel analytics",
    href: "/admin/analytics",
    icon: BarChart3,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "New Booking",
    description: "Create a booking manually",
    href: "/admin/bookings/new",
    icon: PlusCircle,
    color: "bg-red-100 text-red-600",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-4xl border border-gray-200 bg-white p-8 shadow-xl">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#081B29]">Quick Actions</h2>

        <p className="mt-2 text-gray-500">
          Everything you need, one click away.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-[26px] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#64D98B] hover:shadow-2xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-[#081B29]">
                {action.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {action.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-bold text-[#64D98B]">
                Open
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
