"use client"; 

import { useState } from "react";

const LoginButton = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
    setShowLogin(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          {showLogin ? "Cancel" : "Login / Register"}
        </button>
      </div>

      {showLogin && (
        <div className="mt-5 max-w-sm mx-auto p-4 border rounded-md shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
