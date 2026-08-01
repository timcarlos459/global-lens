"use client";

import type { Settings } from "@/types/settings";

interface SeoSettingsProps {
  title: string;
  description: string;
  keywords: string;

  onChange: (field: keyof Settings, value: Settings[keyof Settings]) => void;
}

export default function SeoSettings({
  title,
  description,
  keywords,
  onChange,
}: SeoSettingsProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-black text-[#081B29]">SEO Settings</h2>

      <div className="space-y-6">
        {/* Meta Title */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#081B29]">
            Meta Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => onChange("meta_title", e.target.value)}
            placeholder="Global Lens Tours & Travel"
            className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-[#64D98B]"
          />
        </div>

        {/* Meta Description */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#081B29]">
            Meta Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => onChange("meta_description", e.target.value)}
            placeholder="Describe your travel agency..."
            className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-[#64D98B]"
          />
        </div>

        {/* Keywords */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#081B29]">
            Keywords
          </label>

          <textarea
            rows={3}
            value={keywords}
            onChange={(e) => onChange("keywords", e.target.value)}
            placeholder="travel, kenya, safari, tours..."
            className="w-full rounded-2xl border border-gray-200 p-4 outline-none transition focus:border-[#64D98B]"
          />
        </div>
      </div>
    </section>
  );
}
