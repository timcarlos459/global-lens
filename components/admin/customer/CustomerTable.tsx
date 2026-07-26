"use client";

import { useState } from "react";
import type { Customer } from "@/types/adminCustomer";

import { Eye, Pencil, Trash2, UserCheck, UserX } from "lucide-react";

interface Props {
  customers: Customer[];
}

export default function CustomerTable({ customers }: Props) {
  const [loadingId] = useState<number | null>(null);

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
      <table className="w-full">
        <thead className="bg-[#081B29] text-white">
          <tr>
            <th className="px-6 py-5 text-left">Customer</th>

            <th className="px-6 py-5 text-left">Email</th>

            <th className="px-6 py-5 text-left">Phone</th>

            <th className="px-6 py-5 text-left">Country</th>

            <th className="px-6 py-5 text-left">Bookings</th>

            <th className="px-6 py-5 text-left">Total Spent</th>

            <th className="px-6 py-5 text-left">Joined</th>

            <th className="px-6 py-5 text-left">Status</th>

            <th className="px-6 py-5 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan={9} className="py-20 text-center text-gray-500">
                No customers found.
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b transition hover:bg-[#F8FBFC]"
              >
                {/* CUSTOMER */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#64D98B] text-lg font-bold text-[#081B29]">
                      {customer.full_name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#081B29]">
                        {customer.full_name}
                      </h3>

                      <p className="text-sm text-gray-500">#{customer.id}</p>
                    </div>
                  </div>
                </td>

                {/* EMAIL */}

                <td className="px-6 py-5">{customer.email}</td>

                {/* PHONE */}

                <td className="px-6 py-5">{customer.phone}</td>

                {/* COUNTRY */}

                <td className="px-6 py-5">{customer.country}</td>

                {/* BOOKINGS */}

                <td className="px-6 py-5 font-bold">
                  {customer.total_bookings}
                </td>

                {/* SPENT */}

                <td className="px-6 py-5 font-bold text-[#64D98B]">
                  ${customer.total_spent.toLocaleString()}
                </td>

                {/* JOINED */}

                <td className="px-6 py-5">{customer.joined_date}</td>

                {/* STATUS */}

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      customer.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>

                {/* ACTIONS */}

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    {/* VIEW */}

                    <button className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white">
                      <Eye size={18} />
                    </button>

                    {/* EDIT */}

                    <button className="rounded-xl bg-green-100 p-3 text-green-600 transition hover:bg-green-600 hover:text-white">
                      <Pencil size={18} />
                    </button>

                    {/* ACTIVE */}

                    {customer.status === "active" ? (
                      <button className="rounded-xl bg-orange-100 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white">
                        <UserX size={18} />
                      </button>
                    ) : (
                      <button className="rounded-xl bg-[#64D98B]/20 p-3 text-[#64D98B] transition hover:bg-[#64D98B] hover:text-white">
                        <UserCheck size={18} />
                      </button>
                    )}

                    {/* DELETE */}

                    <button
                      disabled={loadingId === customer.id}
                      className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
