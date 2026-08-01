"use client";

import { Save } from "lucide-react";

export default function SaveSettingsButton({
  saving,

  onClick,
}: {
  saving: boolean;

  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={saving}
      className="rounded-2xl bg-[#64D98B] px-8 py-4 font-bold text-[#081B29]"
    >
      <Save className="mr-2 inline" />

      {saving ? "Saving..." : "Save Settings"}
    </button>
  );
}
