"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app, { db } from "../firebase"; // Import Firebase app
import { AuthProvider, AuthContext } from "../context/AuthContext";

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const { userId, setUser, setUserData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Retrieve user data after successful login
      const userId = userCredential.user.uid;
      const userEmail = userCredential.user.email;
      console.log("user id", userId);
      //const userDoc = await (await db.collection("donors").doc(userId)).get(); // Fetch user document
      //console.log("USER DOC: ", userDoc.data());
      //const donorData = userDoc.data();

      if (userId != "") {
        console.log("Setting data", userId);
        const userData = {
          donorId: userId.toString(),
          email: userEmail.toString(),
          name: "name",
        };

        alert(`Redirecting to profile${userId}`);
        setUserData(userData);
        router.push("/profile", { userId }); // Pass user name as query parameter
      } else {
        console.error("User not found");
        setError("An error occurred. Please try again.");
      }

      //router.push("/profile"); // Redirect to profile page
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message); // Set error message for display
    }
  };

  return (
    <AuthProvider>
      <div className="max-w-md mx-auto rounded-lg shadow-md overflow-hidden bg-white py-4 px-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Donor Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full rounded shadow-md p-2 focus:outline-none focus-ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full rounded shadow-md p-2 focus:outline-none focus-ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        {error && (
          <p className="text-red-500">Error(auth / invalid - credential)</p>
        )}
      </div>
    </AuthProvider>
  );
}

export default LoginPage;
