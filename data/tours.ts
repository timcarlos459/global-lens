export type Tour = {
  id: number;
  slug: string;
  title: string;
  country: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
  description: string;
};

export const tours: Tour[] = [
  {
    id: 1,
    slug: "maasai-cultural-experience",
    title: "Maasai Cultural Experience",
    country: "Kenya",
    image: "/images/culture/culture1.jpg",
    duration: "3 Days",
    price: "$1,550 PP",
    rating: 5,
    description:
      "Immerse yourself in authentic Maasai traditions, cultural dances, local cuisine and village life with experienced local guides.",
  },

  {
    id: 2,
    slug: "diani-beach-escape",
    title: "Diani Beach Escape",
    country: "Kenya",
    image: "/images/beach/beach1.jpg",
    duration: "3 Days",
    price: "$1,800 PP",
    rating: 5,
    description:
      "Relax on the award-winning white sandy beaches of Diani while enjoying luxury beachfront accommodation and exciting ocean activities.",
  },

  {
    id: 3,
    slug: "bwindi-gorilla-trekking",
    title: "Bwindi Gorilla Trekking",
    country: "Uganda",
    image: "/images/gorilla/gorilla1.jpg",
    duration: "4 Days",
    price: "$3,300 PP",
    rating: 5,
    description:
      "Encounter endangered mountain gorillas in Bwindi Impenetrable National Park on one of Africa's most unforgettable wildlife adventures.",
  },

  {
    id: 4,
    slug: "kilimanjaro-adventure",
    title: "Mount Kilimanjaro Adventure",
    country: "Tanzania",
    image: "/images/mountain/mountain1.jpg",
    duration: "3 Days",
    price: "$2,900 PP",
    rating: 5,
    description:
      "Experience an unforgettable guided climb to Africa's highest mountain while enjoying breathtaking scenery and expert support.",
  },

  {
    id: 5,
    slug: "maasai-mara-luxury-safari",
    title: "Maasai Mara Luxury Safari",
    country: "Kenya",
    image: "/images/safari/safari1.jpg",
    duration: "3 Days",
    price: "$3,250 PP",
    rating: 5,
    description:
      "Discover the Big Five and the spectacular Maasai Mara in luxury safari vehicles with premium accommodation and experienced guides.",
  },

  {
    id: 6,
    slug: "seychelles-luxury-escape",
    title: "Seychelles Luxury Escape",
    country: "Seychelles",
    image: "/images/island/island1.jpg",
    duration: "4 Days",
    price: "$5,400 PP",
    rating: 5,
    description:
      "Escape to exclusive island resorts featuring private beaches, crystal-clear waters, fine dining and world-class luxury experiences.",
  },
];