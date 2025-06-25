import React from "react";
import { Routes, Route } from "react-router-dom";

// Core Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Internship from "../pages/Internship";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

// Project Detail Pages
import BookNexusDBDetails from "../pages/Projects/BookNexusDBDetails";
import DuoConnectDetails from "../pages/Projects/DuoConnectDetails";
import SolarScoutDetails from "../pages/Projects/SolarScoutDetails";

// Internship Detail Pages
import MLIntern from "../pages/internships/MLIntern";
import AntennaDesign from "../pages/internships/AntennaDesign";
import ContentWriter from "../pages/internships/ContentWriter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />

      {/* Project Detail Routes */}
      <Route path="/projects/booknexusdb" element={<BookNexusDBDetails />} />
      <Route path="/projects/duoconnect" element={<DuoConnectDetails />} />
      <Route path="/projects/solarscout" element={<SolarScoutDetails />} />

      {/* Internship Detail Routes */}
      <Route path="/internships/ml-intern" element={<MLIntern />} />
      <Route path="/internships/antenna-design" element={<AntennaDesign />} />
      <Route path="/internships/content-writer" element={<ContentWriter />} />
    </Routes>
  );
};

export default AppRoutes;
