"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { countries, categories, tours } from "@/data/navigation";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#081B29]/90 backdrop-blur-xl shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo/logo.png"
            alt="Global Lens Tours & Travel"
            width={60}
            height={60}
            priority
          />

          <div>
            <h1 className="text-white font-black text-2xl tracking-wide">
              GLOBAL LENS
            </h1>

            <p className="text-[#64D98B] uppercase tracking-[5px] text-xs">
              Tours & Travel
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Home */}

          <Link
            href="/"
            className={`font-medium ${
              pathname === "/"
                ? "text-[#64D98B]"
                : "text-white hover:text-[#64D98B]"
            }`}
          >
            Home
          </Link>

          {/* DESTINATIONS */}

          <div
            className="relative"
            onMouseEnter={() => setDestinationOpen(true)}
            onMouseLeave={() => setDestinationOpen(false)}
          >
            <button className="flex items-center gap-1 text-white hover:text-[#64D98B]">
              Destinations
              <ChevronDown size={16} />
            </button>

            {destinationOpen && (
              <div className="absolute left-0 mt-6 w-175 rounded-3xl bg-white shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-12">
                  {/* Countries */}

                  <div>
                    <h3 className="font-black text-xl mb-5 text-[#081B29]">
                      Countries
                    </h3>

                    <div className="space-y-3">
                      {countries.map((country) => (
                        <Link
                          key={country.slug}
                          href={`/countries/${country.slug}`}
                          className="block text-gray-600 hover:text-[#64D98B]"
                        >
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}

                  <div>
                    <h3 className="font-black text-xl mb-5 text-[#081B29]">
                      Categories
                    </h3>

                    <div className="grid grid-cols-2 gap-y-3">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/destinations/category/${category.slug}`}
                          className="text-gray-600 hover:text-[#64D98B]"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* TOURS */}

          <div
            className="relative"
            onMouseEnter={() => setTourOpen(true)}
            onMouseLeave={() => setTourOpen(false)}
          >
            <button className="flex items-center gap-1 text-white hover:text-[#64D98B]">
              Tours
              <ChevronDown size={16} />
            </button>

            {tourOpen && (
              <div className="absolute left-0 mt-6 w-72 rounded-3xl bg-white shadow-xl p-6">
                <div className="space-y-3">
                  {tours.map((tour) => (
                    <Link
                      key={tour.slug}
                      href={`/tours/${tour.slug}`}
                      className="block text-gray-600 hover:text-[#64D98B]"
                    >
                      {tour.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/experiences" className="text-white hover:text-[#64D98B]">
            Experiences
          </Link>

          <Link href="/about" className="text-white hover:text-[#64D98B]">
            About
          </Link>

          <Link href="/contact" className="text-white hover:text-[#64D98B]">
            Contact
          </Link>
        </nav>

        {/* Book Button */}
        <Link
          href="/booking"
          className="hidden lg:inline-flex bg-[#64D98B] hover:bg-green-500 transition-all duration-300 px-7 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
