"use client";

interface DeleteConfirmModalProps {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  confirmColor?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmModal({
  open,
  title,
  message,
  confirmText = "Delete",
  confirmColor = "bg-red-600",
  onCancel,
  onConfirm,
}: DeleteConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        <div className="border-b px-8 py-6">
          <h2 className="text-2xl font-bold text-[#081B29]">{title}</h2>

          <p className="mt-3 text-gray-600">{message}</p>
        </div>

        <div className="flex justify-end gap-4 px-8 py-6">
          <button
            onClick={onCancel}
            className="rounded-xl border border-gray-300 px-6 py-3 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className={`rounded-xl px-6 py-3 text-white ${confirmColor}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
