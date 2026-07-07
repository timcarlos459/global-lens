import Link from "next/link";

export default function PaymentCancelledPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
        <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl text-white">✕</span>
        </div>

        <h1 className="text-4xl font-bold text-[#081B29]">Payment Cancelled</h1>

        <p className="text-gray-600 mt-6">Your booking has not been charged.</p>

        <p className="text-gray-500 mt-4">
          You can return to checkout at any time to complete your payment.
        </p>

        <div className="mt-10">
          <Link
            href="/checkout"
            className="bg-[#081B29] hover:bg-[#0F2E45] text-white px-8 py-4 rounded-2xl font-bold transition"
          >
            Return to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
