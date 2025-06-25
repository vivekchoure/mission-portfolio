import React from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaPlug,
  FaDesktop,
  FaGithub,
  FaLinkedin,
  FaSignal,
  FaReact,
  FaServer,
} from "react-icons/fa";

const DuoConnectDetails = () => {
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
          🎥 DuoConnect
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          A real-time one-on-one video calling app built with WebRTC, Socket.IO,
          and React — designed for professional interviews and private conversations.
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
            Build a secure, minimal-latency, peer-to-peer video platform optimized
            for one-on-one professional interactions like interviews and client calls.
          </p>

          <h3 className="text-lg font-semibold text-secondary mb-3">
            🚀 Key Highlights
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
            <li>
              <FaVideo className="inline-block mr-2 text-primary" /> Peer-to-peer video calling using WebRTC
            </li>
            <li>
              <FaSignal className="inline-block mr-2 text-primary" /> Socket.IO for real-time call signaling
            </li>
            <li>
              <FaDesktop className="inline-block mr-2 text-primary" /> Responsive React UI with call controls
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-secondary mt-8 mb-3">
            🧰 Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "WebRTC",
              "Socket.IO",
              "Node.js",
              "JavaScript",
              "Peer-to-Peer",
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
              <FaReact className="text-primary" />
              Built with component-based React architecture
            </div>
            <div className="flex items-center gap-2">
              <FaPlug className="text-primary" />
              Real-time signaling handled by Socket.IO server
            </div>
            <div className="flex items-center gap-2">
              <FaServer className="text-primary" />
              Backend powered by Node.js for signaling only
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="text-md font-semibold text-secondary mb-3">
              🔗 Project Links
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/vivekchoure/Duo-Connect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary transition"
              >
                <FaGithub className="text-lg" /> GitHub Repository
              </a>
              <a
                href="https://www.linkedin.com/posts/vivek-choure-8a7a391aa"
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

export default DuoConnectDetails;
