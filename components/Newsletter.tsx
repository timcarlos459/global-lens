"use client";

import { FormEvent, useState } from "react";
import { Globe2, BadgePercent, Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess(false);

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      /*
       * Newsletter database connection will be added here.
       *
       * For now we show a successful subscription message.
       */

      await new Promise((resolve) => setTimeout(resolve, 700));

      setSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32"
      style={{
        backgroundImage: "url('/images/hero/hero4.jpg')",
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-linear-to-r from-[#081B29]/90 via-[#081B29]/70 to-[#081B29]/90" />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-[40px] border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-10 md:p-16">
          {/* BADGE */}
          <span className="inline-block rounded-full bg-[#64D98B] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#081B29]">
            Exclusive Travel Deals
          </span>

          {/* HEADING */}
          <h2 className="mt-8 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Never Miss Your Next Adventure
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            Join thousands of travelers receiving exclusive tour offers,
            destination guides, seasonal discounts, travel inspiration, and
            insider tips from across Africa.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-3xl flex-col justify-center gap-4 sm:gap-5 md:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              disabled={loading}
              className="w-full rounded-full bg-white px-6 py-4 text-base text-[#081B29] outline-none transition placeholder:text-gray-400 focus:ring-4 focus:ring-[#64D98B]/30 disabled:cursor-not-allowed disabled:opacity-70 sm:py-5 sm:text-lg"
              aria-label="Email address"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#64D98B] px-10 py-4 font-bold text-[#081B29] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60 sm:py-5"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* SUCCESS */}
          {success && (
            <div className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-2 rounded-2xl bg-[#64D98B]/15 px-5 py-3 text-sm font-semibold text-[#64D98B]">
              <CheckCircle2 size={18} />
              You have successfully subscribed to our travel updates.
            </div>
          )}

          {/* ERROR */}
          {error && (
            <p className="mx-auto mt-5 max-w-xl text-sm font-semibold text-red-300">
              {error}
            </p>
          )}

          {/* TRUST BADGES */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <span>✓ No Spam</span>
            <span>✓ Monthly Travel Inspiration</span>
            <span>✓ Exclusive Member Offers</span>
          </div>

          {/* BENEFITS */}
          <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
            {/* DESTINATIONS */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 sm:p-8">
              <Globe2 className="mx-auto mb-5 h-10 w-10 text-[#64D98B]" />

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                80+ Destinations
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Discover breathtaking destinations across Africa, from iconic
                safaris to tropical islands and vibrant cities.
              </p>
            </div>

            {/* DISCOUNTS */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 sm:p-8">
              <BadgePercent className="mx-auto mb-5 h-10 w-10 text-[#64D98B]" />

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Exclusive Discounts
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Receive early access to luxury packages, seasonal promotions,
                and members-only travel offers.
              </p>
            </div>

            {/* INSPIRATION */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 sm:p-8">
              <Mail className="mx-auto mb-5 h-10 w-10 text-[#64D98B]" />

              <h3 className="text-xl font-bold text-white sm:text-2xl">
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
