import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
        <div className="w-24 h-24 rounded-full bg-[#64D98B] flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl text-white">✓</span>
        </div>

        <h1 className="text-4xl font-bold text-[#081B29]">
          Payment Successful
        </h1>

        <p className="text-gray-600 mt-6 leading-8">
          Thank you for booking with Global Lens Tours & Travel.
          <br />
          Your payment has been received successfully.
        </p>

        <p className="text-gray-500 mt-4">
          Our reservations team will verify your booking and send your travel
          confirmation shortly.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="bg-[#64D98B] hover:bg-[#53c67b] text-[#081B29] px-8 py-4 rounded-2xl font-bold transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
