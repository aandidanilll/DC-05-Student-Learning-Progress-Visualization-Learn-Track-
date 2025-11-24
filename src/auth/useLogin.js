import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    isLoading: false,
    error: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setStatus({ isLoading: false, error: "Email dan password wajib diisi." });
      return;
    }

    setStatus({ isLoading: true, error: "" });

    try {
      const response = await fetch(
        "https://learn-track-backend-production.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Gagal login. Periksa kredensial Anda."
        );
      }

      const token = data.session?.access_token;
      const user = data.user;

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        throw new Error("Token tidak ditemukan dalam respon server.");
      }

      console.log("Login Berhasil, mengalihkan ke dashboard...");

      setStatus({ isLoading: false, error: "" });

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setStatus({
        isLoading: false,
        error: err.message || "Terjadi kesalahan pada server.",
      });
    }
  };

  return {
    form,
    status,
    handleChange,
    handleLogin,
  };
};
