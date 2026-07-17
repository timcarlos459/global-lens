"use client";

import Image from "next/image";

interface AccommodationProps {
  standardImage: string;
  deluxeImage: string;
  luxuryImage: string;
}

export default function Accommodation({
  standardImage,
  deluxeImage,
  luxuryImage,
}: AccommodationProps) {
  const rooms = [
    {
      title: "Standard Room",
      image: standardImage,
      description:
        "Comfortable rooms featuring cozy interiors, ensuite bathrooms, Wi-Fi, and all the essentials for a relaxing safari stay.",
      features: ["Queen Bed", "Private Bathroom", "Free Wi-Fi", "Garden View"],
    },
    {
      title: "Deluxe Room",
      image: deluxeImage,
      description:
        "Spacious accommodation with premium furnishings, upgraded amenities, private balconies, and exceptional comfort.",
      features: ["King Bed", "Private Balcony", "Mini Bar", "Safari View"],
    },
    {
      title: "Luxury Suite",
      image: luxuryImage,
      description:
        "Exclusive suites offering panoramic views, personalized service, luxury interiors, and unforgettable comfort.",
      features: [
        "Luxury King Bed",
        "Private Lounge",
        "Premium Bathroom",
        "Panoramic View",
      ],
    },
  ];

  return (
    <section className="space-y-12">
      <div>
        <span className="rounded-full bg-[#64D98B]/15 px-5 py-2 font-semibold text-[#64D98B]">
          Accommodation
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#081B29]">
          Stay in Exceptional Comfort
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-gray-600">
          Every tour includes carefully selected accommodation ranging from
          comfortable lodges to world-class luxury resorts, ensuring your stay
          is as memorable as your adventure.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {rooms.map((room) => (
          <div
            key={room.title}
            className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-72">
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 p-8">
              <h3 className="text-2xl font-bold text-[#081B29]">
                {room.title}
              </h3>

              <p className="leading-8 text-gray-600">{room.description}</p>

              <ul className="space-y-3">
                {room.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#64D98B] font-bold text-white">
                      ✓
                    </div>

                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
