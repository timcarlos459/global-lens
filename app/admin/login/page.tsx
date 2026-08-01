"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      /*
       * TEMPORARY ADMIN LOGIN
       *
       * We will replace this with:
       * Company Email + Password + Email OTP/MFA
       * once the company domain/email is ready.
       */

      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Invalid password.");
        setLoading(false);
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-6">
      <div className="w-full max-w-md">
        {/* Brand */}

        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B] text-[#081B29] shadow-lg">
            <ShieldCheck size={30} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-[#081B29]">
            Admin Portal
          </h1>

          <p className="mt-2 text-gray-500">Authorized IT access only.</p>
        </div>

        {/* Login Card */}

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Password */}

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-[#081B29]"
              >
                Admin Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoComplete="current-password"
                  disabled={loading}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-12 outline-none transition focus:border-[#64D98B] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  disabled={loading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#081B29] disabled:cursor-not-allowed"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Security Notice */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
              <div className="flex gap-3">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <p className="text-sm leading-6 text-blue-700">
                  This area is restricted to authorized Global Lens Tours IT
                  personnel.
                </p>
              </div>
            </div>

            {/* Error */}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#64D98B] py-4 font-bold text-[#081B29] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={19} className="animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <LockKeyhole size={19} />
                  Access Admin Panel
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}

        <p className="mt-6 text-center text-xs text-gray-400">
          Global Lens Tours & Travel • Restricted Admin Area
        </p>
      </div>
    </main>
  );
}
