import React from "react";

export default function Service() {
  const serviciosCards = [
    {
      img: "/2.services/icon1.png",
      title: "Send Texts Instantly",
      parrafo:
        "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
      more: "Learn More ➡",
    },
    {
      img: "/2.services/icon2.png",
      title: "Better Organize",
      parrafo:
        "Latest technology and experienced guidance, trained HR specialists to keep updated.",
      more: "Learn More ➡",
    },
    {
      img: "/2.services/icon3.png",
      title: "Analytical Statistics",
      parrafo:
        "Messages, real-time reminders, memos, and many more will keep your team in sync.",
      more: "Learn More ➡",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="font-[Nunito] font-bold text-4xl m-5">Service</h1>
      <p className="text-sm text-center text-gray-600 max-w-2xl mb-10">
        We offer youth with chances for career development in their practice. We
        also <br />
        support a wide range of services to ensure client satisfaction.
      </p>
      {/* CIRCULO BORROSO */}
      <div className="relative lg:w-[60%]">
        <img
          src="/2.services/illustration1.png"
          alt="Circulo"
          className="w-40 absolute justify-start mt-[-80px] ml-[-90px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {serviciosCards.map((item, index) => (
            <div
              key={index}
              className="w-full h-[100%] bg-white/70% backdrop-blur-md p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl max-w-xs hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 mx-auto mb-15 mt-4"
              />
              <h3 className="text-start text-md font-bold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[12px] mb-8 text-start max-w-50">
                {item.parrafo}
              </p>
              <button className="cursor-pointer text-start text-[12px] text-[#5F5FFF] font-semibold hover:underline mb-2">
                {item.more}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
