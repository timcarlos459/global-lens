"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I book a safari?",
      a: "Choose your preferred tour or contact one of our travel specialists. Once we understand your travel preferences, we will prepare a personalized itinerary, confirm availability, and guide you through the booking process until your journey is secured.",
    },
    {
      q: "Can I customize my itinerary?",
      a: "Absolutely. Every Global Lens journey is tailor-made to match your interests, travel style, budget, accommodation preferences, and schedule.",
    },
    {
      q: "Do you arrange airport transfers?",
      a: "Yes. We provide private airport transfers, meet-and-greet services, and luxury transportation throughout your journey depending on your selected package.",
    },
    {
      q: "Can I pay a deposit first?",
      a: "Yes. You can secure your booking with a deposit, while the remaining balance is payable before your departure according to our payment schedule.",
    },
    {
      q: "Do I need a visa before travelling?",
      a: "Visa requirements depend on your nationality and destination. Our travel experts will guide you through all entry requirements before your trip.",
    },
    {
      q: "Are your safaris family friendly?",
      a: "Yes. We offer specially designed family safaris with child-friendly lodges, flexible itineraries, and activities suitable for all ages.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#64D98B]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081B29]">
            We Are Here To Help
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Find answers to the questions our travelers ask most before
            embarking on their unforgettable African adventure.
          </p>
        </div>

        {/* Accordion */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-8 text-left"
              >
                <h3 className="text-xl font-bold text-[#081B29]">{faq.q}</h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index
                      ? "rotate-180 text-[#64D98B]"
                      : "text-gray-500"
                  }`}
                  size={26}
                />
              </button>

              {open === index && (
                <div className="border-t border-gray-100 px-8 pb-8">
                  <p className="pt-6 text-lg leading-8 text-gray-600">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
