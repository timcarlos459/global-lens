export interface Payment {
  id: number;

  payment_reference: string;

  booking_reference: string;

  customer_name: string;

  amount: number;

  payment_method: "Mpesa" | "Card" | "Paypal" | "Bank";

  payment_status: "Pending" | "Paid" | "Refunded";

  transaction_id: string;

  payment_date: string;

  created_at: string;
}
