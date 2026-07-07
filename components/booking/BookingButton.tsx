"use client";

type BookingButtonProps = {
  quoteRequired: boolean;
  onClick?: () => void;
};

export default function BookingButton({
  quoteRequired,
  onClick,
}: BookingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-[#64D98B] hover:bg-green-500 transition-all duration-300 text-[#081B29] font-bold py-4 rounded-xl text-lg shadow-lg"
    >
      {quoteRequired ? "Request Custom Quote" : "Continue to Secure Payment"}
    </button>
  );
}
