// src/pages/Admin.jsx
import React, { useState, useEffect } from "react";
import AdminPanel from "../components/share/AdminPanel";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [isAuth, setIsAuth] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("adminAuth");
    if (storedAuth === "true") {
      setIsAuth(true);
    }
  }, []);

  const handleLogin = () => {
    const correctPassword = "demopasswordfornow"; // change this
    if (passwordInput === correctPassword) {
      localStorage.setItem("adminAuth", "true");
      setIsAuth(true);
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuth) {
    return (
      <div className="max-w-sm mx-auto mt-20 p-4 border rounded shadow">
        <h2 className="text-lg font-bold mb-3">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={passwordInput}
          onChange={(e) => {
            setPasswordInput(e.target.value);
            if (error) setError(""); // clear error on typing
          }}
          className={`border p-2 w-full rounded mb-1 ${
            error ? "border-red-500" : ""
          }`}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    );
  }

  return <AdminPanel />;
}
