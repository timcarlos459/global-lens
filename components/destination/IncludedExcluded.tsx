interface IncludedExcludedProps {
  included: string[];
  excluded: string[];
}

export default function IncludedExcluded({
  included,
  excluded,
}: IncludedExcludedProps) {
  return (
    <section className="space-y-10">
      <div>
        <span className="rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
          Tour Information
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#081B29]">
          What Is Included & Excluded
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* INCLUDED */}

        <div className="rounded-3xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">✓ Included</h3>

          <div className="space-y-4">
            {included.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-start gap-4 rounded-xl bg-white p-4"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                  ✓
                </div>

                <p className="leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXCLUDED */}

        <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-red-700">✕ Excluded</h3>

          <div className="space-y-4">
            {excluded.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-start gap-4 rounded-xl bg-white p-4"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                  ✕
                </div>

                <p className="leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
