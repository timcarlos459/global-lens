export default function FAQ() {
  const faqs = [
    {
      q: "How do I book a safari?",
      a: "Choose your preferred tour, complete the booking form and our reservations team will guide you through payment and confirmation.",
    },
    {
      q: "Can I customize my itinerary?",
      a: "Yes. Every itinerary can be tailored to your travel style, budget and schedule.",
    },
    {
      q: "Do you arrange airport transfers?",
      a: "Yes. Complimentary or optional airport transfers are available depending on your package.",
    },
    {
      q: "Can I pay a deposit first?",
      a: "Yes. You may reserve your booking with a deposit, with the remaining balance payable before travel.",
    },
  ];

  return (
    <section className="mt-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-[#081B29]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q} className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#081B29]">{faq.q}</h3>

            <p className="mt-4 text-gray-600 leading-8">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
