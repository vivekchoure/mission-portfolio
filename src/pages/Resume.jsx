import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload, FaUserTie, FaStar, FaCheckCircle } from "react-icons/fa";
import resumeFile from "../assets/Vivek_Choure_Resume.pdf";

const Resume = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-20">
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-2">📝 Resume</h1>
        <p className="text-gray-400 text-sm md:text-base">
          View or download my resume and explore a quick snapshot of my skills and journey.
        </p>
      </motion.div>

      {/* Resume Card */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-3xl shadow-lg p-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-secondary mb-2">Vivek Choure</h2>
            <p className="text-sm text-gray-300 mb-4">
              Passionate about <span className="text-primary font-semibold">Software Engineering</span> and <span className="text-primary font-semibold">Data Analytics</span>. I believe in writing clean code, continuous learning, and building real-world solutions with discipline.
            </p>

            <ul className="text-sm text-gray-300 space-y-2">
              <li><FaUserTie className="inline-block text-primary mr-2" /> Aspiring Software Engineer | Lifelong Learner | Data Enthusiast</li>
              <li><FaStar className="inline-block text-primary mr-2" /> React · SQL · C++ · DSA · OOPs · DBMS</li>
              <li><FaCheckCircle className="inline-block text-primary mr-2" /> 50+ LeetCode SQL Problems | 3 Strong Projects</li>
            </ul>
          </div>

          <a
            href={resumeFile}
            download="Vivek_Choure_Resume.pdf"
            className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-md transition duration-300"
          >
            <FaFileDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
