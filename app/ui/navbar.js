"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-red p-4 flex flex-row justify-between items-center">
      <h1 className="text-black pl-2 font-bold text-2xl">BLOOD MANAGEMENT</h1>

      <button
        className={`md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-red-500 inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 ${
          isMobileMenuOpen ? "bg-gray-100" : ""
        }`}
        aria-controls="mobile-menu"
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Toggle navigation</span>
        {/* Replace with your image source path and desired dimensions */}
        <img
          className="h-6 w-6"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Frounded-basics%2F24%2Frounded__menu-512.png&f=1&nofb=1&ipt=34efb1c86c2c85e13db419522b38228464004bbff6d7b148054e71b8e6eb7c07&ipo=images" // Replace with your image path
          alt="Menu icon" // Provide a descriptive alt text for accessibility
        />
      </button>

      <ul
        id="mobile-menu"
        className={`md:hidden p-4 bg-red absolute right-0 top-full w-full z-50 shadow-lg rounded-md transform origin-top-right transition duration-200 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full" // Corrected transform property
        }`}
        aria-labelledby="mobile-menu-label"
      >
        <li className="mb-2 pt-2 pb-1 pr-4 pl-4 border-b border-gray-200 text-center hover:bg-gray-100 text-black">
          <Link href="/">Home</Link>
        </li>
        <li className="mb-2 pt-2 pb-1 pr-4 pl-4 border-b border-gray-200 text-center hover:bg-gray-100 text-black">
          <Link href="/explore">Explore</Link>
        </li>
        <li className="text-center hover:bg-gray-100 text-black pt-2 pb-1 pr-4 pl-4 rounded-full bg-gray-200 hover:bg-red-500">
          <Link href="/login">Login</Link>
        </li>
      </ul>

      <ul className="hidden md:flex flex-row items-center justify-between space-x-4 pr-2">
        <li className="p-3 hover:bg-gray-100">
          <Link className="text-black" href="/">
            Home
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-100">
          <Link className="text-black" href="/explore">
            Explore
          </Link>
        </li>
        <li className="p-3 pl-3 pr-3 rounded-full bg-gray-200 hover:bg-red-500">
          <Link className="text-black" href="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
