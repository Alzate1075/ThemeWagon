import React, { useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-around px-6 py-4 bg-white shadow-md">
      {/* LOGO */}
      <div className="w-full flex items-center justify-between md:w-auto">
        <div className="flex items-center gap-3">
          <img src="/1.home/KL.png" alt="Klean Logo" className="h-8" />
          <span className="font-bold text-lg text-[#5F5FFF]"></span>
        </div>

        {/* MENU BURGUER */}
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

      {/* MENU */}
      <nav className="hidden md:flex gap-8 mt-4 md:mt-0 text-gray-600 font-medium">
        {["Home", "Service", "Works", "News", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="flex items-center gap-2 hover:text-[#5F5FFF]"
          >
            {item}
            <img
              src="/1.home/angle-down.png"
              alt="arrow"
              className="w-2 h-2 mt-1"
            />
          </a>
        ))}
      </nav>

      {/* Botones */}
      <div className="hidden md:flex items-center gap-6 mt-4 md:mt-0">
        <button className="text-gray-600 hover:text-[#5F5FFF] font-medium">
          Log In
        </button>
        <button className="px-6 py-2 rounded-lg border border-gray-300 text-blue-600 font-semibold hover:text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 shadow-md transition">
          Sign Up
        </button>
      </div>

      {/* Menú hamburguesa desplegado (pantallas pequeñas) */}
      {menuAbierto && (
        <div className="w-full flex flex-col mt-4 gap-3 md:hidden">
          {["Home", "Service", "Works", "News", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-[#5F5FFF] px-4 py-2 border-b border-gray-200"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col items-start gap-2 px-4 mt-2">
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
