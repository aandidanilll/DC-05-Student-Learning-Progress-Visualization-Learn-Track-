// src/auth/Login.jsx
import { useLogin } from "./useLogin";

export default function Login() {
  const { form, status, handleChange, handleLogin } = useLogin();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-900/95 rounded-3xl shadow-2xl overflow-hidden flex">
          <div className="w-20 bg-gradient-to-b from-sky-400 to-cyan-400" />

          {/* Konten form */}
          <div className="flex-1 px-10 py-10">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-white mb-2 flex items-center gap-2">
                Selamat datang <span className="text-3xl">👋</span>
              </h1>
              <p className="text-sm text-slate-400">
                Masuk untuk mengakses dashboard progres belajar kamu.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status.isLoading}
                  placeholder="nama@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 text-slate-100 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 disabled:opacity-50"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password} // Value dari controller
                  onChange={handleChange} // Handler dari controller
                  disabled={status.isLoading}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 text-slate-100 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 disabled:opacity-50"
                />
              </div>

              {/* Error Message */}
              {status.error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-400 text-center">
                    {status.error}
                  </p>
                </div>
              )}

              {/* Tombol Masuk */}
              <button
                type="submit"
                disabled={status.isLoading}
                className="w-full mt-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-base font-semibold py-3 transition active:scale-[0.97] shadow-lg shadow-sky-900/40 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {status.isLoading ? (
                  // Spinner Loading sederhana
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Masuk"
                )}
              </button>
            </form>

            <div className="mt-5 text-center">
              <span className="text-sm text-slate-400">
                Lupa password?{" "}
                <button
                  type="button"
                  className="text-sm text-slate-200 underline underline-offset-2 hover:text-white"
                >
                  Hubungi admin
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
