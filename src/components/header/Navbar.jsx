import React from "react";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-around px-8 py-4 bg-white shadow-md">
      {/* Logo Klean */}
      <div className="flex items-center gap-10">
        <img src="/1.home/KL.png" alt="Klean Logo" className="h-8" />
        <span className="font-bold text-lg text-[#5F5FFF]"></span>

        {/* Navegación */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a
            href="#"
            className="flex items-center justify-center gap-2 hover:text-[#5F5FFF]"
          >
            Home
            <img
              src="/1.home/angle-down.png"
              alt="AngleDown"
              className="md:w-2 md:h-2 mt-1"
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 hover:text-[#5F5FFF]"
          >
            Service
            <img
              src="/1.home/angle-down.png"
              alt="AngleDown"
              className="md:w-2 md:h-2 mt-1"
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 hover:text-[#5F5FFF]"
          >
            Works
            <img
              src="/1.home/angle-down.png"
              alt="AngleDown"
              className="md:w-2 md:h-2 mt-1"
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 hover:text-[#5F5FFF]"
          >
            News
            <img
              src="/1.home/angle-down.png"
              alt="AngleDown"
              className="md:w-2 md:h-2 mt-1"
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 hover:text-[#5F5FFF]"
          >
            Contact
            <img
              src="/1.home/angle-down.png"
              alt="AngleDown"
              className="md:w-2 md:h-2 mt-1"
            />
          </a>
        </nav>
      </div>

      {/* Botones de usuario */}
      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-[#5F5FFF] font-medium">
          Log In
        </button>
        <button className="cursor-pointer px-6 py-2 rounded-lg border border-gray-300 text-blue-600 hover:text-white font-semibold hover:bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:opacity-90 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
}
