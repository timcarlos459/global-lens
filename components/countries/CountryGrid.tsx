import { countries } from "@/data/countries";
import CountryCard from "./CountryCard";

export default function CountryGrid() {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <CountryCard key={country.slug} country={country} />
      ))}
    </div>
  );
}
