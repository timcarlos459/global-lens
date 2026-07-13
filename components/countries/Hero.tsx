import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-175 overflow-hidden">
      <Image
        src="/images/safari/safari2.jpg"
        alt="Africa"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <span className="rounded-full bg-[#64D98B]/20 border border-[#64D98B]/40 px-5 py-2 font-semibold">
            Explore Africa
          </span>

          <h1 className="mt-8 text-6xl font-black">Destinations by Country</h1>

          <p className="mt-6 max-w-3xl text-xl leading-9">
            Discover Africa one country at a time. Browse luxury safaris,
            beaches, islands, mountains, wildlife and unforgettable experiences
            across the continent.
          </p>
        </div>
      </div>
    </section>
  );
}
