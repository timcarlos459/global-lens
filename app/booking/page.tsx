import BookingForm from "../../components/booking/BookingForm";

export default function BookingPage() {

  return (

    <main className="max-w-7xl mx-auto px-8 py-20">

      <h1 className="text-5xl font-black text-[#081B29]">

        Book Your Adventure

      </h1>

      <p className="mt-4 text-gray-600">

        Complete your booking in a few easy steps.

      </p>

      <div className="mt-12">

        <BookingForm />

      </div>

    </main>

  );

}