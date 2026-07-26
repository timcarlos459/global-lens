"use client";

interface Props {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void | Promise<void>;
}

export default function DeletePaymentModal({
  open,
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="border-b px-8 py-6">
          <h2 className="text-2xl font-black text-[#081B29]">Delete Payment</h2>

          <p className="mt-3 text-gray-500">
            This payment will be permanently deleted. This action cannot be
            undone.
          </p>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 px-8 py-6">
          <button
            onClick={onCancel}
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Delete Payment
          </button>
        </div>
      </div>
    </div>
  );
}
