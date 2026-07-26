"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import type { Payment } from "@/types/adminPayment";

import { Eye, Pencil, Trash2, CheckCircle2, RotateCcw } from "lucide-react";

import PaymentDetailsModal from "./PaymentDetailsModal";
import EditPaymentModal from "./EditPaymentModal";
import DeletePaymentModal from "./DeletePaymentModal";

import {
  updatePayment,
  deletePayment,
  markAsPaid,
  refundPayment,
} from "@/actions/adminPayments";

interface Props {
  payments: Payment[];
}

export default function PaymentTable({ payments }: Props) {
  const router = useRouter();

  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // =====================
  // VIEW
  // =====================

  const openView = (payment: Payment) => {
    setSelectedPayment(payment);
    setDetailsOpen(true);
  };

  const closeView = () => {
    setSelectedPayment(null);
    setDetailsOpen(false);
  };

  // =====================
  // EDIT
  // =====================

  const openEdit = (payment: Payment) => {
    setSelectedPayment({ ...payment });
    setEditOpen(true);
  };

  const closeEdit = () => {
    setSelectedPayment(null);
    setEditOpen(false);
  };

  // =====================
  // DELETE
  // =====================

  const openDelete = (payment: Payment) => {
    setSelectedPayment(payment);
    setDeleteOpen(true);
  };

  const closeDelete = () => {
    setSelectedPayment(null);
    setDeleteOpen(false);
  };

  // =====================
  // SAVE
  // =====================

  const handleSave = async (payment: Payment) => {
    try {
      await updatePayment(payment);

      closeEdit();

      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  // =====================
  // DELETE
  // =====================

  const handleDelete = async () => {
    if (!selectedPayment) return;

    try {
      await deletePayment(selectedPayment.id);

      closeDelete();

      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  // =====================
  // MARK PAID
  // =====================

  const handlePaid = async (id: number) => {
    try {
      await markAsPaid(id);

      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  // =====================
  // REFUND
  // =====================

  const handleRefund = async (id: number) => {
    try {
      await refundPayment(id);

      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <table className="w-full">
          <thead className="bg-[#081B29] text-white">
            <tr>
              <th className="px-6 py-5 text-left">Reference</th>
              <th className="px-6 py-5 text-left">Booking</th>
              <th className="px-6 py-5 text-left">Customer</th>
              <th className="px-6 py-5 text-left">Method</th>
              <th className="px-6 py-5 text-left">Amount</th>
              <th className="px-6 py-5 text-left">Status</th>
              <th className="px-6 py-5 text-left">Date</th>
              <th className="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-20 text-center text-gray-500">
                  No payments found.
                </td>
              </tr>
            ) : (
              payments.map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-[#F8FBFC]">
                  <td className="px-6 py-6 font-bold">
                    {payment.payment_reference}
                  </td>

                  <td className="px-6 py-6">{payment.booking_reference}</td>

                  <td className="px-6 py-6">{payment.customer_name}</td>

                  <td className="px-6 py-6">{payment.payment_method}</td>

                  <td className="px-6 py-6 font-bold text-[#64D98B]">
                    ${payment.amount.toLocaleString()}
                  </td>

                  <td className="px-6 py-6">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        payment.payment_status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : payment.payment_status === "Refunded"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.payment_status}
                    </span>
                  </td>

                  <td className="px-6 py-6">{payment.payment_date}</td>

                  <td className="px-6 py-6">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => openView(payment)}
                        className="rounded-xl bg-blue-100 p-3 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => openEdit(payment)}
                        className="rounded-xl bg-green-100 p-3 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handlePaid(payment.id)}
                        className="rounded-xl bg-[#64D98B]/20 p-3 text-[#64D98B] hover:bg-[#64D98B] hover:text-white"
                      >
                        <CheckCircle2 size={18} />
                      </button>

                      <button
                        onClick={() => handleRefund(payment.id)}
                        className="rounded-xl bg-orange-100 p-3 text-orange-600 hover:bg-orange-600 hover:text-white"
                      >
                        <RotateCcw size={18} />
                      </button>

                      <button
                        onClick={() => openDelete(payment)}
                        className="rounded-xl bg-red-100 p-3 text-red-600 hover:bg-red-600 hover:text-white"
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

      <PaymentDetailsModal
        payment={selectedPayment}
        open={detailsOpen}
        onClose={closeView}
      />

      <EditPaymentModal
        payment={selectedPayment}
        setPayment={setSelectedPayment}
        open={editOpen}
        onClose={closeEdit}
        onSave={handleSave}
      />

      <DeletePaymentModal
        open={deleteOpen}
        onCancel={closeDelete}
        onConfirm={handleDelete}
      />
    </>
  );
}
