import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import profileImage from "../assets/portfolio-Profile.jpg";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-2">📬 Contact Me</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Feel free to reach out for collaborations, freelance work, or just to say hi!
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section - Profile Info */}
        <motion.div
          className="bg-white/5 p-6 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center">
            <img
              src={profileImage}
              alt="Vivek Choure"
              className="w-32 h-32 rounded-full border-4 border-primary object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-secondary mb-2">
              Vivek Choure
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              Upcoming Software Engineer ||  Data Analyst || Frontend Developer
            </p>
          </div>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" /> vivekchoure606@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-primary" /> +91 7067368075
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" /> Bhopal, Madhya Pradesh
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-primary" />
              <a
                href="https://www.linkedin.com/in/vivek-choure-8a7a391aa/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-primary" />
              <a
                href="https://github.com/vivekchoure"
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="bg-white/5 p-6 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
