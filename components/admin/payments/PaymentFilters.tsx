"use client";

import { Search, CreditCard, CheckCircle2, RotateCcw } from "lucide-react";

interface PaymentFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  method: string;
  setMethod: (value: string) => void;

  onClear: () => void;

  resultCount: number;
  totalCount: number;
}

export default function PaymentFilters({
  search,
  setSearch,
  status,
  setStatus,
  method,
  setMethod,
  onClear,
  resultCount,
  totalCount,
}: PaymentFiltersProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-[#081B29]">Filter Payments</h2>

          <p className="mt-1 text-sm text-gray-500">
            Quickly search and filter payment records.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[#64D98B]/10 px-4 py-2 text-sm font-bold text-[#081B29]">
            {resultCount} of {totalCount}
          </span>

          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
          >
            <RotateCcw size={16} />
            Clear
          </button>
        </div>
      </div>

      {/* Filters */}

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Search */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#081B29]">
            <Search size={16} />
            Customer Search
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Customer, booking or reference..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            />
          </div>
        </div>

        {/* Status */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#081B29]">
            <CheckCircle2 size={16} />
            Payment Status
          </label>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
          >
            <option value="">All Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>

        {/* Method */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#081B29]">
            <CreditCard size={16} />
            Payment Method
          </label>

          <select
            value={method}
            onChange={(event) => setMethod(event.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#64D98B] focus:bg-white"
          >
            <option value="">All Methods</option>
            <option value="Mpesa">Mpesa</option>
            <option value="Card">Card</option>
            <option value="Paypal">Paypal</option>
            <option value="Bank">Bank Transfer</option>
          </select>
        </div>
      </div>
    </div>
  );
}
