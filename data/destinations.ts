export type Season = "low" | "standard" | "peak";

export interface SeasonalPrice {
  low: number;
  standard: number;
  peak: number;
}

export interface RoomOccupancy {
  guests: number;
  rooms: string;

  standard: SeasonalPrice;
  deluxe: SeasonalPrice;
  luxury: SeasonalPrice;
}

export interface Destination {
  id: number;

  slug: string;

  name: string;

  country: string;

  category: string;

  image: string;

  gallery: string[];

  rating: number;

  duration: string;

  location: string;

  overview: string;

  description: string;

  bestTime: string;

  difficulty: string;

  groupSize: string;

  roomOccupancy: RoomOccupancy[];

  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];

  highlights: string[];

  included: string[];

  excluded: string[];
}

export const destinations: Destination[] = [
  {
    id: 3,

    slug: "mount-kilimanjaro",

    name: "Mount Kilimanjaro Trek",

    country: "Tanzania",

    category: "Mountain",

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
    id: 4,

    slug: "bwindi-gorilla-trekking",

    name: "Bwindi Gorilla Trekking",

    country: "Uganda",

    category: "Safari",

    image: "/images/gorilla/gorilla1.jpg",

    gallery: [
      "/images/gorilla/gorilla1.jpg",
      "/images/gorilla/gorilla2.jpg",
      "/images/gorilla/gorilla3.jpg",
      "/images/gorilla/gorilla4.jpg",
    ],

    rating: 5,

    duration: "3 Days",

    location: "Bwindi Impenetrable National Park",

    overview:
      "Meet the endangered Mountain Gorillas in their natural rainforest habitat.",

    description:
      "Experience one of Africa's most unforgettable wildlife adventures by trekking through Bwindi Forest to spend time with a gorilla family in their natural environment.",

    bestTime: "June - September & December - February",

    difficulty: "Moderate",

    groupSize: "1 - 12 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 3200, standard: 3500, peak: 3900 },
        deluxe: { low: 4100, standard: 4500, peak: 4900 },
        luxury: { low: 5600, standard: 6100, peak: 6700 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 3050, standard: 3350, peak: 3750 },
        deluxe: { low: 3950, standard: 4350, peak: 4750 },
        luxury: { low: 5450, standard: 5950, peak: 6550 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 2950, standard: 3250, peak: 3650 },
        deluxe: { low: 3850, standard: 4250, peak: 4650 },
        luxury: { low: 5350, standard: 5850, peak: 6450 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 2850, standard: 3150, peak: 3550 },
        deluxe: { low: 3750, standard: 4150, peak: 4550 },
        luxury: { low: 5250, standard: 5750, peak: 6350 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 2750, standard: 3050, peak: 3450 },
        deluxe: { low: 3650, standard: 4050, peak: 4450 },
        luxury: { low: 5150, standard: 5650, peak: 6250 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 2650, standard: 2950, peak: 3350 },
        deluxe: { low: 3550, standard: 3950, peak: 4350 },
        luxury: { low: 5050, standard: 5550, peak: 6150 },
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
        title: "Arrival in Bwindi",
        description:
          "Transfer to Bwindi National Park and relax at your forest lodge.",
      },
      {
        day: "Day 2",
        title: "Gorilla Trekking",
        description:
          "Spend the day trekking through the rainforest to encounter a mountain gorilla family.",
      },
      {
        day: "Day 3",
        title: "Departure",
        description: "Breakfast before departing for Kampala or Kigali.",
      },
    ],

    highlights: [
      "Mountain Gorilla Trekking",
      "UNESCO World Heritage Site",
      "Rainforest Adventure",
      "Professional Guides",
      "Photography Opportunities",
      "Luxury Forest Lodges",
      "Unique Wildlife Experience",
      "Nature Walks",
    ],

    included: [
      "Luxury Accommodation",
      "Gorilla Permit",
      "Professional Guide",
      "Meals",
      "Park Fees",
      "Airport Transfers",
    ],

    excluded: [
      "Flights",
      "Visa Fees",
      "Travel Insurance",
      "Alcoholic Drinks",
      "Personal Expenses",
      "Tips",
    ],
  },
  {
    id: 5,

    slug: "maasai-cultural-experience",

    name: "Maasai Cultural Experience",

    country: "Kenya",

    category: "Culture",

    image: "/images/culture/culture1.jpg",

    gallery: [
      "/images/culture/culture1.jpg",
      "/images/culture/culture2.jpg",
      "/images/culture/culture3.jpg",
      "/images/culture/culture4.jpg",
    ],
    rating: 5,

    duration: "2 Days",

    location: "Kajiado County, Kenya",

    overview:
      "Discover the traditions, culture and heritage of the Maasai people.",

    description:
      "Immerse yourself in authentic Maasai traditions through cultural dances, village visits, storytelling, traditional cuisine and guided experiences with local elders.",

    bestTime: "All Year Round",

    difficulty: "Easy",

    groupSize: "1 - 30 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 1500, standard: 1650, peak: 1800 },
        deluxe: { low: 2100, standard: 2300, peak: 2500 },
        luxury: { low: 2900, standard: 3200, peak: 3500 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 1450, standard: 1600, peak: 1750 },
        deluxe: { low: 2050, standard: 2250, peak: 2450 },
        luxury: { low: 2850, standard: 3150, peak: 3450 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 1400, standard: 1550, peak: 1700 },
        deluxe: { low: 2000, standard: 2200, peak: 2400 },
        luxury: { low: 2800, standard: 3100, peak: 3400 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 1350, standard: 1500, peak: 1650 },
        deluxe: { low: 1950, standard: 2150, peak: 2350 },
        luxury: { low: 2750, standard: 3050, peak: 3350 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 1300, standard: 1450, peak: 1600 },
        deluxe: { low: 1900, standard: 2100, peak: 2300 },
        luxury: { low: 2700, standard: 3000, peak: 3300 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 1250, standard: 1400, peak: 1550 },
        deluxe: { low: 1850, standard: 2050, peak: 2250 },
        luxury: { low: 2650, standard: 2950, peak: 3250 },
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
        title: "Village Experience",
        description:
          "Visit a traditional Maasai village and enjoy cultural dances and storytelling.",
      },
      {
        day: "Day 2",
        title: "Nature Walk & Departure",
        description:
          "Guided nature walk followed by breakfast before departure.",
      },
    ],

    highlights: [
      "Traditional Maasai Village",
      "Cultural Performances",
      "Traditional Cuisine",
      "Local Storytelling",
      "Photography",
      "Nature Walks",
      "Craft Market",
      "Authentic Experience",
    ],

    included: [
      "Accommodation",
      "Meals",
      "Village Entry",
      "Professional Guide",
      "Transportation",
      "Cultural Activities",
    ],

    excluded: [
      "Flights",
      "Travel Insurance",
      "Personal Shopping",
      "Alcoholic Drinks",
      "Tips",
      "Personal Expenses",
    ],
  },
  {
    id: 6,

    slug: "seychelles-luxury-escape",

    name: "Seychelles Luxury Escape",

    country: "Seychelles",

    category: "Island",

    image: "/images/beach/beach2.jpg",

    gallery: [
      "/images/beach/beach1.jpg",
      "/images/beach/beach2.jpg",
      "/images/beach/beach3.jpg",
      "/images/beach/beach4.jpg",
    ],

    rating: 5,

    duration: "5 Days",

    location: "Mahé, Seychelles",

    overview:
      "Escape to one of the world's most luxurious island destinations, surrounded by crystal-clear waters, white sandy beaches and breathtaking tropical scenery.",

    description:
      "Experience the beauty of Seychelles while staying in world-class beachfront resorts. Enjoy island hopping, snorkeling, scuba diving, sunset cruises, luxury dining and unforgettable Indian Ocean experiences.",

    bestTime: "April - May & October - November",

    difficulty: "Easy",

    groupSize: "1 - 20 Guests",

    roomOccupancy: [
      {
        guests: 1,
        rooms: "1 Room",

        standard: { low: 5700, standard: 6200, peak: 6800 },
        deluxe: { low: 7100, standard: 7700, peak: 8400 },
        luxury: { low: 9100, standard: 9900, peak: 10800 },
      },

      {
        guests: 2,
        rooms: "1 Room",

        standard: { low: 5500, standard: 6000, peak: 6600 },
        deluxe: { low: 6900, standard: 7500, peak: 8200 },
        luxury: { low: 8900, standard: 9700, peak: 10600 },
      },

      {
        guests: 3,
        rooms: "2 Rooms",

        standard: { low: 5350, standard: 5850, peak: 6450 },
        deluxe: { low: 6750, standard: 7350, peak: 8050 },
        luxury: { low: 8750, standard: 9550, peak: 10450 },
      },

      {
        guests: 4,
        rooms: "2 Rooms",

        standard: { low: 5200, standard: 5700, peak: 6300 },
        deluxe: { low: 6600, standard: 7200, peak: 7900 },
        luxury: { low: 8600, standard: 9400, peak: 10300 },
      },

      {
        guests: 5,
        rooms: "3 Rooms",

        standard: { low: 5050, standard: 5550, peak: 6150 },
        deluxe: { low: 6450, standard: 7050, peak: 7750 },
        luxury: { low: 8450, standard: 9250, peak: 10150 },
      },

      {
        guests: 6,
        rooms: "3 Rooms",

        standard: { low: 4900, standard: 5400, peak: 6000 },
        deluxe: { low: 6300, standard: 6900, peak: 7600 },
        luxury: { low: 8300, standard: 9100, peak: 10000 },
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
        title: "Arrival in Seychelles",
        description:
          "Arrive at Mahé International Airport, transfer to your luxury beachfront resort and enjoy a relaxing evening by the ocean.",
      },

      {
        day: "Day 2",
        title: "Island Adventure",
        description:
          "Explore nearby islands, enjoy snorkeling in crystal-clear waters and relax on some of the world's most beautiful beaches.",
      },

      {
        day: "Day 3",
        title: "Luxury Leisure",
        description:
          "Spend the day enjoying spa treatments, optional scuba diving, yacht cruises or simply relaxing at your resort.",
      },

      {
        day: "Day 4",
        title: "Nature & Culture",
        description:
          "Visit botanical gardens, local markets and scenic viewpoints while discovering the rich culture of Seychelles.",
      },

      {
        day: "Day 5",
        title: "Departure",
        description:
          "Enjoy breakfast before checking out and transferring to the airport for your flight home.",
      },
    ],

    highlights: [
      "Luxury Beach Resorts",
      "White Sandy Beaches",
      "Island Hopping",
      "Snorkeling",
      "Scuba Diving",
      "Sunset Cruises",
      "Indian Ocean Views",
      "Luxury Spa Experience",
    ],

    included: [
      "Luxury Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Island Excursions",
      "Professional Guide",
      "Bottled Drinking Water",
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Tips & Gratuities",
    ],
  },
];
