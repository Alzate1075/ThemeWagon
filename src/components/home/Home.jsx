import React from "react";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8 pb-10">
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left max-w-xl">
          <h1 className="mt-6 lg:m-0 text-3xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Bootstrap 5 theme
          </h1>
          <h2 className="text-xl lg:text-4xl text-gray-700">
            crafted by <strong>ThemeWagon</strong>
          </h2>
          <p className="text-sm lg:text-md text-gray-600">
            ThemeWagon offers a wide array of category-oriented <br />
            free and Premium Bootstrap HTML Templates and Themes.
          </p>
          <button className="mt-4 px-5 py-2 rounded-lg text-white text-sm font-semibold bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:opacity-90 transition">
            Check Demo
          </button>
        </div>

        {/* ILUSTRACION */}
        <img
          src="/1.home/illustration1.png"
          alt="IlustracionHome"
          className="w-full lg:w-[55%] h-auto"
        />
      </div>

      <hr className="border-gray-300" />

      {/* LOGOS */}
      <div className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 py-8 px-4">
        <img src="/1.home/google.png" alt="Google" className="w-20" />
        <img src="/1.home/netflix.png" alt="Netflix" className="w-20" />
        <img src="/1.home/microsoft.png" alt="Microsoft" className="w-24" />
        <img src="/1.home/mailbuster.png" alt="Mailbuster" className="w-28" />
        <img src="/1.home/themewagon.png" alt="Themewagon" className="w-24" />
      </div>
      <hr className="border-gray-300" />
    </div>
  );
}
