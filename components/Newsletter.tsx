"use client";

import { Globe2, BadgePercent, Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32"
      style={{
        backgroundImage: "url('/images/hero/hero4.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-[#081B29]/90 via-[#081B29]/70 to-[#081B29]/90" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl md:p-16">
          {/* Badge */}

          <span className="inline-block rounded-full bg-[#64D98B] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#081B29]">
            Exclusive Travel Deals
          </span>

          {/* Heading */}

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Never Miss Your Next Adventure
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Join thousands of travelers receiving exclusive tour offers,
            destination guides, seasonal discounts, travel inspiration, and
            insider tips from across Africa.
          </p>

          {/* Newsletter Form */}

          <form className="mt-12 flex flex-col justify-center gap-5 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-130 px-6 py-5 rounded-full bg-white text-[#081B29] outline-none text-lg"
            />

            <button
              type="submit"
              className="rounded-full bg-[#64D98B] px-10 py-5 font-bold text-[#081B29] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              Subscribe
            </button>
          </form>

          {/* Trust Badges */}

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>✓ No Spam</span>
            <span>✓ Monthly Travel Inspiration</span>
            <span>✓ Exclusive Member Offers</span>
          </div>

          {/* Benefits */}

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
              <Globe2 className="mx-auto mb-5 h-10 w-10 text-[#64D98B]" />

              <h3 className="text-2xl font-bold text-white">
                80+ Destinations
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Discover breathtaking destinations across Africa, from iconic
                safaris to tropical islands and vibrant cities.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
              <BadgePercent className="mx-auto mb-5 h-10 w-10 text-[#64D98B]" />

              <h3 className="text-2xl font-bold text-white">
                Exclusive Discounts
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Receive early access to luxury packages, seasonal promotions,
                and members-only travel offers.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
              <Mail className="mx-auto mb-5 h-10 w-10 text-[#64D98B]" />

              <h3 className="text-2xl font-bold text-white">
                Travel Inspiration
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Stay inspired with destination guides, expert travel tips, and
                curated African adventures delivered straight to your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
