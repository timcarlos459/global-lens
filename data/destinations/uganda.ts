import { Destination } from "../destinations/types";

export const uganda: Destination[] = [
  {
    id: 1,

    slug: "bwindi-impenetrable-forest",

    name: "Bwindi Gorilla Trekking Safari",

    country: "Uganda",

    category: "Gorilla Trekking",

    tourType: "Adventure",

    image: "/images/gorilla/bwindi1.jpg",

    gallery: [
      "/images/gorilla/bwindi1.jpg",
      "/images/gorilla/bwindi2.jpg",
      "/images/gorilla/bwindi3.jpg",
      "/images/gorilla/bwindi4.jpg",
    ],

    rating: 5,

    duration: "4 Days",

    location: "Bwindi Impenetrable National Park",

    overview:
      "Experience one of the world's greatest wildlife encounters by trekking through Uganda's ancient rainforest to meet endangered mountain gorillas.",

    description:
      "Bwindi Impenetrable National Park is home to nearly half of the world's remaining mountain gorillas. Trek through lush rainforest with expert guides before spending an unforgettable hour observing these magnificent primates in their natural habitat. Complete your journey with luxury eco-lodge accommodation and authentic Batwa cultural experiences.",

    bestTime: "June – August & December – February",

    difficulty: "Moderate",

    groupSize: "1 - 12 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 4900,
          standard: 5400,
          peak: 5900,
        },

        deluxe: {
          low: 6300,
          standard: 6900,
          peak: 7600,
        },

        luxury: {
          low: 8200,
          standard: 9000,
          peak: 9800,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 4700,
          standard: 5200,
          peak: 5700,
        },

        deluxe: {
          low: 6100,
          standard: 6700,
          peak: 7400,
        },

        luxury: {
          low: 8000,
          standard: 8800,
          peak: 9600,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 4500,
          standard: 5000,
          peak: 5500,
        },

        deluxe: {
          low: 5900,
          standard: 6500,
          peak: 7200,
        },

        luxury: {
          low: 7800,
          standard: 8600,
          peak: 9400,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 4300,
          standard: 4800,
          peak: 5300,
        },

        deluxe: {
          low: 5700,
          standard: 6300,
          peak: 7000,
        },

        luxury: {
          low: 7600,
          standard: 8400,
          peak: 9200,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 4100,
          standard: 4600,
          peak: 5100,
        },

        deluxe: {
          low: 5500,
          standard: 6100,
          peak: 6800,
        },

        luxury: {
          low: 7400,
          standard: 8200,
          peak: 9000,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 3900,
          standard: 4400,
          peak: 4900,
        },

        deluxe: {
          low: 5300,
          standard: 5900,
          peak: 6600,
        },

        luxury: {
          low: 7200,
          standard: 8000,
          peak: 8800,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival at Bwindi",
        description:
          "Arrive at Bwindi Impenetrable National Park, check into your luxury lodge and relax while enjoying breathtaking rainforest views.",
      },

      {
        day: "Day 2",
        title: "Mountain Gorilla Trekking",
        description:
          "Embark on a guided trek through the rainforest to locate a habituated mountain gorilla family before spending an unforgettable hour observing them in their natural habitat.",
      },

      {
        day: "Day 3",
        title: "Batwa Cultural Experience",
        description:
          "Visit the Batwa community, learn about their traditions, enjoy cultural performances and explore the surrounding rainforest trails.",
      },

      {
        day: "Day 4",
        title: "Departure",
        description:
          "Enjoy breakfast before transferring to the airport or continuing your Ugandan safari adventure.",
      },
    ],

    highlights: [
      "Mountain Gorilla Trekking",
      "Luxury Eco Lodge",
      "UNESCO World Heritage Site",
      "Batwa Cultural Experience",
      "Rainforest Hiking",
      "Bird Watching",
      "Photography",
      "Professional Guides",
    ],

    included: [
      "Luxury Accommodation",
      "All Meals",
      "Gorilla Trekking Permit",
      "Professional Guide",
      "Park Entrance Fees",
      "Airport Transfers",
      "Bottled Drinking Water",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
  {
    id: 2,

    slug: "queen-elizabeth-national-park",

    name: "Queen Elizabeth National Park Safari",

    country: "Uganda",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/queenelizabeth1.jpg",

    gallery: [
      "/images/safari/queenelizabeth1.jpg",
      "/images/safari/queenelizabeth2.jpg",
      "/images/safari/queenelizabeth3.jpg",
      "/images/safari/queenelizabeth4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Queen Elizabeth National Park",

    overview:
      "Discover Uganda's most famous safari destination, home to tree-climbing lions, elephants, buffaloes, hippos, leopards and over 600 bird species.",

    description:
      "Experience unforgettable game drives, luxury safari lodges and the spectacular Kazinga Channel boat cruise in one of Africa's most biodiverse national parks. Queen Elizabeth National Park offers incredible wildlife encounters, breathtaking crater lakes and exceptional photography opportunities.",

    bestTime: "June – August & December – February",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 4600,
          standard: 5000,
          peak: 5500,
        },

        deluxe: {
          low: 5800,
          standard: 6300,
          peak: 6900,
        },

        luxury: {
          low: 7500,
          standard: 8200,
          peak: 8900,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 4400,
          standard: 4800,
          peak: 5300,
        },

        deluxe: {
          low: 5600,
          standard: 6100,
          peak: 6700,
        },

        luxury: {
          low: 7300,
          standard: 8000,
          peak: 8700,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 4200,
          standard: 4600,
          peak: 5100,
        },

        deluxe: {
          low: 5400,
          standard: 5900,
          peak: 6500,
        },

        luxury: {
          low: 7100,
          standard: 7800,
          peak: 8500,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 4000,
          standard: 4400,
          peak: 4900,
        },

        deluxe: {
          low: 5200,
          standard: 5700,
          peak: 6300,
        },

        luxury: {
          low: 6900,
          standard: 7600,
          peak: 8300,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 3800,
          standard: 4200,
          peak: 4700,
        },

        deluxe: {
          low: 5000,
          standard: 5500,
          peak: 6100,
        },

        luxury: {
          low: 6700,
          standard: 7400,
          peak: 8100,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 3600,
          standard: 4000,
          peak: 4500,
        },

        deluxe: {
          low: 4800,
          standard: 5300,
          peak: 5900,
        },

        luxury: {
          low: 6500,
          standard: 7200,
          peak: 7900,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Evening Game Drive",
        description:
          "Arrive at Queen Elizabeth National Park, check into your luxury safari lodge and enjoy an evening game drive in search of elephants, buffaloes and antelopes.",
      },

      {
        day: "Day 2",
        title: "Morning Safari & Kazinga Channel Cruise",
        description:
          "Enjoy an early morning game drive before taking the famous Kazinga Channel boat cruise to view hippos, crocodiles, elephants and hundreds of bird species.",
      },

      {
        day: "Day 3",
        title: "Ishasha Tree-Climbing Lions",
        description:
          "Visit the Ishasha sector, famous for its rare tree-climbing lions, while exploring Uganda's spectacular southern savannah.",
      },

      {
        day: "Day 4",
        title: "Crater Lakes & Cultural Tour",
        description:
          "Explore the beautiful crater lakes surrounding the park before visiting a local community for an authentic cultural experience.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before transferring to Entebbe or continuing your Ugandan adventure.",
      },
    ],

    highlights: [
      "Tree-Climbing Lions",
      "Kazinga Channel Boat Cruise",
      "Luxury Safari Lodges",
      "Big Game Drives",
      "Over 600 Bird Species",
      "Crater Lakes",
      "Photography Opportunities",
      "Professional Safari Guides",
    ],

    included: [
      "Luxury Accommodation",
      "All Meals",
      "Game Drives",
      "Kazinga Boat Cruise",
      "Professional Guide",
      "Park Entrance Fees",
      "Airport Transfers",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
  {
    id: 3,

    slug: "murchison-falls-national-park",

    name: "Murchison Falls National Park Safari",

    country: "Uganda",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/murchison1.jpg",

    gallery: [
      "/images/safari/murchison1.jpg",
      "/images/safari/murchison2.jpg",
      "/images/safari/murchison3.jpg",
      "/images/safari/murchison4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Murchison Falls National Park",

    overview:
      "Experience Uganda's largest national park, home to the mighty Murchison Falls, the Big Five, Nile River cruises and spectacular wildlife encounters.",

    description:
      "Discover the breathtaking beauty of Murchison Falls National Park through exciting game drives, unforgettable Nile River cruises and guided hikes to the top of the world's most powerful waterfall. Stay in luxury safari lodges while enjoying incredible wildlife viewing and stunning landscapes.",

    bestTime: "June – September & December – February",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 4700,
          standard: 5100,
          peak: 5600,
        },

        deluxe: {
          low: 5900,
          standard: 6400,
          peak: 7000,
        },

        luxury: {
          low: 7700,
          standard: 8400,
          peak: 9100,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 4500,
          standard: 4900,
          peak: 5400,
        },

        deluxe: {
          low: 5700,
          standard: 6200,
          peak: 6800,
        },

        luxury: {
          low: 7500,
          standard: 8200,
          peak: 8900,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 4300,
          standard: 4700,
          peak: 5200,
        },

        deluxe: {
          low: 5500,
          standard: 6000,
          peak: 6600,
        },

        luxury: {
          low: 7300,
          standard: 8000,
          peak: 8700,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 4100,
          standard: 4500,
          peak: 5000,
        },

        deluxe: {
          low: 5300,
          standard: 5800,
          peak: 6400,
        },

        luxury: {
          low: 7100,
          standard: 7800,
          peak: 8500,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 3900,
          standard: 4300,
          peak: 4800,
        },

        deluxe: {
          low: 5100,
          standard: 5600,
          peak: 6200,
        },

        luxury: {
          low: 6900,
          standard: 7600,
          peak: 8300,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 3700,
          standard: 4100,
          peak: 4600,
        },

        deluxe: {
          low: 4900,
          standard: 5400,
          peak: 6000,
        },

        luxury: {
          low: 6700,
          standard: 7400,
          peak: 8100,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Lodge Check-in",
        description:
          "Arrive at Murchison Falls National Park, settle into your luxury safari lodge and enjoy an evening at leisure overlooking the Nile.",
      },

      {
        day: "Day 2",
        title: "Morning Game Drive",
        description:
          "Embark on an early morning safari searching for lions, elephants, giraffes, buffaloes, leopards and numerous antelope species across the northern plains.",
      },

      {
        day: "Day 3",
        title: "Nile Boat Cruise & Top of the Falls",
        description:
          "Enjoy a scenic boat cruise along the River Nile to the base of Murchison Falls before hiking to the top for breathtaking panoramic views.",
      },

      {
        day: "Day 4",
        title: "Delta Wildlife Safari",
        description:
          "Explore the Nile Delta for exceptional birdlife, hippos, crocodiles and more wildlife before returning to your luxury lodge.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before checking out and transferring to Entebbe or your next safari destination.",
      },
    ],

    highlights: [
      "Murchison Falls",
      "Nile River Cruise",
      "Big Five Safari",
      "Luxury Safari Lodge",
      "Top of the Falls Hike",
      "Bird Watching",
      "Photography",
      "Professional Safari Guides",
    ],

    included: [
      "Luxury Accommodation",
      "All Meals",
      "Game Drives",
      "Nile Boat Cruise",
      "Professional Safari Guide",
      "Park Entrance Fees",
      "Airport Transfers",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
  {
    id: 4,

    slug: "mgahinga-gorilla-national-park",

    name: "Mgahinga Gorilla National Park",

    country: "Uganda",

    category: "Gorilla Trekking",

    tourType: "Adventure",

    image: "/images/gorilla/mgahinga1.jpg",

    gallery: [
      "/images/gorilla/mgahinga1.jpg",
      "/images/gorilla/mgahinga2.jpg",
      "/images/gorilla/mgahinga3.jpg",
      "/images/gorilla/mgahinga4.jpg",
    ],

    rating: 5,

    duration: "4 Days",

    location: "Mgahinga Gorilla National Park",

    overview:
      "Explore Uganda's smallest national park, home to endangered mountain gorillas, golden monkeys and the spectacular Virunga Volcanoes.",

    description:
      "Experience unforgettable gorilla trekking, golden monkey tracking and volcano hiking while staying in luxury eco-lodges overlooking the magnificent Virunga Mountain Range. Mgahinga offers an intimate wildlife experience with fewer visitors and breathtaking scenery.",

    bestTime: "June – August & December – February",

    difficulty: "Moderate",

    groupSize: "1 - 12 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 4800,
          standard: 5300,
          peak: 5800,
        },

        deluxe: {
          low: 6200,
          standard: 6800,
          peak: 7500,
        },

        luxury: {
          low: 8100,
          standard: 8900,
          peak: 9700,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 4600,
          standard: 5100,
          peak: 5600,
        },

        deluxe: {
          low: 6000,
          standard: 6600,
          peak: 7300,
        },

        luxury: {
          low: 7900,
          standard: 8700,
          peak: 9500,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 4400,
          standard: 4900,
          peak: 5400,
        },

        deluxe: {
          low: 5800,
          standard: 6400,
          peak: 7100,
        },

        luxury: {
          low: 7700,
          standard: 8500,
          peak: 9300,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 4200,
          standard: 4700,
          peak: 5200,
        },

        deluxe: {
          low: 5600,
          standard: 6200,
          peak: 6900,
        },

        luxury: {
          low: 7500,
          standard: 8300,
          peak: 9100,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 4000,
          standard: 4500,
          peak: 5000,
        },

        deluxe: {
          low: 5400,
          standard: 6000,
          peak: 6700,
        },

        luxury: {
          low: 7300,
          standard: 8100,
          peak: 8900,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 3800,
          standard: 4300,
          peak: 4800,
        },

        deluxe: {
          low: 5200,
          standard: 5800,
          peak: 6500,
        },

        luxury: {
          low: 7100,
          standard: 7900,
          peak: 8700,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival at Mgahinga",
        description:
          "Arrive at Mgahinga Gorilla National Park, check into your luxury lodge and enjoy spectacular views of the Virunga Volcanoes.",
      },

      {
        day: "Day 2",
        title: "Mountain Gorilla Trekking",
        description:
          "Embark on an unforgettable trek through the rainforest to meet a habituated mountain gorilla family with experienced Uganda Wildlife Authority guides.",
      },

      {
        day: "Day 3",
        title: "Golden Monkey Tracking & Batwa Trail",
        description:
          "Track the rare golden monkeys before visiting the Batwa community to experience their rich cultural heritage and forest traditions.",
      },

      {
        day: "Day 4",
        title: "Departure",
        description:
          "After breakfast, check out and transfer to Entebbe or continue your East African adventure.",
      },
    ],

    highlights: [
      "Mountain Gorilla Trekking",
      "Golden Monkey Tracking",
      "Virunga Volcanoes",
      "Batwa Cultural Experience",
      "Luxury Eco Lodge",
      "Rainforest Hiking",
      "Photography",
      "Professional Guides",
    ],

    included: [
      "Luxury Accommodation",
      "All Meals",
      "Gorilla Trekking Permit",
      "Golden Monkey Permit",
      "Professional Guide",
      "Park Entrance Fees",
      "Airport Transfers",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
  {
    id: 5,

    slug: "jinja-source-of-the-nile",

    name: "Jinja – Source of the Nile Experience",

    country: "Uganda",

    category: "Adventure",

    tourType: "Adventure",

    image: "/images/adventure/jinja1.jpg",

    gallery: [
      "/images/adventure/jinja1.jpg",
      "/images/adventure/jinja2.jpg",
      "/images/adventure/jinja3.jpg",
      "/images/adventure/jinja4.jpg",
    ],

    rating: 5,

    duration: "4 Days",

    location: "Jinja, Uganda",

    overview:
      "Experience East Africa's adventure capital while discovering the Source of the Nile, thrilling water activities and rich colonial history.",

    description:
      "Enjoy luxury riverside accommodation as you explore the Source of the Nile, embark on unforgettable white-water rafting adventures, sunset cruises, quad biking, horseback riding and cultural experiences around the vibrant town of Jinja.",

    bestTime: "Year Round",

    difficulty: "Easy to Moderate",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 3500,
          standard: 3900,
          peak: 4400,
        },

        deluxe: {
          low: 4700,
          standard: 5200,
          peak: 5800,
        },

        luxury: {
          low: 6400,
          standard: 7100,
          peak: 7800,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 3300,
          standard: 3700,
          peak: 4200,
        },

        deluxe: {
          low: 4500,
          standard: 5000,
          peak: 5600,
        },

        luxury: {
          low: 6200,
          standard: 6900,
          peak: 7600,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 3100,
          standard: 3500,
          peak: 4000,
        },

        deluxe: {
          low: 4300,
          standard: 4800,
          peak: 5400,
        },

        luxury: {
          low: 6000,
          standard: 6700,
          peak: 7400,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 2900,
          standard: 3300,
          peak: 3800,
        },

        deluxe: {
          low: 4100,
          standard: 4600,
          peak: 5200,
        },

        luxury: {
          low: 5800,
          standard: 6500,
          peak: 7200,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 2700,
          standard: 3100,
          peak: 3600,
        },

        deluxe: {
          low: 3900,
          standard: 4400,
          peak: 5000,
        },

        luxury: {
          low: 5600,
          standard: 6300,
          peak: 7000,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 2500,
          standard: 2900,
          peak: 3400,
        },

        deluxe: {
          low: 3700,
          standard: 4200,
          peak: 4800,
        },

        luxury: {
          low: 5400,
          standard: 6100,
          peak: 6800,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jinja",
        description:
          "Arrive in Jinja, check into your luxury riverside resort and enjoy a relaxing evening overlooking the River Nile.",
      },

      {
        day: "Day 2",
        title: "Source of the Nile & Boat Cruise",
        description:
          "Visit the legendary Source of the Nile before enjoying a scenic sunset cruise while spotting birds and enjoying spectacular river views.",
      },

      {
        day: "Day 3",
        title: "Adventure Activities",
        description:
          "Choose between white-water rafting, bungee jumping, quad biking, horseback riding or kayaking depending on your adventure level.",
      },

      {
        day: "Day 4",
        title: "Departure",
        description:
          "Enjoy breakfast before checking out and transferring to Entebbe International Airport or your next destination.",
      },
    ],

    highlights: [
      "Source of the Nile",
      "White Water Rafting",
      "Luxury Riverside Resort",
      "Sunset Boat Cruise",
      "Quad Biking",
      "Horseback Riding",
      "Kayaking",
      "Photography",
    ],

    included: [
      "Luxury Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Source of the Nile Tour",
      "Sunset Cruise",
      "Professional Guide",
      "Entrance Fees",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Adventure Activity Fees",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
  {
    id: 6,

    slug: "rwenzori-mountains",

    name: "Rwenzori Mountains Adventure",

    country: "Uganda",

    category: "Mountain",

    tourType: "Adventure",

    image: "/images/mountain/rwenzori1.jpg",

    gallery: [
      "/images/mountain/rwenzori1.jpg",
      "/images/mountain/rwenzori2.jpg",
      "/images/mountain/rwenzori3.jpg",
      "/images/mountain/rwenzori4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Rwenzori Mountains National Park",

    overview:
      "Explore the legendary Mountains of the Moon through breathtaking alpine landscapes, glaciers, waterfalls and lush tropical forests.",

    description:
      "Discover one of Africa's most spectacular mountain destinations with guided hiking trails, luxury mountain lodges, unique vegetation zones and incredible panoramic views. The Rwenzori Mountains offer unforgettable adventures for nature lovers and outdoor enthusiasts.",

    bestTime: "June – August & December – February",

    difficulty: "Moderate",

    groupSize: "1 - 15 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 4300,
          standard: 4700,
          peak: 5200,
        },

        deluxe: {
          low: 5500,
          standard: 6000,
          peak: 6600,
        },

        luxury: {
          low: 7200,
          standard: 7900,
          peak: 8600,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 4100,
          standard: 4500,
          peak: 5000,
        },

        deluxe: {
          low: 5300,
          standard: 5800,
          peak: 6400,
        },

        luxury: {
          low: 7000,
          standard: 7700,
          peak: 8400,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 3900,
          standard: 4300,
          peak: 4800,
        },

        deluxe: {
          low: 5100,
          standard: 5600,
          peak: 6200,
        },

        luxury: {
          low: 6800,
          standard: 7500,
          peak: 8200,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 3700,
          standard: 4100,
          peak: 4600,
        },

        deluxe: {
          low: 4900,
          standard: 5400,
          peak: 6000,
        },

        luxury: {
          low: 6600,
          standard: 7300,
          peak: 8000,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 3500,
          standard: 3900,
          peak: 4400,
        },

        deluxe: {
          low: 4700,
          standard: 5200,
          peak: 5800,
        },

        luxury: {
          low: 6400,
          standard: 7100,
          peak: 7800,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 3300,
          standard: 3700,
          peak: 4200,
        },

        deluxe: {
          low: 4500,
          standard: 5000,
          peak: 5600,
        },

        luxury: {
          low: 6200,
          standard: 6900,
          peak: 7600,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Mountain Lodge",
        description:
          "Arrive at the foothills of the Rwenzori Mountains, check into your luxury mountain lodge and prepare for your adventure.",
      },

      {
        day: "Day 2",
        title: "Forest Hiking",
        description:
          "Begin your guided hike through lush tropical rainforest, crossing rivers, waterfalls and unique vegetation zones.",
      },

      {
        day: "Day 3",
        title: "Alpine Adventure",
        description:
          "Continue exploring higher elevations while enjoying breathtaking mountain scenery, glaciers and panoramic viewpoints.",
      },

      {
        day: "Day 4",
        title: "Nature & Cultural Experience",
        description:
          "Visit nearby Bakonzo communities, learn about local mountain culture and enjoy scenic nature walks before returning to your lodge.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before checking out and transferring to Entebbe or continuing your East African adventure.",
      },
    ],

    highlights: [
      "Mountains of the Moon",
      "UNESCO World Heritage Site",
      "Luxury Mountain Lodge",
      "Waterfalls",
      "Glacier Views",
      "Nature Photography",
      "Guided Hiking",
      "Bakonzo Cultural Experience",
    ],

    included: [
      "Luxury Accommodation",
      "All Meals",
      "Professional Mountain Guide",
      "Park Entrance Fees",
      "Airport Transfers",
      "Nature Walks",
      "Cultural Tour",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Personal Hiking Equipment",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
  {
    id: 7,

    slug: "kidepo-valley-national-park",

    name: "Kidepo Valley National Park Safari",

    country: "Uganda",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/kidepo1.jpg",

    gallery: [
      "/images/safari/kidepo1.jpg",
      "/images/safari/kidepo2.jpg",
      "/images/safari/kidepo3.jpg",
      "/images/safari/kidepo4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Kidepo Valley National Park",

    overview:
      "Experience Uganda's most remote and untouched safari destination, renowned for dramatic landscapes, abundant wildlife and authentic African wilderness.",

    description:
      "Discover one of Africa's hidden safari gems with luxury accommodation, spectacular game drives, cultural encounters with the Karamojong people and breathtaking savannah landscapes. Kidepo offers one of the most exclusive wildlife experiences in East Africa.",

    bestTime: "September – March",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 4600,
          standard: 5000,
          peak: 5500,
        },

        deluxe: {
          low: 5800,
          standard: 6300,
          peak: 6900,
        },

        luxury: {
          low: 7600,
          standard: 8300,
          peak: 9000,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 4400,
          standard: 4800,
          peak: 5300,
        },

        deluxe: {
          low: 5600,
          standard: 6100,
          peak: 6700,
        },

        luxury: {
          low: 7400,
          standard: 8100,
          peak: 8800,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 4200,
          standard: 4600,
          peak: 5100,
        },

        deluxe: {
          low: 5400,
          standard: 5900,
          peak: 6500,
        },

        luxury: {
          low: 7200,
          standard: 7900,
          peak: 8600,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 4000,
          standard: 4400,
          peak: 4900,
        },

        deluxe: {
          low: 5200,
          standard: 5700,
          peak: 6300,
        },

        luxury: {
          low: 7000,
          standard: 7700,
          peak: 8400,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 3800,
          standard: 4200,
          peak: 4700,
        },

        deluxe: {
          low: 5000,
          standard: 5500,
          peak: 6100,
        },

        luxury: {
          low: 6800,
          standard: 7500,
          peak: 8200,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 3600,
          standard: 4000,
          peak: 4500,
        },

        deluxe: {
          low: 4800,
          standard: 5300,
          peak: 5900,
        },

        luxury: {
          low: 6600,
          standard: 7300,
          peak: 8000,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival at Kidepo",
        description:
          "Arrive at Kidepo Valley National Park, check into your luxury safari lodge and enjoy spectacular sunset views over the Narus Valley.",
      },

      {
        day: "Day 2",
        title: "Morning & Evening Game Drives",
        description:
          "Explore the vast savannah searching for lions, elephants, cheetahs, buffaloes, giraffes and numerous antelope species.",
      },

      {
        day: "Day 3",
        title: "Karamojong Cultural Experience",
        description:
          "Visit the Karamojong community to learn about their traditions, lifestyle and unique cultural heritage before an afternoon wildlife drive.",
      },

      {
        day: "Day 4",
        title: "Nature Exploration",
        description:
          "Explore the Kidepo Valley, birdwatching hotspots and scenic viewpoints while enjoying one of Africa's last true wilderness areas.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before departing for Entebbe or continuing your East African safari.",
      },
    ],

    highlights: [
      "Untouched African Wilderness",
      "Luxury Safari Lodge",
      "Big Game Viewing",
      "Cheetahs & Lions",
      "Karamojong Culture",
      "Bird Watching",
      "Photography",
      "Professional Safari Guides",
    ],

    included: [
      "Luxury Accommodation",
      "All Meals",
      "Game Drives",
      "Professional Guide",
      "Park Entrance Fees",
      "Airport Transfers",
      "Cultural Visit",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
  {
    id: 8,

    slug: "entebbe-city-experience",

    name: "Entebbe City Experience",

    country: "Uganda",

    category: "Culture",

    tourType: "Private",

    image: "/images/culture/entebbe1.jpg",

    gallery: [
      "/images/culture/entebbe1.jpg",
      "/images/culture/entebbe2.jpg",
      "/images/culture/entebbe3.jpg",
      "/images/culture/entebbe4.jpg",
    ],

    rating: 5,

    duration: "3 Days",

    location: "Entebbe, Uganda",

    overview:
      "Discover Uganda's beautiful lakeside city through botanical gardens, wildlife sanctuaries, historic landmarks and luxury lakeside accommodation.",

    description:
      "Enjoy a relaxing luxury getaway in Entebbe while exploring Lake Victoria, the Uganda Wildlife Education Centre, Botanical Gardens, Ngamba Island Chimpanzee Sanctuary and vibrant local markets. This experience perfectly combines culture, wildlife and leisure.",

    bestTime: "Year Round",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 3200,
          standard: 3600,
          peak: 4100,
        },

        deluxe: {
          low: 4400,
          standard: 4900,
          peak: 5500,
        },

        luxury: {
          low: 6100,
          standard: 6800,
          peak: 7500,
        },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: {
          low: 3000,
          standard: 3400,
          peak: 3900,
        },

        deluxe: {
          low: 4200,
          standard: 4700,
          peak: 5300,
        },

        luxury: {
          low: 5900,
          standard: 6600,
          peak: 7300,
        },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: {
          low: 2800,
          standard: 3200,
          peak: 3700,
        },

        deluxe: {
          low: 4000,
          standard: 4500,
          peak: 5100,
        },

        luxury: {
          low: 5700,
          standard: 6400,
          peak: 7100,
        },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: {
          low: 2600,
          standard: 3000,
          peak: 3500,
        },

        deluxe: {
          low: 3800,
          standard: 4300,
          peak: 4900,
        },

        luxury: {
          low: 5500,
          standard: 6200,
          peak: 6900,
        },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: {
          low: 2400,
          standard: 2800,
          peak: 3300,
        },

        deluxe: {
          low: 3600,
          standard: 4100,
          peak: 4700,
        },

        luxury: {
          low: 5300,
          standard: 6000,
          peak: 6700,
        },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: {
          low: 2200,
          standard: 2600,
          peak: 3100,
        },

        deluxe: {
          low: 3400,
          standard: 3900,
          peak: 4500,
        },

        luxury: {
          low: 5100,
          standard: 5800,
          peak: 6500,
        },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        deluxe: {
          low: 0,
          standard: 0,
          peak: 0,
        },

        luxury: {
          low: 0,
          standard: 0,
          peak: 0,
        },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Lake Victoria",
        description:
          "Arrive in Entebbe, check into your luxury hotel and enjoy a relaxing evening overlooking the shores of Lake Victoria.",
      },

      {
        day: "Day 2",
        title: "City Tour & Wildlife",
        description:
          "Visit the Uganda Wildlife Education Centre, Entebbe Botanical Gardens and explore local markets before enjoying a sunset cruise on Lake Victoria.",
      },

      {
        day: "Day 3",
        title: "Ngamba Island & Departure",
        description:
          "Take a boat excursion to Ngamba Island Chimpanzee Sanctuary before transferring to Entebbe International Airport for departure.",
      },
    ],

    highlights: [
      "Lake Victoria",
      "Luxury Lakeside Hotel",
      "Uganda Wildlife Education Centre",
      "Botanical Gardens",
      "Ngamba Island",
      "Sunset Cruise",
      "Photography",
      "Local Markets",
    ],

    included: [
      "Luxury Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "City Tour",
      "Lake Victoria Cruise",
      "Professional Guide",
      "Entrance Fees",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Lunch & Dinner",
      "Alcoholic Drinks",
      "Tips & Gratuities",
      "Personal Expenses",
    ],
  },
];
