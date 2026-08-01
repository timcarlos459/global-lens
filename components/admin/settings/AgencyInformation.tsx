"use client";

import { Building2 } from "lucide-react";
import type { Settings } from "@/types/settings";

interface AgencyInformationProps {
  companyName: string;
  tagline: string;
  ceo: string;
  foundedYear: string;
  description: string;

  onChange: (field: keyof Settings, value: Settings[keyof Settings]) => void;
}

export default function AgencyInformation({
  companyName,
  tagline,
  ceo,
  foundedYear,
  description,
  onChange,
}: AgencyInformationProps) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
          <Building2 size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-black text-[#081B29]">
            Agency Information
          </h2>

          <p className="text-sm text-gray-500">
            Basic information about your travel agency.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold">
            Company Name
          </label>

          <input
            className="w-full rounded-2xl border border-gray-200 p-4"
            value={companyName}
            onChange={(e) => onChange("company_name", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">CEO</label>

          <input
            className="w-full rounded-2xl border border-gray-200 p-4"
            value={ceo}
            onChange={(e) => onChange("ceo", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">Tagline</label>

          <input
            className="w-full rounded-2xl border border-gray-200 p-4"
            value={tagline}
            onChange={(e) => onChange("tagline", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Founded Year
          </label>

          <input
            className="w-full rounded-2xl border border-gray-200 p-4"
            value={foundedYear}
            onChange={(e) => onChange("founded_year", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold">
            Company Description
          </label>

          <textarea
            rows={5}
            className="w-full rounded-2xl border border-gray-200 p-4"
            value={description}
            onChange={(e) => onChange("description", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
