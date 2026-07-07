export default function SecurityCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#081B29] mb-6">
        Your Booking is Protected
      </h2>

      <div className="space-y-4 text-gray-600">
        <div className="flex gap-3">
          <span>🔒</span>
          <p>256-bit SSL encrypted checkout</p>
        </div>

        <div className="flex gap-3">
          <span>🛡️</span>
          <p>PCI-compliant payment processing</p>
        </div>

        <div className="flex gap-3">
          <span>🌍</span>
          <p>Trusted by travellers worldwide</p>
        </div>

        <div className="flex gap-3">
          <span>📧</span>
          <p>Instant booking confirmation after successful payment</p>
        </div>

        <div className="flex gap-3">
          <span>☎️</span>
          <p>24/7 Global Lens support team</p>
        </div>
      </div>
    </div>
  );
}
