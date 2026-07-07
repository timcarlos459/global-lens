export default function Tours() {
  return (
    <section className="bg-green-900 text-white py-20 text-center">

      <h2 className="text-5xl font-bold mb-10">
        Featured Tours
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        <div className="bg-green-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold">
            Maasai Mara
          </h3>

          <p>USD 500 per person</p>
        </div>

        <div className="bg-green-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold">
            Amboseli Safari
          </h3>

          <p>USD 300 per person</p>
        </div>

        <div className="bg-green-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold">
            Diani Beach Holiday
          </h3>

          <p>USD 250 per person</p>
        </div>

      </div>

    </section>
  );
}