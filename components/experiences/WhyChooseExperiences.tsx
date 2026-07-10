export default function WhyChooseExperiences() {
  const features = [
    {
      title: "Luxury Planning",
      text: "Every experience is carefully curated for comfort and exclusivity.",
    },
    {
      title: "Local Experts",
      text: "Professional guides with extensive local knowledge and experience.",
    },
    {
      title: "Flexible Booking",
      text: "Personalized itineraries tailored to your travel preferences.",
    },
    {
      title: "24/7 Support",
      text: "Dedicated assistance before, during and after your journey.",
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[#64D98B] font-bold uppercase tracking-wider">
          Why Choose Global Lens
        </span>

        <h2 className="mt-5 text-5xl font-black text-[#081B29]">
          Exceptional Experiences,
          <br />
          Designed Around You
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-3xl shadow-lg p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#64D98B]/20 flex items-center justify-center text-3xl">
              ⭐
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#081B29]">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-8">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
