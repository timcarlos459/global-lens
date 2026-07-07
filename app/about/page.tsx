import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[70vh]">

        <Image
          src="/images/hero/hero2.jpg"
          alt="About Global Lens"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[6px] text-[#64D98B] font-semibold">
              About Global Lens
            </p>

            <h1 className="text-6xl font-black mt-6">
              Explore Africa Through
              <br />
              A Different Lens
            </h1>

          </div>

        </div>

      </section>

      {/* Story */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/safari/safari3.jpg"
              alt="Safari"
              width={700}
              height={700}
              className="rounded-3xl"
            />

          </div>

          <div>

            <span className="uppercase tracking-[6px] text-[#64D98B] font-semibold">

              Our Story

            </span>

            <h2 className="text-5xl font-black text-[#081B29] mt-6">

              Creating Extraordinary African Adventures

            </h2>

            <p className="text-gray-600 mt-8 leading-8">

              Global Lens Tours & Travel was founded with one simple
              vision—to showcase the beauty, culture, wildlife and
              unforgettable experiences Africa has to offer.

              Whether you&apos;re seeking thrilling safaris, tropical beaches,
              mountain expeditions, gorilla trekking or authentic cultural
              encounters, we create journeys that become lifelong memories.

            </p>

            <p className="text-gray-600 mt-6 leading-8">

              Our experienced team works tirelessly to ensure every traveler
              experiences Africa in comfort, safety and style.

            </p>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="bg-[#081B29] text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white/10 rounded-3xl p-10">

              <h3 className="text-3xl font-bold mb-6">

                Our Mission

              </h3>

              <p className="text-gray-300 leading-8">

                To make African travel unforgettable through personalized,
                safe and premium travel experiences.

              </p>

            </div>

            <div className="bg-white/10 rounded-3xl p-10">

              <h3 className="text-3xl font-bold mb-6">

                Our Vision

              </h3>

              <p className="text-gray-300 leading-8">

                To become Africa&apos;s most trusted and innovative travel company.

              </p>

            </div>

            <div className="bg-white/10 rounded-3xl p-10">

              <h3 className="text-3xl font-bold mb-6">

                Our Values

              </h3>

              <p className="text-gray-300 leading-8">

                Integrity • Excellence • Sustainability • Hospitality • Innovation

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}