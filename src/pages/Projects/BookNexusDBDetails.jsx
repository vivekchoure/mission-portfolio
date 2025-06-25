import React from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaCode,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaTable,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

const BookNexusDB = () => {
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
          📚 BookNexusDB
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          A powerful SQL-based analytics project revealing deep insights in book
          sales and customer behavior using optimized queries and smart schema
          design.
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
            Transform raw transactional data into strategic insights: discover
            top books, analyze customer behavior, detect sales trends, and
            optimize query performance using SQL.
          </p>

          <h3 className="text-lg font-semibold text-secondary mb-3">
            🚀 Key Highlights
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
            <li>
              <FaDatabase className="inline-block mr-2 text-primary" /> Complex
              joins across customers, books & orders
            </li>
            <li>
              <FaCode className="inline-block mr-2 text-primary" /> Aggregated
              data to extract sales & loyalty patterns
            </li>
            <li>
              <FaRocket className="inline-block mr-2 text-primary" /> Indexed
              columns to boost performance by 60%
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-secondary mt-8 mb-3">
            🧰 Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "SQL",
              "MySQL Workbench",
              "Joins",
              "Indexing",
              "Relational DB",
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
              <FaTable className="text-primary" />
              Structured database with normalized tables
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-primary" />
              Grouping to identify trends & top-selling items
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-primary" />
              Indexed key columns for fast query performance
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="text-md font-semibold text-secondary mb-3">
              🔗 Project Links
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/vivekchoure/BookNexusDB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition"
              >
                <FaGithub className="text-lg" /> GitHub Repository
              </a>
              <a
                href="https://www.linkedin.com/posts/vivek-choure-8a7a391aa_booknexusdb-activity-7313612610367578114-E4RK/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition"
              >
                <FaLinkedin className="text-lg" /> LinkedIn Showcase
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


export default BookNexusDB;
