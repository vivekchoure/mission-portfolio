import React from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaBolt,
  FaCogs,
  FaGithub,
  FaLinkedin,
  FaMicrochip,
  FaTools,
} from "react-icons/fa";

const SolarScoutDetails = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-16">
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          ☀️ Solar Scout
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          A smart solar panel tracker powered by Arduino Nano and LDRs, built to
          maximize energy efficiency by aligning panels with the sun in real time.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Box */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/10 shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl font-bold text-secondary mb-4">
            💡 Project Objective
          </h2>
          <p className="text-gray-300 mb-6 leading-7 text-sm md:text-base">
            Create an autonomous solar panel tracking system using LDR sensors
            and servo motors to improve sunlight exposure by 30%+ compared to
            fixed-position panels.
          </p>

          <h3 className="text-lg font-semibold text-secondary mb-3">
            🚀 Key Highlights
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
            <li>
              <FaSun className="inline-block mr-2 text-primary" /> Dynamic sun
              tracking using differential light sensing
            </li>
            <li>
              <FaCogs className="inline-block mr-2 text-primary" /> Real-time
              servo adjustments based on LDR data
            </li>
            <li>
              <FaBolt className="inline-block mr-2 text-primary" /> Boosted
              solar output with optimized orientation
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-secondary mt-8 mb-3">
            🧰 Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Arduino Nano",
              "LDR Sensors",
              "Servo Motors",
              "Embedded C",
              "Arduino IDE",
              "Renewable Energy",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-secondary/10 text-secondary border border-secondary px-3 py-1 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg flex flex-col justify-between"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-primary mb-4">
            📌 Quick Info
          </h3>

          <div className="text-sm text-gray-300 space-y-3">
            <div className="flex items-center gap-2">
              <FaMicrochip className="text-primary" />
              Arduino Nano as microcontroller brain
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-primary" />
              Manual prototype built using low-cost components
            </div>
            <div className="flex items-center gap-2">
              <FaSun className="text-primary" />
              Proven 30%+ energy gain over static setup
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="text-md font-semibold text-secondary mb-3">
              🔗 Project Links
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://www.linkedin.com/posts/vivek-choure-8a7a391aa_i-am-thrilled-to-share-a-full-working-video-activity-7224785924558094336-lHHb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition"
              >
                <FaLinkedin className="text-lg" /> LinkedIn Video Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Projects Button */}
      <div className="mt-16 text-center">
        <a
          href="/projects"
          className="inline-block bg-secondary hover:bg-primary text-white px-6 py-2 rounded-full transition duration-300 shadow-md"
        >
          ← Back to Projects
        </a>
      </div>
    </section>
  );
};

export default SolarScoutDetails;
