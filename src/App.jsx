import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";

export default function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Routes>
      {/* Route untuk Halaman Login (Halaman Utama) */}
      <Route path="/" element={<Login />} />

      {/* Route untuk Halaman Dashboard */}
      {/* Kita oper props onLogout agar tombol logout di Dashboard bisa bekerja */}
      <Route
        path="/dashboard"
        element={<Dashboard onLogout={handleLogout} />}
      />
    </Routes>
  );
}
