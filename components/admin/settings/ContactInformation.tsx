"use client";

import type { Settings } from "@/types/settings";

interface Props {
  email: string;
  phone: string;
  phone2: string;
  whatsapp: string;
  website: string;
  address: string;
  city: string;
  country: string;

  onChange: (field: keyof Settings, value: string | number | boolean) => void;
}

export default function ContactInformation({
  email,
  phone,
  phone2,
  whatsapp,
  website,
  address,
  city,
  country,
  onChange,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-black">Contact Information</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <input
          value={email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="Company Email"
          className="input"
        />

        <input
          value={phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Phone"
          className="input"
        />

        <input
          value={phone2}
          onChange={(e) => onChange("phone2", e.target.value)}
          placeholder="Alternative Phone"
          className="input"
        />

        <input
          value={whatsapp}
          onChange={(e) => onChange("whatsapp", e.target.value)}
          placeholder="WhatsApp"
          className="input"
        />

        <input
          value={website}
          onChange={(e) => onChange("website", e.target.value)}
          placeholder="Website"
          className="input md:col-span-2"
        />

        <input
          value={address}
          onChange={(e) => onChange("address", e.target.value)}
          placeholder="Address"
          className="input md:col-span-2"
        />

        <input
          value={city}
          onChange={(e) => onChange("city", e.target.value)}
          placeholder="City"
          className="input"
        />

        <input
          value={country}
          onChange={(e) => onChange("country", e.target.value)}
          placeholder="Country"
          className="input"
        />
      </div>
    </section>
  );
}
