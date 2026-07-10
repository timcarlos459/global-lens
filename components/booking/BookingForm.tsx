"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { createBooking } from "@/actions/booking";
import { useBookingStore } from "@/store/bookingStore";
import GuestSelector from "./GuestSelector";
import RoomSelector from "./RoomSelector";
import CustomerForm from "./CustomerForm";
import BookingSidebar from "./BookingSidebar";
import {
  calculateChildPrice,
  calculateAdultsTotal,
  calculateChildrenTotal,
  calculateSubtotal,
  calculateDeposit,
  calculateBalance,
} from "@/helpers/pricing";
import { generateBookingReference } from "@/utils/reference";

import { destinations } from "@/data/destinations";
export default function BookingForm() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const bookingReference = generateBookingReference();

  const { setBooking } = useBookingStore();

  const tourSlug = searchParams.get("tour");

  const selectedDestination = destinations.find(
    (tour) => tour.slug === tourSlug,
  );

  // ==========================
  // Guest Information
  // ==========================

  const [adults, setAdults] = useState(2);
  const [childGuests, setChildGuests] = useState(0);
  const [infants, setInfants] = useState(0);

  // ==========================
  // Room Selection
  // ==========================

  const [roomType, setRoomType] = useState("Standard Room");

  // ==========================
  // Travel Dates
  // ==========================

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // ==========================
  // Payment Option
  // ==========================

  const [paymentOption, setPaymentOption] = useState<"deposit" | "full">(
    "deposit",
  );

  // ==========================
  // Season
  // (Automatic later)
  // ==========================

  const season: "low" | "standard" | "peak" = "standard";

  // ==========================
  // Occupancy Pricing
  // ==========================

  // Adults + children determine occupancy only
  const pricingGuests = adults + childGuests;

  // Find matching occupancy
  const occupancy =
    selectedDestination?.roomOccupancy.find(
      (item) => item.guests === pricingGuests,
    ) ?? selectedDestination?.roomOccupancy.find((item) => item.guests === 7);

  // ==========================
  // Adult Price
  // (Based on Room Type + Guest Occupancy)
  // ==========================

  let adultPrice = 0;

  if (occupancy) {
    switch (roomType) {
      case "Luxury Suite":
        adultPrice = occupancy.luxury[season];
        break;

      case "Deluxe Room":
        adultPrice = occupancy.deluxe[season];
        break;

      case "Standard Room":
      default:
        adultPrice = occupancy.standard[season];
        break;
    }
  }

  const childPrice = calculateChildPrice(adultPrice);

  const totalGuests = adults + childGuests + infants;

  const adultsTotal = calculateAdultsTotal(adults, adultPrice);

  const childrenTotal = calculateChildrenTotal(childGuests, childPrice);

  const subtotal = calculateSubtotal(adultsTotal, childrenTotal);

  const quoteRequired = occupancy?.guests === 7;

  const deposit = calculateDeposit(subtotal);

  const amountToPay = paymentOption === "deposit" ? deposit : subtotal;

  const balance =
    paymentOption === "deposit" ? calculateBalance(subtotal, deposit) : 0;
  const goToCheckout = async () => {
    if (!selectedDestination) return;

    const result = await createBooking({
      bookingReference,

      destination: selectedDestination.name,

      tourSlug: selectedDestination.slug,

      fullName,
      email,
      nationality,

      adults,
      children: childGuests,
      infants,

      roomType,

      startDate,
      endDate,

      season,

      subtotal,
      deposit,
      amountToPay,

      paymentOption,
    });

    console.log(result);

    if (!result.success) {
      alert(result.error || "Failed to save booking.");

      return;
    }

    setBooking({
      bookingReference,

      destination: selectedDestination.name,

      tourSlug: selectedDestination.slug,

      fullName,
      email,
      nationality,

      adults,
      children: childGuests,
      infants,

      roomType,

      startDate,
      endDate,

      season,

      subtotal,
      deposit,
      amountToPay,

      paymentOption,
    });

    router.push("/checkout");
  };
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      {/* ================= LEFT COLUMN ================= */}

      <div className="lg:col-span-2 space-y-8">
        <GuestSelector
          adults={adults}
          childGuests={childGuests}
          infants={infants}
          setAdults={setAdults}
          setChildGuests={setChildGuests}
          setInfants={setInfants}
        />

        <RoomSelector roomType={roomType} setRoomType={setRoomType} />

        <CustomerForm
          fullName={fullName}
          email={email}
          nationality={nationality}
          specialRequests={specialRequests}
          startDate={startDate}
          endDate={endDate}
          setFullName={setFullName}
          setEmail={setEmail}
          setNationality={setNationality}
          setSpecialRequests={setSpecialRequests}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>

      {/* ================= RIGHT COLUMN ================= */}

      <BookingSidebar
        destination={selectedDestination}
        fullName={fullName}
        email={email}
        nationality={nationality}
        adults={adults}
        childGuests={childGuests}
        infants={infants}
        totalGuests={totalGuests}
        roomType={roomType}
        startDate={startDate}
        endDate={endDate}
        paymentOption={paymentOption}
        setPaymentOption={setPaymentOption}
        season={season}
        quoteRequired={quoteRequired}
        adultPrice={adultPrice}
        childPrice={childPrice}
        adultsTotal={adultsTotal}
        childrenTotal={childrenTotal}
        subtotal={subtotal}
        deposit={deposit}
        balance={balance}
        amountToPay={amountToPay}
        onCheckout={goToCheckout}
      />
    </div>
  );
}
