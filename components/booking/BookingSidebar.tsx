type BookingSidebarProps = {
  destination?: {
    name: string;
    country: string;
    duration: string;
  };

  adults: number;
  childGuests: number;
  infants: number;
  totalGuests: number;

  roomType: string;

  startDate: string;
  endDate: string;

  paymentOption: "deposit" | "full";

  setPaymentOption: (value: "deposit" | "full") => void;

  season: string;

  quoteRequired: boolean;

  amountToPay: number;

  onCheckout: () => void;
};

import PriceSummary from "./PriceSummary";
import PaymentOptions from "./PaymentOptions";

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

type Props = BookingSidebarProps &
  PriceSummaryProps & {
    fullName: string;
    email: string;
    nationality: string;
  };

export default function BookingSidebar({
  destination,

  fullName,
  email,
  nationality,

  adults,
  childGuests,
  infants,
  totalGuests,

  roomType,

  startDate,
  endDate,

  paymentOption,
  setPaymentOption,

  season,

  quoteRequired,

  adultPrice,
  childPrice,
  adultsTotal,
  childrenTotal,
  subtotal,
  deposit,
  balance,

  amountToPay,

  onCheckout,
}: Props) {
  return (
    <div className="bg-[#081B29] text-white rounded-3xl p-8 shadow-2xl h-fit sticky top-28">
      <h2 className="text-3xl font-bold mb-8">Booking Summary</h2>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span>Destination</span>
          <strong>{destination?.name ?? "--"}</strong>
        </div>

        <div className="flex justify-between">
          <span>Country</span>
          <strong>{destination?.country ?? "--"}</strong>
        </div>

        <div className="flex justify-between">
          <span>Duration</span>
          <strong>{destination?.duration ?? "--"}</strong>
        </div>
        <hr className="border-gray-600" />

        <div className="flex justify-between">
          <span>Name</span>
          <strong>{fullName || "--"}</strong>
        </div>

        <div className="flex justify-between">
          <span>Email</span>
          <strong className="text-right break-all">{email || "--"}</strong>
        </div>

        <div className="flex justify-between">
          <span>Nationality</span>
          <strong>{nationality || "--"}</strong>
        </div>

        <hr className="border-gray-600" />

        <div className="flex justify-between">
          <span>Adults</span>
          <strong>{adults}</strong>
        </div>

        <div className="flex justify-between">
          <span>Children</span>
          <strong>{childGuests}</strong>
        </div>

        <div className="flex justify-between">
          <span>Infants</span>
          <strong>{infants}</strong>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Total Guests</span>
          <strong>{totalGuests}</strong>
        </div>

        <hr className="border-gray-600" />

        <div className="flex justify-between">
          <span>Room</span>
          <strong>{roomType}</strong>
        </div>

        <div className="flex justify-between">
          <span>Arrival</span>
          <strong>{startDate || "--"}</strong>
        </div>

        <div className="flex justify-between">
          <span>Departure</span>
          <strong>{endDate || "--"}</strong>
        </div>

        <hr className="border-gray-600" />

        <PriceSummary
          season={season}
          quoteRequired={quoteRequired}
          adultPrice={adultPrice}
          childPrice={childPrice}
          adultsTotal={adultsTotal}
          childrenTotal={childrenTotal}
          subtotal={subtotal}
          deposit={deposit}
          balance={balance}
        />

        <PaymentOptions
          paymentOption={paymentOption}
          setPaymentOption={setPaymentOption}
          amountToPay={amountToPay}
          quoteRequired={quoteRequired}
          onCheckout={onCheckout}
        />
      </div>
    </div>
  );
}
