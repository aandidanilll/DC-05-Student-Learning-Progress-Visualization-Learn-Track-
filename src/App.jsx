import { useState } from "react";
import Login from "./auth/Login.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (userEmail) => {
    setEmail(userEmail);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard email={email} onLogout={handleLogout} />;
}
