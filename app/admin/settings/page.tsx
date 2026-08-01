import { getSettings } from "@/actions/settings";
import SettingsForm from "@/components/admin/settings/SettingsForm";

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-[#081B29]">Settings</h1>

        <p className="mt-2 text-gray-500">
          Manage your Global Lens Tours settings.
        </p>
      </div>

      <SettingsForm initialSettings={settings} />
    </div>
  );
}
