import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Hot Air Balloon Safari",
    image: "/images/experiences/balloon.jpg",
    location: "Maasai Mara",
    description:
      "Float above the African savannah at sunrise while witnessing breathtaking wildlife from the skies.",
  },
  {
    title: "Gorilla Trekking",
    image: "/images/experiences/gorilla.jpg",
    location: "Uganda",
    description:
      "Encounter endangered mountain gorillas in their natural rainforest habitat.",
  },
  {
    title: "Helicopter Scenic Tours",
    image: "/images/experiences/helicopter.jpg",
    location: "Kenya",
    description:
      "Take in spectacular aerial views of mountains, lakes and wildlife reserves.",
  },
  {
    title: "Luxury Dhow Cruise",
    image: "/images/experiences/dhow.jpg",
    location: "Zanzibar",
    description:
      "Sail the Indian Ocean while enjoying gourmet dining and unforgettable sunsets.",
  },
  {
    title: "Cultural Village Experience",
    image: "/images/experiences/culture.jpg",
    location: "Kenya",
    description:
      "Experience authentic African traditions, music, dance and local cuisine.",
  },
  {
    title: "Scuba Diving Adventure",
    image: "/images/experiences/diving.jpg",
    location: "Diani Beach",
    description:
      "Explore vibrant coral reefs and marine life beneath crystal-clear waters.",
  },
];

export default function ExperienceGrid() {
  return (
    <section>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} {...experience} />
        ))}
      </div>
    </section>
  );
}
