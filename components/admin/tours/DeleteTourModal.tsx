"use client";

import { AlertTriangle, X } from "lucide-react";

interface Props {
  open: boolean;
  tourTitle?: string;
  deleting?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteTourModal({
  open,
  tourTitle,
  deleting = false,
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
        <div className="flex items-start justify-between">
          <div className="rounded-2xl bg-red-100 p-4 text-red-600">
            <AlertTriangle size={24} />
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <h2 className="mt-5 text-2xl font-black text-[#081B29]">
          Delete Tour?
        </h2>

        <p className="mt-3 leading-6 text-gray-500">
          Are you sure you want to permanently delete{" "}
          <span className="font-bold text-gray-700">
            {tourTitle || "this tour"}
          </span>
          ? This action cannot be undone.
        </p>

        <div className="mt-7 flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={deleting}
            className="flex-1 rounded-2xl border border-gray-200 px-5 py-3 font-bold text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={deleting}
            className="flex-1 rounded-2xl bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700 disabled:opacity-50"
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
