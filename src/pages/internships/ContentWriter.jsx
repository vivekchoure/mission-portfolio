import React from "react";
import { motion } from "framer-motion";
import { FaPenNib, FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContentWriterIntern = () => {
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
          📝 Technical Content Writer Internship
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Created powerful tech content and engaged the student tech community as a key member of the IETE Students Forum at MITS.
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
          <FaPenNib className="text-primary" /> IETE Forum, MITS | Aug 2022 – Feb 2025
        </h2>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-2">
          <li>
            Created <span className="text-primary font-medium">technical write-ups</span> and promotional content for hackathons, tech fests, and coding competitions.
          </li>
          <li>
            Wrote <span className="text-primary font-medium">professional emails</span>, invitations, and event proposals to engage students and sponsors.
          </li>
          <li>
            Collaborated with event coordinators to boost <span className="text-primary font-medium">event visibility and participation</span>.
          </li>
          <li>
            Maintained a disciplined and content-focused approach to build the tech ecosystem on campus.
          </li>
        </ul>

        {/* Certificate */}
        <div className="mt-8 text-sm text-primary flex items-center gap-2">
          <FaExternalLinkAlt />
          <a
            href="https://drive.google.com/file/d/1LF_VcwwbcMbtPhyUi7R6NzeFd-Kr2TA6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Certificate (Vice President IETE)
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

export default ContentWriterIntern;
