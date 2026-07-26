"use client";

import { X } from "lucide-react";
import type { Customer } from "@/types/adminCustomer";

interface Props {
  customer: Customer | null;
  setCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
  open: boolean;
  onClose: () => void;
  onSave: (customer: Customer) => void | Promise<void>;
}

export default function EditCustomerModal({
  customer,
  setCustomer,
  open,
  onClose,
  onSave,
}: Props) {
  if (!open || !customer) return null;

  const updateField = <K extends keyof Customer>(
    field: K,
    value: Customer[K],
  ) => {
    setCustomer((prev) =>
      prev
        ? {
            ...prev,
            [field]: value,
          }
        : prev,
    );
  };

  const handleSave = async () => {
    if (!customer) return;

    await onSave(customer);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-black text-[#081B29]">
              Edit Customer
            </h2>

            <p className="mt-1 text-gray-500">Customer #{customer.id}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}

        <div className="grid gap-6 p-8 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold">Full Name</label>

            <input
              value={customer.full_name}
              onChange={(e) => updateField("full_name", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Email</label>

            <input
              value={customer.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Phone</label>

            <input
              value={customer.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Country</label>

            <input
              value={customer.country}
              onChange={(e) => updateField("country", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">City</label>

            <input
              value={customer.city}
              onChange={(e) => updateField("city", e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Status</label>

            <select
              value={customer.status}
              onChange={(e) =>
                updateField("status", e.target.value as Customer["status"])
              }
              className="w-full rounded-xl border p-3 outline-none focus:border-[#64D98B]"
            >
              <option value="active">Active</option>

              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t px-8 py-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-[#64D98B] px-8 py-3 font-bold text-[#081B29] transition hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
