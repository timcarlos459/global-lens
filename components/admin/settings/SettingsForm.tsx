"use client";

import { useState } from "react";

import type { Settings } from "@/types/settings";

import { updateSettings } from "@/actions/settings";

import AgencyInformation from "./AgencyInformation";
import ContactInformation from "./ContactInformation";
import BookingSettings from "./BookingSettings";
import BrandingSettings from "./BrandingSettings";
import SeoSettings from "./SeoSettings";
import SocialMediaSettings from "./SocialMediaSettings";
import SaveSettingsButton from "./SaveSettingsButton";

interface SettingsFormProps {
  initialSettings: Settings;
}

export default function SettingsForm({ initialSettings }: SettingsFormProps) {
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [saving, setSaving] = useState(false);

  const handleChange = (
    field: keyof Settings,
    value: Settings[keyof Settings],
  ) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  async function handleSave() {
    try {
      setSaving(true);

      await updateSettings(settings);

      alert("Settings saved successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to save settings.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-8">
      <AgencyInformation
        companyName={settings.company_name}
        tagline={settings.tagline}
        ceo={settings.ceo}
        foundedYear={settings.founded_year}
        description={settings.description}
        onChange={handleChange}
      />

      <ContactInformation
        email={settings.email}
        phone={settings.phone}
        phone2={settings.phone2}
        whatsapp={settings.whatsapp}
        website={settings.website}
        address={settings.address}
        city={settings.city}
        country={settings.country}
        onChange={handleChange}
      />

      <BookingSettings
        deposit={settings.booking_deposit}
        days={settings.min_booking_days}
        guests={settings.max_guests}
        instant={settings.instant_booking}
        approval={settings.manual_approval}
        onChange={handleChange}
      />

      <BrandingSettings
        logo={settings.logo_url}
        favicon={settings.favicon_url}
        onChange={handleChange}
      />

      <SeoSettings
        title={settings.meta_title}
        description={settings.meta_description}
        keywords={settings.keywords}
        onChange={handleChange}
      />

      <SocialMediaSettings
        facebook={settings.facebook}
        instagram={settings.instagram}
        tiktok={settings.tiktok}
        linkedin={settings.linkedin}
        youtube={settings.youtube}
        x={settings.x}
        onChange={handleChange}
      />

      <div className="flex justify-end">
        <SaveSettingsButton saving={saving} onClick={handleSave} />
      </div>
    </div>
  );
}
