type PriceSummaryProps = {
  season: "low" | "standard" | "peak";

  quoteRequired: boolean;

  adultPrice: number;
  childPrice: number;

  adultsTotal: number;
  childrenTotal: number;

  subtotal: number;
  deposit: number;
  balance: number;
};

export default function PriceSummary({
  season,
  quoteRequired,
  adultPrice,
  childPrice,
  adultsTotal,
  childrenTotal,
  subtotal,
  deposit,
  balance,
}: PriceSummaryProps) {
  return (
    <>
      <h3 className="text-xl font-bold text-[#64D98B]">Price Breakdown</h3>

      <div className="flex justify-between">
        <span>Season</span>
        <strong className="capitalize">{season}</strong>
      </div>

      <div className="flex justify-between">
        <span>Adult Price</span>

        <strong>
          {quoteRequired ? "Contact Us" : `$${adultPrice.toLocaleString()} PP`}
        </strong>
      </div>

      <div className="flex justify-between">
        <span>Child Price (70%)</span>

        <strong>
          {quoteRequired ? "Contact Us" : `$${childPrice.toLocaleString()} PP`}
        </strong>
      </div>

      <div className="flex justify-between">
        <span>Adults Total</span>

        <strong>
          {quoteRequired ? "Contact Us" : `$${adultsTotal.toLocaleString()}`}
        </strong>
      </div>

      <div className="flex justify-between">
        <span>Children Total</span>

        <strong>
          {quoteRequired ? "Contact Us" : `$${childrenTotal.toLocaleString()}`}
        </strong>
      </div>

      <div className="flex justify-between">
        <span>Taxes & Fees</span>

        <strong>Included</strong>
      </div>

      <hr className="border-gray-600" />

      <div className="flex justify-between text-xl font-bold">
        <span>Grand Total</span>

        <span>
          {quoteRequired ? "Contact Us" : `$${subtotal.toLocaleString()}`}
        </span>
      </div>

      <div className="flex justify-between">
        <span>60% Deposit</span>

        <strong>
          {quoteRequired ? "Contact Us" : `$${deposit.toLocaleString()}`}
        </strong>
      </div>

      <div className="flex justify-between">
        <span>Remaining Balance</span>

        <strong className={balance === 0 ? "text-[#64D98B]" : ""}>
          {quoteRequired ? "Contact Us" : `$${balance.toLocaleString()}`}
        </strong>
      </div>

      <hr className="border-gray-600" />
    </>
  );
}
