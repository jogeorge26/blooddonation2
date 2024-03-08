"use client";
import Link from "next/link";
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Replace this with Firebase authentication logic
    // using email and password entered by the user
    try {
      // Handle successful login
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-sm mx-auto bg-white rounded shadow-md p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded shadow-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <Link
            href="/profile"
          
            // type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
