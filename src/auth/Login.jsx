import { useState } from "react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    setError("");
    // panggil callback ke App
    onLogin(form.email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-900/95 rounded-3xl shadow-2xl overflow-hidden flex">
          {/* Strip biru di kiri */}
          <div className="w-20 bg-gradient-to-b from-sky-400 to-cyan-400" />

          {/* Konten form */}
          <div className="flex-1 px-10 py-10">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-white mb-2 flex items-center gap-2">
                Selamat datang <span className="text-3xl">👋</span>
              </h1>
              <p className="text-sm text-slate-400">
                Masuk untuk mengakses dashboard progres belajar kamu.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 text-slate-100 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 text-slate-100 px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              {/* Error */}
              {error && <p className="text-sm text-red-500">{error}</p>}

              {/* Tombol Masuk */}
              <button
                type="submit"
                className="w-full mt-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-base font-semibold py-3 transition active:scale-[0.97] shadow-lg shadow-sky-900/40"
              >
                Masuk
              </button>
            </form>

            {/* Lupa password */}
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

            {/* Catatan bawah */}
            <p className="mt-8 text-[11px] text-slate-500">
              * Halaman login ini hanya contoh UI. Proses autentikasi akan
              dihubungkan ke backend pada tahap pengembangan berikutnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
