import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Globe2 } from "lucide-react";

const countries = [
  {
    name: "Kenya",
    slug: "kenya",
    image: "/images/safari/safari1.jpg",
    description:
      "Kenya is home to world-famous wildlife safaris, pristine beaches, breathtaking mountains, vibrant cities and unforgettable cultural experiences.",
    destinations: [
      "Maasai Mara",
      "Amboseli",
      "Tsavo East",
      "Tsavo West",
      "Lake Nakuru",
      "Samburu",
      "Diani Beach",
      "Watamu",
      "Lamu",
      "Mount Kenya",
      "Hell's Gate",
      "Aberdare",
    ],
  },

  {
    name: "Tanzania",
    slug: "tanzania",
    image: "/images/beach/beach4.jpg",
    description:
      "Discover the endless plains of Serengeti, Mount Kilimanjaro, Zanzibar beaches and spectacular wildlife adventures.",
    destinations: [
      "Serengeti",
      "Ngorongoro",
      "Zanzibar",
      "Mount Kilimanjaro",
      "Tarangire",
      "Lake Manyara",
      "Ruaha",
      "Mikumi",
      "Arusha",
      "Mafia Island",
      "Pemba Island",
      "Selous",
    ],
  },

  {
    name: "Uganda",
    slug: "uganda",
    image: "/images/gorilla/gorilla4.jpg",
    description:
      "Experience mountain gorillas, lush rainforests, waterfalls and the incredible Pearl of Africa.",
    destinations: [
      "Bwindi",
      "Queen Elizabeth",
      "Murchison Falls",
      "Kibale Forest",
      "Lake Bunyonyi",
      "Mgahinga",
      "Jinja",
      "Rwenzori",
      "Kidepo",
      "Entebbe",
    ],
  },

  {
    name: "Rwanda",
    slug: "rwanda",
    image: "/images/culture/culture4.jpg",
    description:
      "Explore Rwanda's clean cities, mountain gorillas, volcanoes and breathtaking landscapes.",
    destinations: [
      "Volcanoes NP",
      "Kigali",
      "Lake Kivu",
      "Nyungwe Forest",
      "Akagera",
      "Musanze",
      "King's Palace",
    ],
  },

  {
    name: "South Africa",
    slug: "south-africa",
    image: "/images/mountain/mountain4.jpg",
    description:
      "Experience Cape Town, Kruger National Park, Garden Route and world-class wine regions.",
    destinations: [
      "Cape Town",
      "Kruger",
      "Table Mountain",
      "Garden Route",
      "Johannesburg",
      "Durban",
      "Stellenbosch",
      "Robben Island",
      "Hermanus",
      "Blyde River Canyon",
    ],
  },

  {
    name: "Mauritius",
    slug: "mauritius",
    image: "/images/island/island3.jpg",
    description:
      "Luxury island escapes with crystal-clear lagoons, coral reefs and tropical beaches.",
    destinations: [
      "Grand Baie",
      "Le Morne",
      "Flic en Flac",
      "Chamarel",
      "Black River",
      "Belle Mare",
      "Blue Bay",
      "Trou aux Biches",
      "Port Louis",
      "Île aux Cerfs",
    ],
  },
];

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;

  const country = countries.find((item) => item.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <main className="bg-white">

      <section className="relative h-[70vh]">

        <Image
          src={country.image}
          alt={country.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">

          <div className="max-w-7xl mx-auto px-8 text-white">

            <h1 className="text-6xl font-black">
              {country.name}
            </h1>

            <p className="mt-6 text-xl max-w-3xl">
              {country.description}
            </p>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="flex items-center gap-3 mb-10">

          <Globe2 className="text-[#64D98B]" />

          <h2 className="text-4xl font-black">
            Top Destinations
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {country.destinations.map((place) => (

            <div
              key={place}
              className="rounded-2xl shadow-lg p-6 hover:shadow-xl transition bg-[#F8FBFC]"
            >

              <div className="flex items-center gap-3">

                <MapPin className="text-[#64D98B]" />

                <h3 className="text-xl font-bold">
                  {place}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}