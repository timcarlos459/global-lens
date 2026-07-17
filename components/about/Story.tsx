import Image from "next/image";

export default function Story() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Decoration */}

      <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-[#64D98B]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-105 w-105 rounded-full bg-[#64D98B]/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT */}

        <div className="relative">
          {/* Main Image */}

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/about/story1.jpg"
              alt="Luxury Safari"
              width={700}
              height={850}
              className="h-175 w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Image */}

          <div className="absolute -bottom-10 -right-10 hidden overflow-hidden rounded-4xl border-8 border-white shadow-2xl lg:block">
            <Image
              src="/images/about/story2.jpg"
              alt="African Experience"
              width={280}
              height={340}
              className="h-85 w-70 object-cover"
            />
          </div>

          {/* Experience Card */}

          <div className="absolute left-8 top-8 rounded-3xl bg-white/95 p-8 shadow-xl backdrop-blur">
            <h3 className="text-5xl font-black text-[#64D98B]">15+</h3>

            <p className="mt-2 text-lg font-bold text-[#081B29]">
              Years Of Experience
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div>
          <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
            Our Story
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-[#081B29] lg:text-6xl">
            Creating
            <br />
            Extraordinary
            <br />
            African Journeys
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Global Lens Tours was founded with a single purpose — to reveal
            Africa in its most authentic, luxurious and unforgettable form.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            We believe travel is more than visiting destinations. It is about
            discovering cultures, creating lifelong memories, meeting
            extraordinary people and experiencing nature in its purest form.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            From the Great Migration in Kenya and Tanzania, to gorilla trekking
            in Uganda, pristine islands of Seychelles, Namibia deserts, South
            Africa vineyards, Botswana Okavango Delta, and Zambia Victoria Falls
            — every itinerary is handcrafted by our travel specialists.
          </p>

          {/* Features */}

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-4xl">🌍</h3>

              <h4 className="mt-5 text-xl font-bold text-[#081B29]">
                Authentic Africa
              </h4>

              <p className="mt-3 leading-8 text-gray-600">
                Genuine local experiences carefully selected across Africa.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-4xl">🦁</h3>

              <h4 className="mt-5 text-xl font-bold text-[#081B29]">
                Luxury Safaris
              </h4>

              <p className="mt-3 leading-8 text-gray-600">
                Premium wildlife adventures with world-class guides.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-4xl">✈️</h3>

              <h4 className="mt-5 text-xl font-bold text-[#081B29]">
                Tailor-Made Trips
              </h4>

              <p className="mt-3 leading-8 text-gray-600">
                Every itinerary is designed around your travel dreams.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-4xl">⭐</h3>

              <h4 className="mt-5 text-xl font-bold text-[#081B29]">
                Five-Star Service
              </h4>

              <p className="mt-3 leading-8 text-gray-600">
                Dedicated support from planning until you return home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
