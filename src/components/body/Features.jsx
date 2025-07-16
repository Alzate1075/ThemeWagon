import React from "react";

export default function Features() {
  const featuresCards = [
    {
      img: "/4.features/icon1.png",
      title: "Encryted Mail",
      parrafo: "A process of encrypting email communitions",
    },

    {
      img: "/4.features/icon2.png",
      title: "Display Sharing",
      parrafo: "With other participants, you may share your screen",
    },

    {
      img: "/4.features/icon3.png",
      title: "Private Notebook",
      parrafo: "Private Notebook is an application that is protected",
    },

    {
      img: "/4.features/icon4.png",
      title: "App App Assistance",
      parrafo: "App Assistant is quickly and effectively ran the system",
    },

    {
      img: "/4.features/icon5.png",
      title: "Multiple Printing",
      parrafo: "Our canvas prints are crafted on top-notch canvas.",
    },

    {
      img: "/4.features/icon6.png",
      title: "Free Sketch",
      parrafo: "Our canvas prints are crafted on top-notch canvas.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-[Nunito] font-bold text-4xl m-5">Features</h1>
      <p className="text-[13px] text-center text-gray-600 max-w-2xl mb-10">
        We provide a number of excellent features that will undoubtedly improve
        the user experience. <br />
        We also provide a better support system.
      </p>
      <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-12">
        {featuresCards.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl text-center flex flex-col items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="cursor-pointer w-20 h-auto object-cover mb-5 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-md font-semibold text-black">{item.title}</h3>
            <p className="flex-wrap text-[12px] text-gray-500">
              {item.parrafo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
