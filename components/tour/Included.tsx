import { Destination } from "@/data/destinations";

interface Props {
  destination: Destination;
}

export default function Included({ destination }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#081B29] mb-8">Included</h2>

          <div className="space-y-5">
            {destination.included.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-green-600">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#081B29] mb-8">Excluded</h2>

          <div className="space-y-5">
            {destination.excluded.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-red-500">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
