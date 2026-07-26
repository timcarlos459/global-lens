import { Destination } from "../destinations/types";

export const tanzania: Destination[] = [
  {
    id: 53,

    slug: "mount-kilimanjaro",

    name: "Mount Kilimanjaro Trek",

    country: "Tanzania",

    category: "Mountain",

    tourType: "Adventure",

    image: "/images/mountain/mountain1.jpg",

    gallery: [
      "/images/mountain/mountain1.jpg",
      "/images/mountain/mountain2.jpg",
      "/images/mountain/mountain3.jpg",
      "/images/mountain/mountain4.jpg",
    ],

    rating: 5,

    duration: "4 Days",

    location: "Kilimanjaro National Park",

    overview:
      "Experience Africa's highest mountain with breathtaking scenery, unforgettable trekking routes and professional mountain guides.",

    description:
      "Challenge yourself by climbing the legendary Mount Kilimanjaro while enjoying spectacular landscapes, rainforest trails, alpine deserts and unforgettable summit views.",

    bestTime: "January - March & June - October",

    difficulty: "Challenging",

    groupSize: "1 - 15 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 3100, standard: 3400, peak: 3800 },
        deluxe: { low: 3900, standard: 4300, peak: 4700 },
        luxury: { low: 5200, standard: 5700, peak: 6300 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 2950, standard: 3250, peak: 3650 },
        deluxe: { low: 3750, standard: 4150, peak: 4550 },
        luxury: { low: 5050, standard: 5550, peak: 6150 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 2850, standard: 3150, peak: 3550 },
        deluxe: { low: 3650, standard: 4050, peak: 4450 },
        luxury: { low: 4950, standard: 5450, peak: 6050 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 2750, standard: 3050, peak: 3450 },
        deluxe: { low: 3550, standard: 3950, peak: 4350 },
        luxury: { low: 4850, standard: 5350, peak: 5950 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 2650, standard: 2950, peak: 3350 },
        deluxe: { low: 3450, standard: 3850, peak: 4250 },
        luxury: { low: 4750, standard: 5250, peak: 5850 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 2550, standard: 2850, peak: 3250 },
        deluxe: { low: 3350, standard: 3750, peak: 4150 },
        luxury: { low: 4650, standard: 5150, peak: 5750 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Trek Briefing",
        description:
          "Meet your guides, prepare your equipment and begin your Kilimanjaro adventure.",
      },
      {
        day: "Day 2",
        title: "Mountain Trek",
        description:
          "Trek through rainforest and moorland while enjoying spectacular scenery.",
      },
      {
        day: "Day 3",
        title: "Summit Adventure",
        description:
          "Continue climbing toward the summit while experiencing breathtaking panoramic views.",
      },
      {
        day: "Day 4",
        title: "Descent & Departure",
        description:
          "Descend safely before transferring back to your hotel or airport.",
      },
    ],

    highlights: [
      "Africa's Highest Mountain",
      "UNESCO World Heritage Site",
      "Professional Mountain Guides",
      "Rainforest Trails",
      "Summit Experience",
      "Photography Opportunities",
      "Scenic Camps",
      "Adventure Trekking",
    ],

    included: [
      "Mountain Guides",
      "Porters",
      "Camping Equipment",
      "Meals During Trek",
      "Park Fees",
      "Transfers",
    ],

    excluded: [
      "Flights",
      "Visa Fees",
      "Travel Insurance",
      "Personal Hiking Gear",
      "Tips",
      "Personal Expenses",
    ],
  },
  {
    id: 54,

    slug: "serengeti",

    name: "Serengeti National Park Safari",

    country: "Tanzania",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/serengeti1.jpg",

    gallery: [
      "/images/safari/serengeti1.jpg",
      "/images/safari/serengeti2.jpg",
      "/images/safari/serengeti3.jpg",
      "/images/safari/serengeti4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Serengeti National Park, Tanzania",

    overview:
      "Explore one of Africa's greatest wildlife destinations, home to the Great Migration, endless savannahs and incredible Big Five encounters.",

    description:
      "Embark on a luxury safari through the world-famous Serengeti National Park. Experience unforgettable game drives across vast plains, witness millions of wildebeest during the Great Migration, discover predators in their natural habitat, and relax in carefully selected luxury safari lodges surrounded by breathtaking landscapes.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: {
          low: 4800,
          standard: 5200,
          peak: 5700,
        },

        deluxe: {
          low: 6000,
          standard: 6500,
          peak: 7100,
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
        guests: 3,
        rooms: "2 Rooms",

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
        guests: 4,
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
        guests: 5,
        rooms: "3 Rooms",

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
        guests: 6,
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
        title: "Arrival in Serengeti",
        description:
          "Fly or drive into Serengeti National Park, check into your luxury safari lodge, enjoy lunch and an evening game drive before dinner.",
      },

      {
        day: "Day 2",
        title: "Full-Day Wildlife Safari",
        description:
          "Spend the entire day exploring Serengeti's endless plains searching for lions, elephants, leopards, buffaloes, giraffes, cheetahs and countless other wildlife.",
      },

      {
        day: "Day 3",
        title: "Great Migration Experience",
        description:
          "Follow the Great Wildebeest Migration depending on the season while enjoying spectacular photography opportunities and picnic lunches in the bush.",
      },

      {
        day: "Day 4",
        title: "Sunrise Safari & Cultural Visit",
        description:
          "Enjoy an early morning game drive before visiting a nearby Maasai community to experience authentic Tanzanian culture.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast at the lodge before transferring to the airstrip or returning to Arusha.",
      },
    ],

    highlights: [
      "Great Wildebeest Migration",
      "Big Five Safari",
      "Luxury Safari Lodges",
      "Professional Game Drives",
      "Sunrise & Sunset Safaris",
      "Maasai Cultural Experience",
      "Bird Watching",
      "World-Class Wildlife Photography",
    ],

    included: [
      "Luxury Accommodation",
      "Breakfast, Lunch & Dinner",
      "Professional Safari Guide",
      "4x4 Safari Vehicle",
      "Park Entrance Fees",
      "Airport Transfers",
      "Drinking Water",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Personal Expenses",
      "Tips & Gratuities",
    ],
  },
  {
    id: 55,

    slug: "lake-manyara",

    name: "Lake Manyara National Park Safari",

    country: "Tanzania",

    category: "Safari",

    tourType: "Family",

    image: "/images/safari/manyara1.jpg",

    gallery: [
      "/images/safari/manyara1.jpg",
      "/images/safari/manyara2.jpg",
      "/images/safari/manyara3.jpg",
      "/images/safari/manyara4.jpg",
    ],

    rating: 5,

    duration: "4 Days",

    location: "Lake Manyara National Park, Tanzania",

    overview:
      "Explore Tanzania's beautiful Lake Manyara National Park, famous for its tree-climbing lions, flamingos and breathtaking scenery.",

    description:
      "Experience exciting game drives through lush forests, open grasslands and the shores of Lake Manyara. Discover elephants, hippos, giraffes, flamingos and the park's famous tree-climbing lions while enjoying luxury safari accommodation.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4300, standard: 4700, peak: 5200 },
        deluxe: { low: 5400, standard: 5900, peak: 6500 },
        luxury: { low: 7000, standard: 7700, peak: 8400 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4100, standard: 4500, peak: 5000 },
        deluxe: { low: 5200, standard: 5700, peak: 6300 },
        luxury: { low: 6800, standard: 7500, peak: 8200 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 3900, standard: 4300, peak: 4800 },
        deluxe: { low: 5000, standard: 5500, peak: 6100 },
        luxury: { low: 6600, standard: 7300, peak: 8000 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 3700, standard: 4100, peak: 4600 },
        deluxe: { low: 4800, standard: 5300, peak: 5900 },
        luxury: { low: 6400, standard: 7100, peak: 7800 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 3500, standard: 3900, peak: 4400 },
        deluxe: { low: 4600, standard: 5100, peak: 5700 },
        luxury: { low: 6200, standard: 6900, peak: 7600 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3300, standard: 3700, peak: 4200 },
        deluxe: { low: 4400, standard: 4900, peak: 5500 },
        luxury: { low: 6000, standard: 6700, peak: 7400 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Evening Game Drive",
        description:
          "Arrive at your luxury lodge before enjoying an exciting sunset game drive.",
      },
      {
        day: "Day 2",
        title: "Lake Manyara Exploration",
        description:
          "Discover elephants, giraffes, flamingos and the famous tree-climbing lions.",
      },
      {
        day: "Day 3",
        title: "Bird Watching & Safari",
        description:
          "Explore different sections of the park while enjoying spectacular wildlife photography.",
      },
      {
        day: "Day 4",
        title: "Departure",
        description: "Breakfast before returning to Arusha.",
      },
    ],

    highlights: [
      "Tree-Climbing Lions",
      "Flamingos",
      "Elephants",
      "Luxury Lodges",
      "Game Drives",
      "Photography",
      "Bird Watching",
      "Great Rift Valley Views",
    ],

    included: [
      "Luxury Accommodation",
      "Meals",
      "Professional Guide",
      "Park Fees",
      "Transfers",
      "4x4 Safari Vehicle",
      "Drinking Water",
    ],

    excluded: [
      "Flights",
      "Visa",
      "Insurance",
      "Tips",
      "Alcohol",
      "Personal Expenses",
    ],
  },
  {
    id: 56,

    slug: "mikumi-national-park",

    name: "Mikumi National Park Safari",

    country: "Tanzania",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/mikumi1.jpg",

    gallery: [
      "/images/safari/mikumi1.jpg",
      "/images/safari/mikumi2.jpg",
      "/images/safari/mikumi3.jpg",
      "/images/safari/mikumi4.jpg",
    ],

    rating: 5,

    duration: "4 Days",

    location: "Mikumi National Park, Tanzania",

    overview:
      "Discover one of Tanzania's most accessible wildlife parks, famous for lions, elephants, zebras, giraffes and vast open plains.",

    description:
      "Experience unforgettable game drives through Mikumi National Park while staying in luxury safari lodges. The park offers incredible wildlife viewing with fewer crowds and spectacular scenery.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4200, standard: 4600, peak: 5100 },
        deluxe: { low: 5300, standard: 5800, peak: 6400 },
        luxury: { low: 6900, standard: 7600, peak: 8300 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4000, standard: 4400, peak: 4900 },
        deluxe: { low: 5100, standard: 5600, peak: 6200 },
        luxury: { low: 6700, standard: 7400, peak: 8100 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 3800, standard: 4200, peak: 4700 },
        deluxe: { low: 4900, standard: 5400, peak: 6000 },
        luxury: { low: 6500, standard: 7200, peak: 7900 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 3600, standard: 4000, peak: 4500 },
        deluxe: { low: 4700, standard: 5200, peak: 5800 },
        luxury: { low: 6300, standard: 7000, peak: 7700 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 3400, standard: 3800, peak: 4300 },
        deluxe: { low: 4500, standard: 5000, peak: 5600 },
        luxury: { low: 6100, standard: 6800, peak: 7500 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3200, standard: 3600, peak: 4100 },
        deluxe: { low: 4300, standard: 4800, peak: 5400 },
        luxury: { low: 5900, standard: 6600, peak: 7300 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Evening Game Drive",
        description:
          "Arrive at Mikumi National Park, check into your safari lodge and enjoy an evening game drive.",
      },
      {
        day: "Day 2",
        title: "Full-Day Safari",
        description:
          "Spend the day exploring Mikumi's plains while searching for lions, elephants, giraffes and zebras.",
      },
      {
        day: "Day 3",
        title: "Nature Walk & Wildlife Viewing",
        description:
          "Enjoy a guided nature experience before another afternoon safari drive.",
      },
      {
        day: "Day 4",
        title: "Departure",
        description:
          "Breakfast before checking out and departing for your next destination.",
      },
    ],

    highlights: [
      "Luxury Safari Lodges",
      "Big Game Viewing",
      "Elephants",
      "Lions",
      "Giraffes",
      "Zebras",
      "Photography",
      "Beautiful Landscapes",
    ],

    included: [
      "Luxury Accommodation",
      "Breakfast, Lunch & Dinner",
      "Professional Safari Guide",
      "4x4 Safari Vehicle",
      "Park Entrance Fees",
      "Airport Transfers",
      "Bottled Drinking Water",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Personal Expenses",
      "Tips & Gratuities",
    ],
  },
  {
    id: 57,

    slug: "ruaha-national-park",

    name: "Ruaha National Park Safari",

    country: "Tanzania",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/ruaha1.jpg",

    gallery: [
      "/images/safari/ruaha1.jpg",
      "/images/safari/ruaha2.jpg",
      "/images/safari/ruaha3.jpg",
      "/images/safari/ruaha4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Ruaha National Park, Tanzania",

    overview:
      "Discover Tanzania's largest national park featuring enormous elephant herds, predators and untouched wilderness.",

    description:
      "Ruaha National Park offers one of Africa's wildest safari experiences with spectacular landscapes, rivers and exceptional wildlife viewing away from the crowds.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4800, standard: 5200, peak: 5700 },
        deluxe: { low: 6000, standard: 6500, peak: 7100 },
        luxury: { low: 7800, standard: 8500, peak: 9200 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4600, standard: 5000, peak: 5500 },
        deluxe: { low: 5800, standard: 6300, peak: 6900 },
        luxury: { low: 7600, standard: 8300, peak: 9000 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 4400, standard: 4800, peak: 5300 },
        deluxe: { low: 5600, standard: 6100, peak: 6700 },
        luxury: { low: 7400, standard: 8100, peak: 8800 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 4200, standard: 4600, peak: 5100 },
        deluxe: { low: 5400, standard: 5900, peak: 6500 },
        luxury: { low: 7200, standard: 7900, peak: 8600 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 4000, standard: 4400, peak: 4900 },
        deluxe: { low: 5200, standard: 5700, peak: 6300 },
        luxury: { low: 7000, standard: 7700, peak: 8400 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3800, standard: 4200, peak: 4700 },
        deluxe: { low: 5000, standard: 5500, peak: 6100 },
        luxury: { low: 6800, standard: 7500, peak: 8200 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Evening Safari",
        description:
          "Arrive at Ruaha National Park, check into your luxury safari lodge and enjoy an evening game drive.",
      },
      {
        day: "Day 2",
        title: "Full-Day Game Drive",
        description:
          "Spend the day exploring Tanzania's largest national park in search of elephants, lions, leopards, wild dogs and buffalo.",
      },
      {
        day: "Day 3",
        title: "River Safari & Wildlife Viewing",
        description:
          "Explore the Great Ruaha River ecosystem while spotting crocodiles, hippos and hundreds of bird species.",
      },
      {
        day: "Day 4",
        title: "Morning & Evening Safari",
        description:
          "Enjoy another exciting day of game drives through Ruaha's untouched wilderness with expert safari guides.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast before checking out and transferring to the airport for your onward journey.",
      },
    ],

    highlights: [
      "Largest National Park in Tanzania",
      "Huge Elephant Herds",
      "African Wild Dogs",
      "Big Cats",
      "Luxury Safari Lodges",
      "Great Ruaha River",
      "Bird Watching",
      "Photography Safaris",
    ],

    included: [
      "Luxury Accommodation",
      "Breakfast, Lunch &Dinner",
      "Professional Safari Guide",
      "4x4 Safari Vehicle",
      "Park Entrance Fees",
      "Airport Transfers",
      "Bottled Drinking Water",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Personal Expenses",
      "Tips & Gratuities",
    ],
  },

  {
    id: 58,

    slug: "nyerere-national-park",

    name: "Nyerere National Park Safari",

    country: "Tanzania",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/selous1.jpg",

    gallery: [
      "/images/safari/selous1.jpg",
      "/images/safari/selous2.jpg",
      "/images/safari/selous3.jpg",
      "/images/safari/selous4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Nyerere National Park, Tanzania",

    overview:
      "Formerly Selous Game Reserve, Nyerere National Park offers river safaris, walking safaris and incredible wildlife encounters.",

    description:
      "Explore one of Africa's largest protected wildlife areas through boat safaris, game drives and guided walking safaris while staying in luxury safari camps.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4700, standard: 5100, peak: 5600 },
        deluxe: { low: 5900, standard: 6400, peak: 7000 },
        luxury: { low: 7700, standard: 8400, peak: 9100 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4500, standard: 4900, peak: 5400 },
        deluxe: { low: 5700, standard: 6200, peak: 6800 },
        luxury: { low: 7500, standard: 8200, peak: 8900 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 4300, standard: 4700, peak: 5200 },
        deluxe: { low: 5500, standard: 6000, peak: 6600 },
        luxury: { low: 7300, standard: 8000, peak: 8700 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 4100, standard: 4500, peak: 5000 },
        deluxe: { low: 5300, standard: 5800, peak: 6400 },
        luxury: { low: 7100, standard: 7800, peak: 8500 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 3900, standard: 4300, peak: 4800 },
        deluxe: { low: 5100, standard: 5600, peak: 6200 },
        luxury: { low: 6900, standard: 7600, peak: 8300 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3700, standard: 4100, peak: 4600 },
        deluxe: { low: 4900, standard: 5400, peak: 6000 },
        luxury: { low: 6700, standard: 7400, peak: 8100 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Sunset Boat Safari",
        description:
          "Arrive at Nyerere National Park, check into your luxury safari camp and enjoy a relaxing sunset boat safari along the Rufiji River.",
      },
      {
        day: "Day 2",
        title: "Full-Day Game Drive",
        description:
          "Spend the day exploring the vast wilderness in search of elephants, lions, buffaloes, giraffes, leopards and African wild dogs.",
      },
      {
        day: "Day 3",
        title: "Walking Safari Experience",
        description:
          "Enjoy a professionally guided walking safari through the African bush while learning about wildlife, birds and native plants.",
      },
      {
        day: "Day 4",
        title: "River Safari & Wildlife Photography",
        description:
          "Cruise along the Rufiji River to spot hippos, crocodiles and abundant birdlife before an afternoon game drive.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before checking out and transferring to the airport for your onward journey.",
      },
    ],

    highlights: [
      "Boat Safari on Rufiji River",
      "Walking Safari",
      "Luxury Safari Camps",
      "African Wild Dogs",
      "Large Elephant Herds",
      "Big Cats",
      "Bird Watching",
      "Photography Safaris",
    ],

    included: [
      "Luxury Accommodation",
      "Breakfast, Lunch & Dinner",
      "Professional Safari Guide",
      "4x4 Safari Vehicle",
      "Boat Safari",
      "Walking Safari",
      "Park Entrance Fees",
      "Airport Transfers",
      "Bottled Drinking Water",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Personal Expenses",
      "Tips & Gratuities",
    ],
  },
  {
    id: 59,

    slug: "tarangire",

    name: "Tarangire National Park Safari",

    country: "Tanzania",

    category: "Safari",

    tourType: "Wildlife",

    image: "/images/safari/tarangire1.jpg",

    gallery: [
      "/images/safari/tarangire1.jpg",
      "/images/safari/tarangire2.jpg",
      "/images/safari/tarangire3.jpg",
      "/images/safari/tarangire4.jpg",
    ],

    rating: 5,

    duration: "4 Days",

    location: "Tarangire National Park",

    overview:
      "Famous for giant baobab trees and one of Africa's largest elephant populations.",

    description:
      "Enjoy luxury safaris through Tarangire's breathtaking landscapes while spotting elephants, lions, zebras, giraffes and hundreds of bird species.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4600, standard: 5000, peak: 5500 },
        deluxe: { low: 5800, standard: 6300, peak: 6900 },
        luxury: { low: 7600, standard: 8300, peak: 9000 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4400, standard: 4800, peak: 5300 },
        deluxe: { low: 5600, standard: 6100, peak: 6700 },
        luxury: { low: 7400, standard: 8100, peak: 8800 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 4200, standard: 4600, peak: 5100 },
        deluxe: { low: 5400, standard: 5900, peak: 6500 },
        luxury: { low: 7200, standard: 7900, peak: 8600 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 4000, standard: 4400, peak: 4900 },
        deluxe: { low: 5200, standard: 5700, peak: 6300 },
        luxury: { low: 7000, standard: 7700, peak: 8400 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 3800, standard: 4200, peak: 4700 },
        deluxe: { low: 5000, standard: 5500, peak: 6100 },
        luxury: { low: 6800, standard: 7500, peak: 8200 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3600, standard: 4000, peak: 4500 },
        deluxe: { low: 4800, standard: 5300, peak: 5900 },
        luxury: { low: 6600, standard: 7300, peak: 8000 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Evening Game Drive",
        description:
          "Arrive at Tarangire National Park, check into your luxury lodge and enjoy an evening game drive through the famous baobab landscapes.",
      },
      {
        day: "Day 2",
        title: "Full-Day Safari Adventure",
        description:
          "Explore Tarangire's vast wilderness while searching for elephants, lions, giraffes, zebras, wildebeests and numerous bird species.",
      },
      {
        day: "Day 3",
        title: "Morning & Sunset Safari",
        description:
          "Experience two spectacular game drives and enjoy breathtaking African sunsets overlooking the Tarangire River.",
      },
      {
        day: "Day 4",
        title: "Departure",
        description:
          "Breakfast before checking out and transferring to the airport or your next destination.",
      },
    ],
    highlights: [
      "Elephant Herds",
      "Baobab Trees",
      "Luxury Lodges",
      "Game Drives",
      "Bird Watching",
      "Photography",
      "Sunset Safari",
      "Picnic Safari",
    ],

    included: [
      "Luxury Accommodation",
      "Meals",
      "Safari Vehicle",
      "Guide",
      "Park Fees",
      "Transfers",
    ],

    excluded: [
      "Flights",
      "Visa",
      "Insurance",
      "Alcohol",
      "Tips",
      "Personal Expenses",
    ],
  },
  {
    id: 60,

    slug: "zanzibar",

    name: "Zanzibar Beach Escape",

    country: "Tanzania",

    category: "Beach",

    tourType: "Honeymoon",

    image: "/images/beach/zanzibar1.jpg",

    gallery: [
      "/images/beach/zanzibar1.jpg",
      "/images/beach/zanzibar2.jpg",
      "/images/beach/zanzibar3.jpg",
      "/images/beach/zanzibar4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Zanzibar Island",

    overview:
      "Relax on the white sandy beaches of Zanzibar while enjoying luxury resorts, crystal-clear waters and unforgettable sunsets.",

    description:
      "Experience tropical luxury with beachfront accommodation, spice tours, snorkeling, diving, dolphin excursions and the historic Stone Town.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4400, standard: 4800, peak: 5300 },
        deluxe: { low: 5600, standard: 6100, peak: 6700 },
        luxury: { low: 7300, standard: 8000, peak: 8700 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4200, standard: 4600, peak: 5100 },
        deluxe: { low: 5400, standard: 5900, peak: 6500 },
        luxury: { low: 7100, standard: 7800, peak: 8500 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 4000, standard: 4400, peak: 4900 },
        deluxe: { low: 5200, standard: 5700, peak: 6300 },
        luxury: { low: 6900, standard: 7600, peak: 8300 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 3800, standard: 4200, peak: 4700 },
        deluxe: { low: 5000, standard: 5500, peak: 6100 },
        luxury: { low: 6700, standard: 7400, peak: 8100 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 3600, standard: 4000, peak: 4500 },
        deluxe: { low: 4800, standard: 5300, peak: 5900 },
        luxury: { low: 6500, standard: 7200, peak: 7900 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3400, standard: 3800, peak: 4300 },
        deluxe: { low: 4600, standard: 5100, peak: 5700 },
        luxury: { low: 6300, standard: 7000, peak: 7700 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Zanzibar",
        description:
          "Arrive at Zanzibar International Airport, transfer to your luxury beachfront resort and enjoy a relaxing evening by the Indian Ocean.",
      },
      {
        day: "Day 2",
        title: "Stone Town & Spice Tour",
        description:
          "Explore the UNESCO-listed Stone Town before visiting one of Zanzibar's famous spice plantations for a guided tour.",
      },
      {
        day: "Day 3",
        title: "Snorkeling & Dolphin Excursion",
        description:
          "Spend the day snorkeling among colorful coral reefs and enjoy an unforgettable dolphin excursion in the crystal-clear waters.",
      },
      {
        day: "Day 4",
        title: "Beach Leisure & Sunset Cruise",
        description:
          "Relax on Zanzibar's white sandy beaches before boarding a traditional dhow for a breathtaking sunset cruise.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before checking out and transferring to the airport for your onward flight.",
      },
    ],
    highlights: [
      "Stone Town",
      "White Sand Beaches",
      "Luxury Resorts",
      "Spice Farm Tour",
      "Snorkeling",
      "Scuba Diving",
      "Dolphin Tour",
      "Sunset Cruise",
    ],

    included: [
      "Luxury Resort",
      "Meals",
      "Airport Transfers",
      "Boat Excursions",
      "Breakfast",
      "Beach Activities",
    ],

    excluded: [
      "Flights",
      "Visa",
      "Travel Insurance",
      "Alcohol",
      "Tips",
      "Personal Expenses",
    ],
  },
  {
    id: 61,

    slug: "mafia-island",

    name: "Mafia Island Escape",

    country: "Tanzania",

    category: "Island",

    tourType: "Honeymoon",

    image: "/images/island/mafia1.jpg",

    gallery: [
      "/images/island/mafia1.jpg",
      "/images/island/mafia2.jpg",
      "/images/island/mafia3.jpg",
      "/images/island/mafia4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Mafia Island",

    overview:
      "Discover one of East Africa's hidden island paradises with untouched beaches and incredible marine life.",

    description:
      "Enjoy luxury beachfront accommodation, whale shark excursions, snorkeling, diving and peaceful tropical relaxation.",

    bestTime: "October - February",

    difficulty: "Easy",

    groupSize: "1 - 15 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4600, standard: 5000, peak: 5500 },
        deluxe: { low: 5900, standard: 6400, peak: 7000 },
        luxury: { low: 7700, standard: 8400, peak: 9100 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4400, standard: 4800, peak: 5300 },
        deluxe: { low: 5700, standard: 6200, peak: 6800 },
        luxury: { low: 7500, standard: 8200, peak: 8900 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 4200, standard: 4600, peak: 5100 },
        deluxe: { low: 5500, standard: 6000, peak: 6600 },
        luxury: { low: 7300, standard: 8000, peak: 8700 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 4000, standard: 4400, peak: 4900 },
        deluxe: { low: 5300, standard: 5800, peak: 6400 },
        luxury: { low: 7100, standard: 7800, peak: 8500 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 3800, standard: 4200, peak: 4700 },
        deluxe: { low: 5100, standard: 5600, peak: 6200 },
        luxury: { low: 6900, standard: 7600, peak: 8300 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3600, standard: 4000, peak: 4500 },
        deluxe: { low: 4900, standard: 5400, peak: 6000 },
        luxury: { low: 6700, standard: 7400, peak: 8100 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival on Mafia Island",
        description:
          "Arrive at Mafia Island Airport and transfer to your luxury beachfront resort. Spend the evening relaxing by the Indian Ocean.",
      },

      {
        day: "Day 2",
        title: "Whale Shark Adventure",
        description:
          "Experience an unforgettable excursion to swim alongside the gentle whale sharks before relaxing at your private beach resort.",
      },

      {
        day: "Day 3",
        title: "Marine Park Exploration",
        description:
          "Discover Mafia Island Marine Park with guided snorkeling and scuba diving among colorful coral reefs and tropical fish.",
      },

      {
        day: "Day 4",
        title: "Island Leisure",
        description:
          "Enjoy kayaking, paddle boarding, beach relaxation or a traditional dhow sunset cruise across the Indian Ocean.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast before checking out and transferring to Mafia Island Airport for your onward journey.",
      },
    ],

    highlights: [
      "Whale Sharks",
      "Luxury Resorts",
      "Marine Park",
      "Coral Reefs",
      "Private Beaches",
      "Snorkeling",
      "Scuba Diving",
      "Island Excursions",
    ],

    included: [
      "Luxury Accommodation",
      "Meals",
      "Transfers",
      "Boat Excursion",
      "Breakfast",
      "Marine Activities",
    ],

    excluded: [
      "Flights",
      "Visa",
      "Insurance",
      "Alcohol",
      "Tips",
      "Personal Expenses",
    ],
  },
  {
    id: 62,

    slug: "pemba-island",

    name: "Pemba Island Retreat",

    country: "Tanzania",

    category: "Island",

    tourType: "Luxury",

    image: "/images/island/pemba1.jpg",

    gallery: [
      "/images/island/pemba1.jpg",
      "/images/island/pemba2.jpg",
      "/images/island/pemba3.jpg",
      "/images/island/pemba4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Pemba Island",

    overview:
      "Escape to one of Africa's most peaceful tropical islands famous for diving and luxury eco-lodges.",

    description:
      "Experience pristine coral reefs, world-class diving, luxury accommodation and authentic island culture.",

    bestTime: "June - October",

    difficulty: "Easy",

    groupSize: "1 - 15 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 4500, standard: 4900, peak: 5400 },
        deluxe: { low: 5800, standard: 6300, peak: 6900 },
        luxury: { low: 7600, standard: 8300, peak: 9000 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 4300, standard: 4700, peak: 5200 },
        deluxe: { low: 5600, standard: 6100, peak: 6700 },
        luxury: { low: 7400, standard: 8100, peak: 8800 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 4100, standard: 4500, peak: 5000 },
        deluxe: { low: 5400, standard: 5900, peak: 6500 },
        luxury: { low: 7200, standard: 7900, peak: 8600 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 3900, standard: 4300, peak: 4800 },
        deluxe: { low: 5200, standard: 5700, peak: 6300 },
        luxury: { low: 7000, standard: 7700, peak: 8400 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 3700, standard: 4100, peak: 4600 },
        deluxe: { low: 5000, standard: 5500, peak: 6100 },
        luxury: { low: 6800, standard: 7500, peak: 8200 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 3500, standard: 3900, peak: 4400 },
        deluxe: { low: 4800, standard: 5300, peak: 5900 },
        luxury: { low: 6600, standard: 7300, peak: 8000 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival on Pemba Island",
        description:
          "Arrive on Pemba Island and transfer to your luxury eco-resort overlooking the Indian Ocean before enjoying a relaxing evening by the beach.",
      },

      {
        day: "Day 2",
        title: "Coral Reef Adventure",
        description:
          "Spend the day exploring Pemba's spectacular coral gardens through snorkeling or world-class scuba diving with professional guides.",
      },

      {
        day: "Day 3",
        title: "Island Culture Experience",
        description:
          "Visit traditional fishing villages, spice farms and local communities while learning about the island's rich Swahili heritage.",
      },

      {
        day: "Day 4",
        title: "Private Beach & Sunset Cruise",
        description:
          "Relax on secluded white-sand beaches before enjoying an unforgettable sunset dhow cruise across the turquoise waters.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before checking out and transferring to the airport for your onward flight.",
      },
    ],
    highlights: [
      "Luxury Island Resort",
      "Scuba Diving",
      "Coral Gardens",
      "Snorkeling",
      "Private Beaches",
      "Traditional Villages",
      "Sunset Cruises",
      "Marine Life",
    ],

    included: [
      "Accommodation",
      "Meals",
      "Transfers",
      "Boat Tours",
      "Breakfast",
      "Marine Activities",
    ],

    excluded: [
      "Flights",
      "Visa",
      "Insurance",
      "Tips",
      "Alcohol",
      "Personal Expenses",
    ],
  },
  {
    id: 63,

    slug: "arusha",

    name: "Arusha Cultural Experience",

    country: "Tanzania",

    category: "Culture",

    tourType: "Private",

    image: "/images/culture/arusha1.jpg",

    gallery: [
      "/images/culture/arusha1.jpg",
      "/images/culture/arusha2.jpg",
      "/images/culture/arusha3.jpg",
      "/images/culture/arusha4.jpg",
    ],

    rating: 5,

    duration: "3 Days",

    location: "Arusha",

    overview:
      "Discover Tanzania's safari capital while exploring vibrant markets, museums and Maasai traditions.",

    description:
      "Visit local villages, coffee plantations, cultural heritage centres and enjoy authentic Tanzanian cuisine.",

    bestTime: "Year Round",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 2600, standard: 2900, peak: 3300 },
        deluxe: { low: 3600, standard: 4000, peak: 4500 },
        luxury: { low: 5100, standard: 5600, peak: 6200 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 2450, standard: 2750, peak: 3150 },
        deluxe: { low: 3450, standard: 3850, peak: 4350 },
        luxury: { low: 4950, standard: 5450, peak: 6050 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 2300, standard: 2600, peak: 3000 },
        deluxe: { low: 3300, standard: 3700, peak: 4200 },
        luxury: { low: 4800, standard: 5300, peak: 5900 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 2150, standard: 2450, peak: 2850 },
        deluxe: { low: 3150, standard: 3550, peak: 4050 },
        luxury: { low: 4650, standard: 5150, peak: 5750 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 2000, standard: 2300, peak: 2700 },
        deluxe: { low: 3000, standard: 3400, peak: 3900 },
        luxury: { low: 4500, standard: 5000, peak: 5600 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 1850, standard: 2150, peak: 2550 },
        deluxe: { low: 2850, standard: 3250, peak: 3750 },
        luxury: { low: 4350, standard: 4850, peak: 5450 },
      },

      {
        guests: 7,
        rooms: "Quote Required",

        standard: { low: 0, standard: 0, peak: 0 },
        deluxe: { low: 0, standard: 0, peak: 0 },
        luxury: { low: 0, standard: 0, peak: 0 },
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Arusha City Tour",
        description:
          "Arrive in Arusha, check into your hotel and enjoy a guided city tour visiting local markets, museums and cultural landmarks.",
      },

      {
        day: "Day 2",
        title: "Coffee Plantation & Maasai Village",
        description:
          "Visit a traditional coffee plantation before experiencing authentic Maasai culture through music, dance and local crafts.",
      },

      {
        day: "Day 3",
        title: "Cultural Heritage Centre & Departure",
        description:
          "Explore the Cultural Heritage Centre for Tanzanian art and souvenirs before transferring to the airport for your onward journey.",
      },
    ],
    highlights: [
      "Maasai Village",
      "Coffee Tour",
      "Cultural Museum",
      "Local Markets",
      "Traditional Food",
      "City Tour",
      "Photography",
      "Local Crafts",
    ],

    included: [
      "Hotel",
      "Breakfast",
      "Guide",
      "Transfers",
      "Entrance Fees",
      "Cultural Activities",
    ],

    excluded: [
      "Flights",
      "Visa",
      "Insurance",
      "Alcohol",
      "Tips",
      "Personal Expenses",
    ],
  },
];
