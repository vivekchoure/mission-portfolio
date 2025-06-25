import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/portfolio-Profile.jpg";


const skills = [
  "C++", "SQL", "DBMS", "OOPs", "DSA", "MySQL Workbench",
  "HTML", "CSS", "JavaScript", "React (Basic)", "Computer Networks",
];

const About = () => {
  return (
    <section className="min-h-screen bg-background text-light px-6 md:px-20 py-20">
      {/* Title & Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          About Me
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={profileImage}
            alt="Vivek Choure"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-lg shadow-secondary/30 object-cover hover:scale-105 transition duration-300"
          />
        </div>
        <p className="mt-2 text-light max-w-3xl mx-auto text-sm md:text-base">
          I'm <span className="text-secondary font-semibold">Vivek Choure</span>,
          a tech enthusiast passionate about software, data, and design. I believe in continuous learning, hard work, and building creative real-world solutions with clean code and logic.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-card p-6 rounded-xl shadow-md"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaGraduationCap className="text-2xl text-secondary" />
            <h2 className="text-xl font-semibold text-primary">Education</h2>
          </div>
          <ul className="text-sm space-y-3">
            <li>
              <strong>B.Tech in Electronics</strong>
              <br /> MITS Gwalior (2021–2025) — CGPA: 8.4
            </li>
            <li>
              <strong>Class XII (CBSE)</strong>
              <br /> MGM Higher Secondary School — 87.4%
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-card p-6 rounded-xl shadow-md"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCode className="text-2xl text-secondary" />
            <h2 className="text-xl font-semibold text-primary">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="bg-background border border-light text-light px-4 py-1 rounded-full text-xs"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="my-14 hidden md:block border-t border-white/10"></div>

      {/* Quote */}
      <div className="text-center mt-10">
        <p className="italic text-secondary text-sm md:text-base">
          “Fuelled by curiosity. Driven by impact.” — <span className="font-semibold text-primary">Vivek</span>
        </p>
      </div>

      {/* Optional: Socials */}
      <div className="mt-6 text-center">
        <a
          href="https://github.com/vivekchoure"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition mx-2"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vivek-choure-8a7a391aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition mx-2"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default About;
