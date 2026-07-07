"use client";

import BookingButton from "./BookingButton";

type PaymentOptionsProps = {
  paymentOption: "deposit" | "full";
  setPaymentOption: (value: "deposit" | "full") => void;

  amountToPay: number;
  quoteRequired: boolean;

  onCheckout: () => void;
};
export default function PaymentOptions({
  paymentOption,
  setPaymentOption,
  amountToPay,
  quoteRequired,
  onCheckout,
}: PaymentOptionsProps) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Secure Checkout</h3>

            <p className="text-sm text-gray-400 mt-1">
              Your payment is encrypted and protected.
            </p>
          </div>

          <div className="bg-[#64D98B]/20 text-[#64D98B] px-3 py-2 rounded-full text-sm font-semibold">
            🔒 SSL Secure
          </div>
        </div>

        <div className="space-y-5 mt-8">
          <label
            className={`border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer transition ${
              paymentOption === "deposit"
                ? "border-[#64D98B] bg-[#64D98B]/10"
                : "border-gray-700 hover:border-[#64D98B]"
            }`}
          >
            <input
              type="radio"
              checked={paymentOption === "deposit"}
              onChange={() => setPaymentOption("deposit")}
              className="mt-1"
            />

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg">60% Deposit</h4>

                <span className="text-[#64D98B] font-bold">Recommended</span>
              </div>

              <p className="text-sm text-gray-400 mt-2">
                Secure your reservation today and pay the remaining balance
                before travel.
              </p>
            </div>

            <div>
              <h4 className="font-bold">60% Deposit</h4>

              <p className="text-sm text-gray-400">
                Secure your booking today and pay the remaining balance before
                your trip.
              </p>
            </div>
          </label>

          <label
            className={`border-2 rounded-2xl p-5 flex items-start gap-4 cursor-pointer transition ${
              paymentOption === "full"
                ? "border-[#64D98B] bg-[#64D98B]/10"
                : "border-gray-700 hover:border-[#64D98B]"
            }`}
          >
            <input
              type="radio"
              checked={paymentOption === "full"}
              onChange={() => setPaymentOption("full")}
              className="mt-1"
            />

            <div className="flex-1">
              <h4 className="font-bold text-lg">Full Payment</h4>

              <p className="text-sm text-gray-400 mt-2">
                Pay the entire amount today and travel with no remaining
                balance.
              </p>
            </div>

            <div>
              <h4 className="font-bold">Full Payment</h4>

              <p className="text-sm text-gray-400">
                Complete your booking with one secure payment.
              </p>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-[#64D98B] rounded-2xl p-6 text-[#081B29]">
        <p className="text-sm font-semibold">
          {paymentOption === "deposit" ? "Amount Due Today" : "Total Due Today"}
        </p>

        <h2 className="text-4xl font-black mt-2">
          {quoteRequired ? "Contact Us" : `$${amountToPay.toLocaleString()}`}
        </h2>

        <p className="mt-4 text-sm">
          {paymentOption === "deposit"
            ? "Your reservation will be secured immediately after payment."
            : "Your booking will be fully paid today."}
        </p>
      </div>
      <div className="border border-gray-700 rounded-2xl p-5">
        <h4 className="font-bold text-lg mb-4">Accepted Payment Methods</h4>

        <div className="grid grid-cols-2 gap-3">
          <div className="border border-gray-700 rounded-xl p-3 text-center">
            💳
            <p className="text-sm mt-2">Visa</p>
          </div>

          <div className="border border-gray-700 rounded-xl p-3 text-center">
            💳
            <p className="text-sm mt-2">Mastercard</p>
          </div>

          <div className="border border-gray-700 rounded-xl p-3 text-center">
            🍎
            <p className="text-sm mt-2">Apple Pay</p>
          </div>

          <div className="border border-gray-700 rounded-xl p-3 text-center">
            🤖
            <p className="text-sm mt-2">Google Pay</p>
          </div>
        </div>

        <div className="mt-5 border-t border-gray-700 pt-5">
          <h4 className="font-semibold">Why Book With Global Lens?</h4>

          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>✔ Secure encrypted checkout</li>
            <li>✔ Instant booking confirmation</li>
            <li>✔ Transparent pricing</li>
            <li>✔ 24/7 customer support</li>
          </ul>
        </div>
      </div>

      <BookingButton quoteRequired={quoteRequired} onClick={onCheckout} />
    </>
  );
}
