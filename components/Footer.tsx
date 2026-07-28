"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const experiences = [
  {
    label: "Safari Adventures",
    href: "/destinations/safari",
  },
  {
    label: "Beach Holidays",
    href: "/destinations/beach",
  },
  {
    label: "Mountain Trekking",
    href: "/destinations/mountain",
  },
  {
    label: "Island Escapes",
    href: "/destinations/island",
  },
  {
    label: "Gorilla Trekking",
    href: "/destinations/gorilla-trekking",
  },
  {
    label: "Cultural Tours",
    href: "/destinations/culture",
  },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061521] text-white">
      {/* Decorative Glow */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#64D98B]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#64D98B]/5 blur-3xl" />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* COMPANY */}

          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-tight">
                GLOBAL LENS
              </h2>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
                Tours & Travel
              </p>
            </Link>

            <p className="mt-7 max-w-sm leading-8 text-gray-400">
              Explore Africa through unforgettable safari adventures, luxury
              beach holidays, mountain trekking, gorilla experiences, cultural
              tours, and island escapes.
            </p>

            <Link
              href="/tours"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#64D98B] transition hover:text-white"
            >
              Explore Our Tours
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="mb-7 text-xl font-bold">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-gray-400 transition hover:text-[#64D98B]"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPERIENCES */}

          <div>
            <h3 className="mb-7 text-xl font-bold">Experiences</h3>

            <ul className="space-y-4">
              {experiences.map((experience) => (
                <li key={experience.label}>
                  <Link
                    href={experience.href}
                    className="group flex w-fit items-center gap-2 text-gray-400 transition hover:text-[#64D98B]"
                  >
                    <span>{experience.label}</span>

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="mb-7 text-xl font-bold">Contact Us</h3>

            <div className="space-y-5">
              {/* LOCATION */}

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#64D98B]/10">
                  <MapPin size={19} className="text-[#64D98B]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-gray-300">Nairobi, Kenya</p>
                </div>
              </div>

              {/* PHONE */}

              <a
                href="tel:+254700000000"
                className="flex items-start gap-4 transition hover:text-[#64D98B]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#64D98B]/10">
                  <Phone size={19} className="text-[#64D98B]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-gray-300">+254 700 000 000</p>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:info@globallenstours.com"
                className="flex items-start gap-4 transition hover:text-[#64D98B]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#64D98B]/10">
                  <Mail size={19} className="text-[#64D98B]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-gray-300">
                    info@globallenstours.com
                  </p>
                </div>
              </a>
            </div>

            {/* SOCIAL MEDIA */}

            <div className="mt-8 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:-translate-y-1 hover:border-[#64D98B] hover:bg-[#64D98B] hover:text-[#081B29]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-gray-500">
            © 2026 Global Lens Tours & Travel. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy"
              className="text-gray-500 transition hover:text-[#64D98B]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 transition hover:text-[#64D98B]"
            >
              Terms & Conditions
            </Link>

            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <p className="text-gray-600">
              Designed with <span className="text-[#64D98B]">♥</span> by Global
              Lens Tours
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
