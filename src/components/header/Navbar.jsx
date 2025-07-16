import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const rutas = [
    { nombre: "Home", ruta: "/" },
    { nombre: "Service", ruta: "/service" },
    { nombre: "Works", ruta: "/works" },
    { nombre: "News", ruta: "/news" },
    { nombre: "Contact", ruta: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200 z-10 relative px-6 py-4">
      <div className="flex items-center justify-between lg:justify-around lg:hidden">
        <img src="/1.home/KL.png" alt="Klean Logo" className="h-8" />

        <button
          onClick={toggleMenu}
          className="p-2 text-gray-600 hover:text-[#5F5FFF] focus:outline-none"
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

      <div className="hidden lg:flex items-center justify-between lg:justify-around">
        <img src="/1.home/KL.png" alt="Klean Logo" className="h-8" />

        <nav className="flex gap-8 text-gray-600 font-semibold">
          {rutas.map((item) => (
            <Link
              key={item.nombre}
              to={item.ruta}
              className="flex items-center gap-2 hover:text-[#5F5FFF]"
            >
              {item.nombre}
              <img
                src="/1.home/angle-down.png"
                alt="arrow"
                className="w-2 h-2 mt-1"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="cursor-pointer text-gray-600 hover:text-[#5F5FFF] font-semibold">
            Log In
          </button>
          <button className="px-6 py-2 rounded-lg border border-gray-300 text-blue-600 font-semibold hover:text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 shadow-md transition">
            Sign Up
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div className="w-full flex flex-col mt-4 gap-3 border shadow-2xl lg:hidden font-semibold">
          {rutas.map((item) => (
            <Link
              key={item.nombre}
              to={item.ruta}
              className="text-gray-600 hover:text-[#5F5FFF] px-4 py-2 border-b border-gray-200"
            >
              {item.nombre}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-2 px-4 mt-2 mb-3">
            <button className="text-gray-600 hover:text-[#5F5FFF] font-semibold">
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
