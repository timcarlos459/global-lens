import { Destination } from "@/data/destinations";

interface Props {
  destination: Destination;
}

export default function Highlights({ destination }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-[#081B29] mb-10">
        Tour Highlights
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destination.highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">⭐</div>

            <h3 className="font-bold text-lg text-[#081B29]">{highlight}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
