"use client";

import Image from "next/image";

const stories = [
  {
    title: "Witness the Great Migration",
    category: "Safari Experience",
    image: "/images/safari/safari4.jpg",
  },
  {
    title: "Relax on Africa's Finest Beaches",
    category: "Luxury Escape",
    image: "/images/beach/beach2.jpg",
  },
  {
    title: "Conquer Africa's Highest Peaks",
    category: "Adventure",
    image: "/images/mountain/mountain3.jpg",
  },
];

export default function TravelStories() {
  return (
    <section className="relative py-32 bg-[#081B29] overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero2.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#081B29]/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#64D98B] font-semibold">

            Travel Stories

          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-5">

            Every Journey Has A Story

          </h2>

          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-8">

            From thrilling wildlife encounters and pristine tropical beaches
            to mountain expeditions and rich cultural discoveries,
            every adventure with Global Lens becomes a story worth sharing.

          </p>

        </div>

        {/* Play Button */}

        <div className="flex justify-center mt-14">

          <button className="w-24 h-24 rounded-full bg-[#64D98B] hover:scale-110 transition duration-300 shadow-2xl flex items-center justify-center">

            <span className="text-white text-4xl ml-1">
              ▶
            </span>

          </button>

        </div>

        {/* Story Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {stories.map((story) => (

            <div
              key={story.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-2xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <p className="text-[#64D98B] uppercase font-semibold">

                  {story.category}

                </p>

                <h3 className="text-3xl font-bold mt-3 text-[#081B29]">

                  {story.title}

                </h3>

                <button className="mt-8 text-[#081B29] font-semibold hover:text-[#64D98B] transition">

                  Read Story →

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}