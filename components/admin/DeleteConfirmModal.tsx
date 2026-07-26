"use client";

interface DeleteConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  confirmColor?: string;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
}

export default function DeleteConfirmModal({
  open,
  title,
  description,
  confirmText = "Delete",
  confirmColor = "bg-red-600",
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        <div className="border-b px-8 py-6">
          <h2 className="text-2xl font-black text-[#081B29]">{title}</h2>

          <p className="mt-3 text-gray-500">{description}</p>
        </div>

        <div className="flex justify-end gap-4 px-8 py-6">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className={`rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90 ${confirmColor}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
