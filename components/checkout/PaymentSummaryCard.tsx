type PaymentSummaryCardProps = {
  paymentOption: "deposit" | "full";
  subtotal: number;
  deposit: number;
  amountToPay: number;
};

export default function PaymentSummaryCard({
  paymentOption,
  subtotal,
  deposit,
  amountToPay,
}: PaymentSummaryCardProps) {
  return (
    <div className="bg-[#081B29] text-white rounded-3xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold mb-8">Payment Summary</h2>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span>Payment Type</span>
          <strong>
            {paymentOption === "deposit" ? "60% Deposit" : "Full Payment"}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>Tour Total</span>
          <strong>${subtotal.toLocaleString()}</strong>
        </div>

        <div className="flex justify-between">
          <span>Deposit</span>
          <strong>${deposit.toLocaleString()}</strong>
        </div>

        <hr className="border-gray-600" />

        <div className="flex justify-between text-3xl font-bold text-[#64D98B]">
          <span>Amount Due</span>
          <span>${amountToPay.toLocaleString()}</span>
        </div>

        <div className="mt-6 rounded-2xl bg-[#64D98B]/10 border border-[#64D98B]/30 p-5">
          <p className="text-[#64D98B] font-semibold">
            ✔ Secure Encrypted Payment
          </p>

          <p className="text-gray-300 text-sm mt-2">
            Visa, Mastercard, Apple Pay and Google Pay are securely processed
            through our payment partner before settlement to Global Lens.
          </p>
        </div>
      </div>
    </div>
  );
}
