import React from "react";

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-[#f6f4ff] to-white py-6 px-6 overflow-hidden flex flex-col items-center justify-center">
      <h1 className="bg-transparent text-4xl font-bold text-center text-black mb-15 z-10 relative">
        Contact Us
      </h1>

      <img
        src="/7.contact/image1.png"
        alt="background"
        className="absolute right-0 top-20 w-full lg:w-[65%] h-full md:h-[700px] opacity-90 z-0"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:gap-20">
        <div className="bg-white/10 backdrop-blur-md border border-white rounded-2xl p-8 shadow-md w-[250px] md:w-[650px] lg:w-[500px] h-[350px]">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="👤  Write your name"
              className="w-full h-8 p-4 rounded-full bg-white/20% backdrop-blur-md shadow-md outline-none text-gray-400 border border-white"
            />
            <input
              type="email"
              placeholder="📩  Write your email"
              className="w-full h-8 p-4 rounded-full bg-white/20 backdrop-blur-md border border-white shadow-md outline-none text-gray-400"
            />
            <textarea
              rows="4"
              placeholder="🖋  Write your message"
              className="w-full h-25 p-4 rounded-2xl bg-white/30% backdrop-blur-md border border-white shadow-md outline-none resize-none text-gray-400"
            ></textarea>
            <button
              type="submit"
              className="cursor-pointer w-full h-9 p-3 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full space-y-8 mt-10 lg:mt-0 md:flex md:flex-wrap md:gap-10 lg:gap-0 lg:flex-0">
          <div className="flex items-center gap-4">
            <div className="bg-white/50 backdrop-blur-md p-2 rounded-xl border border-white w-12 h-12 flex items-center justify-center">
              <img src="/7.contact/telefono.png" alt="phone" className="w-6" />
            </div>
            <div>
              <h2 className="font-semibold text-md">Phone</h2>
              <p className="text-gray-400">+880124332334</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/50 backdrop-blur-md border border-white p-2 rounded-xl w-12 h-12 flex items-center justify-center">
              <img src="/7.contact/email.png" alt="email" className="w-6" />
            </div>
            <div>
              <h2 className="font-semibold text-md">Email</h2>
              <p className="text-gray-400">something@email.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/50 backdrop-blur-md border border-white p-2 rounded-xl w-12 h-12 flex items-center justify-center">
              <img
                src="/7.contact/location.png"
                alt="location"
                className="w-6"
              />
            </div>
            <div>
              <h2 className="font-semibold text-md">Location</h2>
              <p className="text-gray-400">
                43/A Spooner Street,
                <br />
                St laurence, Virginia,
                <br /> Texas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
