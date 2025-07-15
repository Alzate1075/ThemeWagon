import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex md:justify-end mb-10">
        <div className="flex flex-col items-center md:items-start md:justify-center gap-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Bootstrap 5 theme
          </h1>
          <h2 className="text-4xl">
            crafted by <strong>ThemeWagon</strong>
          </h2>
          <p className="text-md">
            ThemeWagon offers an wide array of category-oriented <br />
            free and Premium Bootstrap HTML Templates and Themes.
          </p>

          <button className="cursor-pointer mt-6 px-4 py-2 rounded-lg text-white text-sm font-semibold bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:opacity-90 transition">
            Check Demo
          </button>
        </div>
        <img
          src="/1.home/illustration1.png"
          alt="IlustracionHome"
          className="w-[55%] h-[70%]"
        />
      </div>
      <hr className="border-gray-300" />
      <div className="w-full flex items-center justify-center gap-20 bg-white border-gray-300">
        <img src="/1.home/google.png" alt="Google" className="w-20 mt-8" />
        <img src="/1.home/netflix.png" alt="Netflix" className="w-20 mt-8" />
        <img
          src="/1.home/microsoft.png"
          alt="Microsoft"
          className="w-30 mt-8"
        />
        <img
          src="/1.home/mailbuster.png"
          alt="Mailbuster"
          className="w-40 mt-8"
        />
        <img
          src="/1.home/themewagon.png"
          alt="Themewagon"
          className="w-30 mt-8"
        />
      </div>
    </div>
  );
}
