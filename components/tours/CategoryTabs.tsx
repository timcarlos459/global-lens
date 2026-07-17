"use client";

interface Props {
  active: string;
  onChange: (category: string) => void;
}

const categories = [
  "All",
  "Luxury",
  "Family",
  "Adventure",
  "Honeymoon",
  "Wildlife",
  "Private",
  "Photography",
];

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <section>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
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
