// C:\Users\User\project-capstone-dc05\src\Dashboard.jsx
import { useState } from "react";
import CourseDashboard from "../CourseDashboard.jsx";

const COURSES = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    level: "Intermediate – Advanced",
    focus: "Machine Learning, Deep Learning, ML System Design",
    estimatedTime: "6–9 bulan",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "android-developer",
    title: "Android Developer",
    level: "Beginner – Intermediate",
    focus: "Kotlin, Android Studio, MVVM, Jetpack",
    estimatedTime: "4–6 bulan",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "backend-js",
    title: "Back-End Developer JavaScript",
    level: "Beginner – Intermediate",
    focus: "Node.js, Express, REST API, Database",
    estimatedTime: "4–6 bulan",
    color: "from-sky-500 to-cyan-400",
  },
  {
    id: "backend-python",
    title: "Back-End Developer Python",
    level: "Beginner – Intermediate",
    focus: "Django / FastAPI, REST API, Database",
    estimatedTime: "4–6 bulan",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    level: "Intermediate",
    focus: "EDA, Statistik, Machine Learning, Visualisasi",
    estimatedTime: "6–9 bulan",
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    level: "Intermediate – Advanced",
    focus: "CI/CD, Docker, Kubernetes, Monitoring",
    estimatedTime: "6–9 bulan",
    color: "from-slate-500 to-slate-300",
  },
  {
    id: "frontend-web",
    title: "Front-End Web Developer",
    level: "Beginner – Intermediate",
    focus: "HTML, CSS, JavaScript, React",
    estimatedTime: "4–6 bulan",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "gen-ai-engineer",
    title: "Gen AI Engineer",
    level: "Intermediate – Advanced",
    focus: "LLM, Prompt Engineering, RAG, AI Apps",
    estimatedTime: "6–9 bulan",
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    id: "gcp-professional",
    title: "Google Cloud Professional",
    level: "Intermediate",
    focus: "GCP Compute, Storage, Networking, IAM",
    estimatedTime: "4–6 bulan",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "ios-developer",
    title: "iOS Developer",
    level: "Intermediate",
    focus: "Swift, Xcode, UIKit / SwiftUI",
    estimatedTime: "4–6 bulan",
    color: "from-zinc-500 to-slate-300",
  },
  {
    id: "mlops-engineer",
    title: "MLOps Engineer",
    level: "Advanced",
    focus: "Model Deployment, Pipelines, Monitoring",
    estimatedTime: "6–9 bulan",
    color: "from-lime-500 to-emerald-500",
  },
  {
    id: "multi-platform",
    title: "Multi-Platform App Developer",
    level: "Intermediate",
    focus: "Flutter / React Native, State Management",
    estimatedTime: "4–6 bulan",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "react-developer",
    title: "React Developer",
    level: "Beginner – Intermediate",
    focus: "SPA, Hooks, State Management, Best Practice",
    estimatedTime: "3–5 bulan",
    color: "from-cyan-500 to-sky-400",
  },
];

export default function Dashboard({ email, onLogout }) {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const selectedCourse = COURSES.find(
    (course) => course.id === selectedCourseId
  );

  const displayName = email ? email.split("@")[0] : "Learner";

  // Jika user sudah memilih course → tampilkan halaman dashboard course
  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedCourseId(null)}
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
              >
                <span className="text-lg">←</span>
                <span>Kembali ke Learning Path</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-slate-400">Masuk sebagai</p>
                <p className="text-sm font-medium text-slate-100">
                  {displayName}
                </p>
              </div>
              <button
                onClick={onLogout}
                className="text-xs rounded-full border border-slate-700 px-3 py-1.5 text-slate-200 hover:bg-slate-800 transition"
              >
                Keluar
              </button>
            </div>
          </div>
        </header>

        {/* Konten Dashboard Course */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <CourseDashboard course={selectedCourse} />
        </main>
      </div>
    );
  }

  // Halaman utama learning path
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-lg font-semibold text-slate-50">
              Learning Path Dashboard
            </h1>
            <p className="text-xs text-slate-400">
              Pilih kelas untuk melihat dashboard course dan progres belajarmu.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-400">Masuk sebagai</p>
              <p className="text-sm font-medium text-slate-100">
                {displayName}
              </p>
            </div>
            <button
              onClick={onLogout}
              className="text-xs rounded-full border border-slate-700 px-3 py-1.5 text-slate-200 hover:bg-slate-800 transition"
            >
              Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Konten */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Intro + ringkasan */}
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50 mb-1">
              Pilih Learning Path
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Setiap kartu di bawah ini adalah satu jalur karier. Klik salah
              satu untuk melihat struktur course, modul, dan progres belajarmu.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-slate-950 font-semibold">
              {displayName.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div>
              <p className="font-medium text-slate-100">{displayName}</p>
              <p className="text-[11px] text-slate-500">
                Personalized dashboard • 13 learning path
              </p>
            </div>
          </div>
        </section>

        {/* Grid kartu kelas */}
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-left shadow-lg shadow-slate-950/40 hover:border-slate-500/70 hover:bg-slate-900/90 transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Badge kategori */}
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-medium text-slate-200">
                  Learning Path
                </span>
                <span className="text-[11px] text-slate-400">
                  {course.estimatedTime}
                </span>
              </div>

              {/* Judul */}
              <h3 className="text-base font-semibold text-slate-50 mb-1">
                {course.title}
              </h3>
              <p className="text-[11px] text-slate-400 mb-2">
                {course.level}
              </p>

              {/* Fokus skill */}
              <p className="text-xs text-slate-300 mb-4 line-clamp-2">
                {course.focus}
              </p>

              {/* Progress (dummy) */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-400">
                    Estimasi progres awal
                  </span>
                  <span className="text-[11px] text-slate-200">0%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full w-0 bg-gradient-to-r ${course.color} group-hover:w-2/5 transition-all duration-500`}
                  />
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div
                className={`pointer-events-none absolute inset-px rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br ${course.color} mix-blend-soft-light transition`}
              />
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
