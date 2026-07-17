import { Destination } from "@/data/destinations/types";

interface Props {
  destination: Destination;
}

export default function Overview({ destination }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-lg p-10">
        <h2 className="text-4xl font-bold text-[#081B29] mb-8">
          Tour Overview
        </h2>

        <p className="text-lg leading-9 text-gray-700">
          {destination.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="font-bold text-[#081B29]">Best Time</h3>

            <p>{destination.bestTime}</p>
          </div>

          <div>
            <h3 className="font-bold text-[#081B29]">Difficulty</h3>

            <p>{destination.difficulty}</p>
          </div>

          <div>
            <h3 className="font-bold text-[#081B29]">Group Size</h3>

            <p>{destination.groupSize}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
