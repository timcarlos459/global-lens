"use client";

import { Send, CalendarDays } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-8">
      <div>
        <span className="inline-flex rounded-full bg-[#64D98B]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#64D98B]">
          Travel Enquiry
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#081B29]">
          Let Us Start Planning
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          Complete the form below and one of our luxury travel specialists will
          contact you within 24 hours.
        </p>
      </div>

      {/* Row 1 */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-[#081B29]">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Smith"
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-[#081B29]">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@email.com"
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20"
          />
        </div>
      </div>

      {/* Row 2 */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-[#081B29]">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+254..."
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-[#081B29]">
            Country
          </label>

          <input
            type="text"
            placeholder="United Kingdom"
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20"
          />
        </div>
      </div>

      {/* Row 3 */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-[#081B29]">
            Destination
          </label>

          <select className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20">
            <option>Select Destination</option>

            <option>Kenya</option>

            <option>Tanzania</option>

            <option>Uganda</option>

            <option>Rwanda</option>

            <option>Botswana</option>

            <option>Namibia</option>

            <option>South Africa</option>

            <option>Seychelles</option>

            <option>Zambia</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-[#081B29]">
            Travel Date
          </label>

          <div className="relative">
            <CalendarDays
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#64D98B]"
              size={20}
            />

            <input
              type="date"
              className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-14 pr-5 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20"
            />
          </div>
        </div>
      </div>

      {/* Guests */}

      <div>
        <label className="mb-2 block font-semibold text-[#081B29]">
          Number of Guests
        </label>

        <input
          type="number"
          placeholder="2"
          className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20"
        />
      </div>

      {/* Message */}

      <div>
        <label className="mb-2 block font-semibold text-[#081B29]">
          Tell Us About Your Dream Trip
        </label>

        <textarea
          rows={7}
          placeholder="Describe the destinations you'd like to visit, preferred accommodation, travel dates, budget, activities and any special requests..."
          className="w-full resize-none rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#64D98B] focus:ring-4 focus:ring-[#64D98B]/20"
        />
      </div>

      {/* Button */}

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#64D98B] py-5 text-lg font-bold text-[#081B29] transition duration-300 hover:scale-[1.02] hover:bg-[#53d17d]"
      >
        <Send size={20} />
        Send Luxury Enquiry
      </button>
    </form>
  );
}
