"use client";

import { useRouter } from "next/navigation";
import { useBookingStore } from "@/store/bookingStore";

import TravellerCard from "@/components/checkout/TravellerCard";
import TourCard from "@/components/checkout/TourCard";
import BookingReferenceCard from "@/components/checkout/BookingReferenceCard";
import PaymentSummaryCard from "@/components/checkout/PaymentSummaryCard";
import SecurityCard from "@/components/checkout/SecurityCard";
import CheckoutButton from "@/components/checkout/CheckoutButton";

export default function CheckoutPage() {
  const { booking } = useBookingStore();
  const router = useRouter();

  if (!booking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#081B29]">
            No Booking Found
          </h1>

          <p className="mt-4 text-gray-500">Please complete a booking first.</p>

          <button
            onClick={() => router.push("/booking")}
            className="mt-8 bg-[#64D98B] text-[#081B29] px-6 py-3 rounded-xl font-bold"
          >
            Return to Booking
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* PAGE HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-[#081B29]">Secure Checkout</h1>

          <p className="text-gray-500 mt-3">
            Review your booking details before completing your secure payment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}

          <div className="lg:col-span-2 space-y-8">
            <TravellerCard
              fullName={booking.fullName}
              email={booking.email}
              nationality={booking.nationality}
              adults={booking.adults}
              childGuests={booking.children}
              infants={booking.infants}
            />

            <TourCard
              destination={booking.destination}
              country="Kenya"
              roomType={booking.roomType}
              startDate={booking.startDate}
              endDate={booking.endDate}
              season={booking.season}
              paymentOption={booking.paymentOption}
              bookingReference={booking.bookingReference}
            />

            <SecurityCard />
          </div>

          {/* RIGHT COLUMN */}

          <div className="space-y-6 sticky top-28">
            <BookingReferenceCard bookingReference={booking.bookingReference} />

            <PaymentSummaryCard
              paymentOption={booking.paymentOption}
              subtotal={booking.subtotal}
              deposit={booking.deposit}
              amountToPay={booking.amountToPay}
            />

            <CheckoutButton
              onCheckout={() => {
                alert("NOWPayments Integration Coming Soon 🚀");
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
