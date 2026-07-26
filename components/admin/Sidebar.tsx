"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  CalendarCheck,
  Map,
  Plane,
  CreditCard,
  Users,
  BarChart3,
  Settings,
  ImageIcon,
  MessageSquare,
  LogOut,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Bookings",
    href: "/admin/bookings",
    icon: CalendarCheck,
  },
  {
    name: "Destinations",
    href: "/admin/destinations",
    icon: Map,
  },
  {
    name: "Tours",
    href: "/admin/tours",
    icon: Plane,
  },
  {
    name: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
    icon: ImageIcon,
  },
  {
    name: "Reviews",
    href: "/admin/reviews",
    icon: MessageSquare,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#081B29] text-white flex flex-col">
      <div className="border-b border-white/10 p-8">
        <h1 className="text-3xl font-black">Global Lens</h1>

        <p className="mt-2 text-sm text-[#64D98B]">Admin Dashboard</p>
      </div>

      <nav className="flex-1 p-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition
              ${
                active
                  ? "bg-[#64D98B] text-[#081B29] font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon size={22} />

              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-6">
        <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 hover:bg-red-500/20 transition">
          <LogOut size={22} />
          Logout
        </button>
      </div>
    </aside>
  );
}
