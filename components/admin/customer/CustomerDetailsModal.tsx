"use client";

import { X, Mail, Phone, MapPin, Calendar, Wallet, Plane } from "lucide-react";
import type { Customer } from "@/types/adminCustomer";

interface Props {
  customer: Customer | null;
  open: boolean;
  onClose: () => void;
}

export default function CustomerDetailsModal({
  customer,
  open,
  onClose,
}: Props) {
  if (!open || !customer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#64D98B] text-3xl font-black text-[#081B29]">
              {customer.full_name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-3xl font-black text-[#081B29]">
                {customer.full_name}
              </h2>

              <p className="text-gray-500">Customer #{customer.id}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="grid gap-6 p-8 md:grid-cols-2">
          <InfoCard
            icon={<Mail size={20} />}
            label="Email"
            value={customer.email}
          />

          <InfoCard
            icon={<Phone size={20} />}
            label="Phone"
            value={customer.phone}
          />

          <InfoCard
            icon={<MapPin size={20} />}
            label="Country"
            value={customer.country}
          />

          <InfoCard
            icon={<MapPin size={20} />}
            label="City"
            value={customer.city}
          />

          <InfoCard
            icon={<Calendar size={20} />}
            label="Joined"
            value={customer.joined_date}
          />

          <InfoCard
            icon={<Plane size={20} />}
            label="Bookings"
            value={customer.total_bookings.toString()}
          />

          <InfoCard
            icon={<Wallet size={20} />}
            label="Total Spent"
            value={`$${customer.total_spent.toLocaleString()}`}
          />

          <div className="rounded-2xl border p-5">
            <p className="mb-2 text-sm text-gray-500">Status</p>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                customer.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {customer.status}
            </span>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end border-t px-8 py-6">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#081B29] px-8 py-3 font-bold text-white transition hover:bg-[#0b2a3d]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="mb-3 flex items-center gap-3 text-[#64D98B]">
        {icon}
        <span className="font-semibold">{label}</span>
      </div>

      <p className="font-bold text-[#081B29]">{value}</p>
    </div>
  );
}
