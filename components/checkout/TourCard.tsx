type TourCardProps = {
  destination: string;
  country: string;
  roomType: string;
  startDate: string;
  endDate: string;
  season: string;
  paymentOption: "deposit" | "full";
  bookingReference: string;
};

export default function TourCard({
  destination,
  country,
  roomType,
  startDate,
  endDate,
  season,
  paymentOption,
  bookingReference,
}: TourCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#081B29] mb-6">
        Tour Information
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Destination</span>
          <strong>{destination}</strong>
        </div>

        <div className="flex justify-between">
          <span>Country</span>
          <strong>{country}</strong>
        </div>

        <div className="flex justify-between">
          <span>Room</span>
          <strong>{roomType}</strong>
        </div>

        <div className="flex justify-between">
          <span>Arrival</span>
          <strong>{startDate}</strong>
        </div>

        <div className="flex justify-between">
          <span>Departure</span>
          <strong>{endDate}</strong>
        </div>

        <div className="flex justify-between">
          <span>Season</span>
          <strong className="capitalize">{season}</strong>
        </div>

        <div className="flex justify-between">
          <span>Payment</span>
          <strong>
            {paymentOption === "deposit" ? "60% Deposit" : "Full Payment"}
          </strong>
        </div>

        <hr />

        <div className="flex justify-between">
          <span>Booking Reference</span>
          <strong className="text-[#64D98B]">{bookingReference}</strong>
        </div>
      </div>
    </div>
  );
}
