import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-200 z-10 relative">
      <div className="w-full flex items-center justify-between md:w-auto">
        <div className="flex items-center gap-3">
          <img src="/1.home/KL.png" alt="Klean Logo" className="h-8" />
          <span className="font-bold text-lg text-[#5F5FFF]">Klean</span>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-[#5F5FFF] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <nav className="hidden md:flex gap-8 mt-4 md:mt-0 text-gray-600 font-medium">
        <Link to="/" className="flex items-center gap-2 hover:text-[#5F5FFF]">
          Home
          <img
            src="/1.home/angle-down.png"
            alt="arrow"
            className="w-2 h-2 mt-1"
          />
        </Link>
        <Link
          to="/service"
          className="flex items-center gap-2 hover:text-[#5F5FFF]"
        >
          Service
          <img
            src="/1.home/angle-down.png"
            alt="arrow"
            className="w-2 h-2 mt-1"
          />
        </Link>
        <Link
          to="/works"
          className="flex items-center gap-2 hover:text-[#5F5FFF]"
        >
          Works
          <img
            src="/1.home/angle-down.png"
            alt="arrow"
            className="w-2 h-2 mt-1"
          />
        </Link>
        <Link
          to="/news"
          className="flex items-center gap-2 hover:text-[#5F5FFF]"
        >
          News
          <img
            src="/1.home/angle-down.png"
            alt="arrow"
            className="w-2 h-2 mt-1"
          />
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 hover:text-[#5F5FFF]"
        >
          Contact
          <img
            src="/1.home/angle-down.png"
            alt="arrow"
            className="w-2 h-2 mt-1"
          />
        </Link>
      </nav>

      <div className="hidden md:flex items-center gap-6 mt-4 md:mt-0">
        <button className="text-gray-600 hover:text-[#5F5FFF] font-medium">
          Log In
        </button>
        <button className="px-6 py-2 rounded-lg border border-gray-300 text-blue-600 font-semibold hover:text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 shadow-md transition">
          Sign Up
        </button>
      </div>

      {menuAbierto && (
        <div className="w-full flex flex-col mt-4 gap-3 border shadow-2xl md:hidden">
          <Link
            to="/"
            className="text-gray-600 hover:text-[#5F5FFF] px-4 py-2 border-b border-gray-200"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="text-gray-600 hover:text-[#5F5FFF] px-4 py-2 border-b border-gray-200"
          >
            Service
          </Link>
          <Link
            to="/works"
            className="text-gray-600 hover:text-[#5F5FFF] px-4 py-2 border-b border-gray-200"
          >
            Works
          </Link>
          <Link
            to="/news"
            className="text-gray-600 hover:text-[#5F5FFF] px-4 py-2 border-b border-gray-200"
          >
            News
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-[#5F5FFF] px-4 py-2 border-b border-gray-200"
          >
            Contact
          </Link>
          <div className="flex flex-col items-center gap-2 px-4 mt-2 mb-3">
            <button className="text-gray-600 hover:text-[#5F5FFF] font-medium">
              Log In
            </button>
            <button className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
