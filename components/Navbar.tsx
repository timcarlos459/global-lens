"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Tours", href: "/tours" },
    { name: "Experiences", href: "/experiences" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

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

          {navLinks.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 font-medium ${
                pathname === link.href
                  ? "text-[#64D98B] border-b-2 border-[#64D98B] pb-1"
                  : "text-white hover:text-[#64D98B]"
              }`}
            >
              {link.name}
            </Link>

          ))}

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