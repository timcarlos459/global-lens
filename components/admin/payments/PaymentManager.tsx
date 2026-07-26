"use client";

import { useMemo, useState } from "react";

import type { Payment } from "@/types/adminPayment";

import PaymentFilters from "./PaymentFilters";
import PaymentTable from "./PaymentTable";

interface Props {
  payments: Payment[];
}

export default function PaymentManager({ payments }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [method, setMethod] = useState("");

  const filteredPayments = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return payments.filter((payment) => {
      const matchesSearch =
        normalizedSearch === "" ||
        payment.customer_name?.toLowerCase().includes(normalizedSearch) ||
        payment.payment_reference?.toLowerCase().includes(normalizedSearch) ||
        payment.booking_reference?.toLowerCase().includes(normalizedSearch);

      const matchesStatus = status === "" || payment.payment_status === status;

      const matchesMethod = method === "" || payment.payment_method === method;

      return matchesSearch && matchesStatus && matchesMethod;
    });
  }, [payments, search, status, method]);

  const clearFilters = () => {
    setSearch("");
    setStatus("");
    setMethod("");
  };

  return (
    <div className="space-y-8">
      <PaymentFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        method={method}
        setMethod={setMethod}
        onClear={clearFilters}
        resultCount={filteredPayments.length}
        totalCount={payments.length}
      />

      <PaymentTable payments={filteredPayments} />
    </div>
  );
}
