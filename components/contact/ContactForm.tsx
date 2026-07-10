export default function ContactForm() {
  return (
    <form className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
      <h2 className="text-3xl font-black text-[#081B29]">Send Us A Message</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-xl p-4"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border rounded-xl p-4"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        placeholder="Country"
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        placeholder="Destination Interested In"
        className="w-full border rounded-xl p-4"
      />

      <input type="date" className="w-full border rounded-xl p-4" />

      <textarea
        rows={6}
        placeholder="Tell us about your dream trip..."
        className="w-full border rounded-xl p-4"
      />

      <button className="w-full bg-[#64D98B] hover:bg-[#54c97a] text-[#081B29] font-bold py-4 rounded-2xl transition">
        Send Enquiry
      </button>
    </form>
  );
}
