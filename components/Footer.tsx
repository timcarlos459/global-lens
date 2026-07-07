"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#061521] text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <h2 className="text-3xl font-black">
            GLOBAL LENS
          </h2>

          <p className="text-[#64D98B] uppercase tracking-[4px] mt-2">
            Tours & Travel
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            Explore Africa through unforgettable safari adventures,
            luxury beach holidays, mountain trekking, gorilla experiences,
            cultural tours and island escapes.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Destinations</Link></li>
            <li><Link href="#">Tours</Link></li>
            <li><Link href="#">Gallery</Link></li>
            <li><Link href="#">Contact</Link></li>

          </ul>

        </div>

        {/* Experiences */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Experiences
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>🦁 Safari Adventures</li>
            <li>🏖 Beach Holidays</li>
            <li>⛰ Mountain Trekking</li>
            <li>🏝 Island Escapes</li>
            <li>🦍 Gorilla Trekking</li>
            <li>🎭 Cultural Tours</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex items-center gap-3">
              <MapPin className="text-[#64D98B]" size={20}/>
              Nairobi, Kenya
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#64D98B]" size={20}/>
              +254 700 000 000
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#64D98B]" size={20}/>
              info@globallenstours.com
            </div>

          </div>

          <div className="flex gap-5 mt-8">

          <FaFacebookF
  className="hover:text-[#64D98B] cursor-pointer transition"
  size={22}
/>

<FaInstagram
  className="hover:text-[#64D98B] cursor-pointer transition"
  size={22}
/>

<FaLinkedinIn
  className="hover:text-[#64D98B] cursor-pointer transition"
  size={22}
/>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © 2026 Global Lens Tours & Travel. All Rights Reserved.
          </p>

          <p className="text-gray-500 mt-3 md:mt-0">
            Designed with ❤️ by Global Lens Tours
          </p>

        </div>

      </div>

    </footer>
  );
}