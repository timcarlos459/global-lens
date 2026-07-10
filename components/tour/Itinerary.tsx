import { Destination } from "@/data/destinations";

interface Props {
  destination: Destination;
}

export default function Itinerary({ destination }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-[#081B29] mb-10">
        Tour Itinerary
      </h2>

      <div className="space-y-8">
        {destination.itinerary.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 border-l-8 border-[#64D98B]"
          >
            <div className="text-[#64D98B] font-bold text-lg">{day.day}</div>

            <h3 className="text-2xl font-bold text-[#081B29] mt-2">
              {day.title}
            </h3>

            <p className="text-gray-600 mt-4 leading-8">{day.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
