"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import type { Settings } from "@/types/settings";

interface Props {
  facebook: string;
  instagram: string;
  tiktok: string;
  linkedin: string;
  youtube: string;
  x: string;

  onChange: (field: keyof Settings, value: Settings[keyof Settings]) => void;
}

export default function SocialMediaSettings({
  facebook,
  instagram,
  tiktok,
  linkedin,
  youtube,
  x,
  onChange,
}: Props) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-black text-[#081B29]">Social Media</h2>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="relative">
          <FaFacebookF className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

          <input
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            placeholder="Facebook URL"
            value={facebook}
            onChange={(e) => onChange("facebook", e.target.value)}
          />
        </div>

        <div className="relative">
          <FaInstagram className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500" />

          <input
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            placeholder="Instagram URL"
            value={instagram}
            onChange={(e) => onChange("instagram", e.target.value)}
          />
        </div>

        <div className="relative">
          <FaTiktok className="absolute left-4 top-1/2 -translate-y-1/2 text-black" />

          <input
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            placeholder="TikTok URL"
            value={tiktok}
            onChange={(e) => onChange("tiktok", e.target.value)}
          />
        </div>

        <div className="relative">
          <FaLinkedinIn className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700" />

          <input
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            placeholder="LinkedIn URL"
            value={linkedin}
            onChange={(e) => onChange("linkedin", e.target.value)}
          />
        </div>

        <div className="relative">
          <FaYoutube className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600" />

          <input
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            placeholder="YouTube URL"
            value={youtube}
            onChange={(e) => onChange("youtube", e.target.value)}
          />
        </div>

        <div className="relative">
          <FaXTwitter className="absolute left-4 top-1/2 -translate-y-1/2 text-black" />

          <input
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 outline-none transition focus:border-[#64D98B] focus:bg-white"
            placeholder="X (Twitter) URL"
            value={x}
            onChange={(e) => onChange("x", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
