interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

interface ItineraryProps {
  itinerary: ItineraryDay[];
}

export default function Itinerary({ itinerary }: ItineraryProps) {
  return (
    <section>
      <div className="mb-8">
        <span className="rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
          Tour Plan
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#081B29]">
          Day-by-Day Itinerary
        </h2>
      </div>

      <div className="space-y-8">
        {itinerary.map((day, index) => (
          <div
            key={`${day.day}-${index}`}
            className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#64D98B] font-bold text-[#081B29]">
              {index + 1}
            </div>

            <div className="ml-16">
              <p className="font-semibold text-[#64D98B]">{day.day}</p>

              <h3 className="mt-2 text-2xl font-bold text-[#081B29]">
                {day.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">{day.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
