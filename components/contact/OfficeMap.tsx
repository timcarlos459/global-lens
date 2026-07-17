export default function OfficeMap() {
  return (
    <section className="mt-32">
      {/* Heading */}

      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
          Visit Our Office
        </span>

        <h2 className="mt-6 text-5xl font-black text-[#081B29]">
          Meet Our Travel Specialists
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
          Whether you prefer planning your dream holiday in person or simply
          want expert travel advice, our luxury travel consultants are always
          ready to welcome you at our Nairobi office.
        </p>
      </div>

      {/* Map */}

      <div className="mt-16 overflow-hidden rounded-[40px] border border-gray-200 bg-white shadow-2xl">
        <iframe
          src="https://www.google.com/maps?q=Westlands,Nairobi&output=embed"
          width="100%"
          height="600"
          loading="lazy"
          className="border-0"
        />
      </div>

      {/* Luxury Cards */}

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {/* Office */}

        <div className="group relative overflow-hidden rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#64D98B]/10 blur-3xl transition-all duration-500 group-hover:bg-[#64D98B]/20" />

          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#64D98B]/15 text-5xl">
              📍
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[5px] text-[#64D98B]">
              Office Location
            </p>

            <h3 className="mt-3 text-3xl font-black text-[#081B29]">
              Nairobi Headquarters
            </h3>

            <p className="mt-6 leading-9 text-gray-600">
              Global Lens Tours
              <br />
              Westlands Business District
              <br />
              Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Hours */}

        <div className="group relative overflow-hidden rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div className="absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-[#64D98B]/10 blur-3xl transition-all duration-500 group-hover:bg-[#64D98B]/20" />

          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#081B29] text-5xl text-white">
              🕘
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[5px] text-[#64D98B]">
              Opening Hours
            </p>

            <h3 className="mt-3 text-3xl font-black text-[#081B29]">
              We Are Available
            </h3>

            <div className="mt-8 space-y-5">
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-600">Monday - Friday</span>
                <strong className="text-[#081B29]">8:00 AM - 6:00 PM</strong>
              </div>

              <div className="flex justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-600">Saturday</span>
                <strong className="text-[#081B29]">9:00 AM - 3:00 PM</strong>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Emergency Support</span>
                <strong className="text-[#64D98B]">24 / 7</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation */}

        <div className="group relative overflow-hidden rounded-[36px] bg-linear-to-br from-[#081B29] via-[#0E2435] to-[#081B29] p-10 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(8,27,41,0.45)]">
          <div className="absolute -right-14 -top-14 h-60 w-60 rounded-full bg-[#64D98B]/15 blur-3xl" />

          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-5xl backdrop-blur">
              ✈️
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[5px] text-[#64D98B]">
              Concierge Service
            </p>

            <h3 className="mt-3 text-3xl font-black">Private Consultation</h3>

            <p className="mt-6 leading-9 text-gray-300">
              Meet our luxury travel designers and let us create a bespoke
              African itinerary crafted exclusively around your dreams,
              interests and preferred travel style.
            </p>

            <button className="mt-10 rounded-full bg-[#64D98B] px-8 py-4 font-bold text-[#081B29] transition-all duration-300 hover:scale-105 hover:bg-[#53d17d]">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
