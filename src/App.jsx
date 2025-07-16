import React from "react";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/body/Contact";
import Details from "./components/body/Details";
import Features from "./components/body/Features";
import Projects from "./components/body/Projects";
import Service from "./components/body/Service";
import Team from "./components/body/Team";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="screen-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/features" element={<Features />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Service />
    </div>
  );
}
