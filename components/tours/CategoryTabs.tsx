"use client";

import { useState } from "react";

const categories = [
  "All",
  "Safari",
  "Beach",
  "Mountain",
  "Island",
  "Culture",
  "Gorilla Trekking",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("All");

  return (
    <section>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              active === category
                ? "bg-[#64D98B] text-[#081B29] shadow-lg"
                : "bg-white border border-gray-200 hover:border-[#64D98B] hover:text-[#081B29]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
