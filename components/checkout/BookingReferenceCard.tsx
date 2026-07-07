type BookingReferenceCardProps = {
  bookingReference: string;
};

export default function BookingReferenceCard({
  bookingReference,
}: BookingReferenceCardProps) {
  return (
    <div className="bg-linear-to-r from-[#081B29] to-[#0F2E45] text-white rounded-3xl p-6 shadow-xl">
      <h3 className="text-lg font-semibold text-[#64D98B]">
        Booking Reference
      </h3>

      <p className="text-3xl font-black tracking-wider mt-3">
        {bookingReference}
      </p>

      <p className="text-sm text-gray-300 mt-3">
        You&apos;ll use it to track your booking and receive payment
        confirmations. payment confirmations.
      </p>
    </div>
  );
}
