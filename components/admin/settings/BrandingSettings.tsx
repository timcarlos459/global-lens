"use client";

import type { Settings } from "@/types/settings";

interface BrandingSettingsProps {
  logo: string;
  favicon: string;

  onChange: (field: keyof Settings, value: Settings[keyof Settings]) => void;
}

export default function BrandingSettings({
  logo,
  favicon,
  onChange,
}: BrandingSettingsProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-black text-[#081B29]">Branding</h2>

      <div className="grid gap-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#081B29]">
            Logo URL
          </label>

          <input
            type="text"
            value={logo}
            onChange={(e) => onChange("logo_url", e.target.value)}
            placeholder="https://example.com/logo.png"
            className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-[#64D98B]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#081B29]">
            Favicon URL
          </label>

          <input
            type="text"
            value={favicon}
            onChange={(e) => onChange("favicon_url", e.target.value)}
            placeholder="https://example.com/favicon.ico"
            className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-[#64D98B]"
          />
        </div>
      </div>
    </section>
  );
}
