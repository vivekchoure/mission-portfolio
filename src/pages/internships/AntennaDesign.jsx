import React from "react";
import { motion } from "framer-motion";
import { FaSatelliteDish, FaSignal, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AntennaIntern = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          📡 Antenna Design Internship
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          A hands-on research internship focused on designing efficient antenna systems for real-world wireless communication.
        </p>
      </motion.div>

      {/* Main Box */}
      <motion.div
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-secondary mb-3 flex items-center gap-2">
          <FaSatelliteDish className="text-primary" /> MITS Gwalior | Jun – Aug 2024
        </h2>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-2">
          <li>
            Researched and designed <span className="text-primary font-medium">4G & 5G antennas</span> using simulation tools and hardware.
          </li>
          <li>
            Enhanced <span className="text-primary font-medium">signal strength and radiation efficiency</span> through iterative optimization.
          </li>
          <li>
            Validated antenna parameters against <span className="text-primary font-medium">real-world constraints</span> and theoretical models.
          </li>
          <li>
            Collaborated with faculty mentors on academic and industrial standards.
          </li>
        </ul>

        {/* Certificate */}
        <div className="mt-8 text-sm text-primary flex items-center gap-2">
          <FaExternalLinkAlt />
          <a
            href="https://drive.google.com/file/d/1wbdbMoEktswDeAIkd4EVau98STOM8bf-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Certificate
          </a>
        </div>
      </motion.div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <Link
          to="/internship"
          className="inline-block bg-secondary hover:bg-primary text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
        >
          ← Back to Internships
        </Link>
      </div>
    </section>
  );
};

export default AntennaIntern;
