"use client";

export default function Newsletter() {
  return (
    <section
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero4.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081B29]/80"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-10 md:p-16 text-center shadow-2xl">

          <span className="inline-block bg-[#64D98B] text-[#081B29] px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">

            Exclusive Travel Deals

          </span>

          <h2 className="text-white text-5xl md:text-6xl font-black mt-8">

            Never Miss Your Next Adventure

          </h2>

          <p className="text-gray-200 text-lg mt-8 max-w-3xl mx-auto leading-8">

            Join thousands of travelers receiving exclusive tour offers,
            destination guides, seasonal discounts, travel inspiration,
            and insider tips across Africa.

          </p>

          {/* Email Form */}

          <form className="mt-12 flex flex-col md:flex-row gap-5 justify-center">

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-112.5 px-6 py-5 rounded-full bg-white text-[#081B29] outline-none text-lg"
            />

            <button
              className="bg-[#64D98B] hover:bg-white hover:text-[#081B29] transition-all duration-300 text-[#081B29] font-bold px-10 py-5 rounded-full"
            >
              Subscribe
            </button>

          </form>

          {/* Benefits */}

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-white">

            <div>
              <h3 className="text-2xl font-bold">🌍 80+ Destinations</h3>
              <p className="text-gray-300 mt-3">
                Discover breathtaking destinations across Africa.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">💰 Exclusive Discounts</h3>
              <p className="text-gray-300 mt-3">
                Get access to members-only travel deals and promotions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">📩 Travel Inspiration</h3>
              <p className="text-gray-300 mt-3">
                Receive expert travel tips and curated adventures.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}