import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const certifications = [
  {
    title: "Python for Data Science – NPTEL",
    platform: "NPTEL",
    link: "https://drive.google.com/file/d/1HOls9GwoQ4hY-RjzOMsWMX7vi3Iomfbt/view",
  },
  {
    title: "Fuzzy Sets, Logic & Applications – NPTEL",
    platform: "NPTEL",
    link: "https://drive.google.com/file/d/1rUjyr_3hoORI2J5JGxOm10EKIEACfdqC/view?usp=sharing",
  },
  {
    title: "Advanced Remote Sensing for Geological Applications – ISRO",
    platform: "ISRO",
    link: "https://drive.google.com/file/d/1gQBMICQbG9fkufgVjuFvEsKbSaB6VDmf/view",
  },
  {
    title: "50 SQL Questions Solved – LeetCode",
    platform: "LeetCode",
    link: "https://leetcode.com/u/vivek_choure/",
  },
];

const Certifications = () => {
  return (
    <section className="min-h-screen bg-background text-light px-6 md:px-20 py-20">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary">🎓 Certifications</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          These certifications reflect my commitment to mastering concepts in data science, logic systems, remote sensing, and SQL proficiency.
        </p>
      </motion.div>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center gap-4 mb-3">
              <FaCertificate className="text-secondary text-xl" />
              <h2 className="text-lg font-semibold text-primary">{cert.title}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">Platform: <span className="text-light">{cert.platform}</span></p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-secondary hover:underline"
            >
              View Certificate <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
