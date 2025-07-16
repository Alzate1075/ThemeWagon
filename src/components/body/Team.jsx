import React from "react";

export default function Team() {
  const teamsCards = [
    {
      img: "/6.team/image1.png",
      nombre: "John Adams",
      cargo: "CEO",
    },
    {
      img: "/6.team/image2.png",
      nombre: "Carrey Johnson",
      cargo: "Senior Developer",
    },
    {
      img: "/6.team/image3.png",
      nombre: "Ray Marie",
      cargo: "Developer",
    },
    {
      img: "/6.team/image4.png",
      nombre: "Austin Min",
      cargo: "Designer",
    },
  ];

  return (
    <div className="w-full px-4 py-10 flex flex-col items-center justify-center bg-white">
      <h1 className="font-bold text-4xl mb-4 text-center text-black">
        Our Team
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-xl text-sm">
        People from various origins, cultures, and personalities make up our
        team. This blend makes it a powerful team.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
        {teamsCards.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl text-center">
            <img
              src={item.img}
              alt={item.nombre}
              className="cursor-pointer w-full h-auto object-cover mb-5 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-black">{item.nombre}</h3>
            <p className="text-sm text-gray-500">{item.cargo}</p>
          </div>
        ))}
      </div>

      <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition">
        View Full Team
      </button>
    </div>
  );
}
