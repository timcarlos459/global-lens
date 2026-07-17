interface HighlightsProps {
  highlights: string[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <section>
      <div className="mb-8">
        <span className="rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
          Highlights
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#081B29]">
          Tour Highlights
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((highlight, index) => (
          <div
            key={`${highlight}-${index}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#64D98B] font-bold text-white">
                ✓
              </div>

              <p className="leading-7 text-gray-700">{highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
