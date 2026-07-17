export interface Country {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const countries: Country[] = [
  {
    name: "Kenya",
    slug: "kenya",
    image: "/images/safari/safari1.jpg",
    description: "Luxury safaris, beaches and mountains.",
  },
  {
    name: "Tanzania",
    slug: "tanzania",
    image: "/images/beach/beach4.jpg",
    description: "Home of Serengeti, Zanzibar and Kilimanjaro.",
  },
  {
    name: "Uganda",
    slug: "uganda",
    image: "/images/gorilla/gorilla4.jpg",
    description: "The Pearl of Africa and mountain gorillas.",
  },
  {
    name: "Rwanda",
    slug: "rwanda",
    image: "/images/culture/culture4.jpg",
    description: "Luxury gorilla trekking and rich culture.",
  },
  {
    name: "South Africa",
    slug: "south-africa",
    image: "/images/mountain/mountain4.jpg",
    description: "Cape Town, Kruger National Park and wine estates.",
  },
  {
    name: "Namibia",
    slug: "namibia",
    image: "/images/desert/sossusvlei4.jpg",
    description: "Deserts, wildlife and spectacular landscapes.",
  },
  {
    name: "Botswana",
    slug: "botswana",
    image: "/images/safari/safari3.jpg",
    description: "Okavango Delta and luxury safaris.",
  },
  {
    name: "Seychelles",
    slug: "seychelles",
    image: "/images/island/island1.jpg",
    description: "Luxury island escapes and pristine beaches.",
  },
  {
    name: "Zambia",
    slug: "zambia",
    image: "/images/safari/mikumi2.jpg",
    description: "Victoria Falls and unforgettable wildlife adventures.",
  },
];
