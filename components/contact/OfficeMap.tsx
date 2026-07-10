export default function OfficeMap() {
  return (
    <section className="mt-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-[#081B29]">Visit Our Office</h2>

        <p className="text-gray-600 mt-4">Westlands, Nairobi, Kenya</p>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps?q=Westlands,Nairobi&output=embed"
          width="100%"
          height="500"
          loading="lazy"
          className="border-0"
        />
      </div>
    </section>
  );
}
