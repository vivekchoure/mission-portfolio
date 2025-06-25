import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background text-light border-t border-white/10 px-6 md:px-20 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Branding & Bio */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">Vivek Choure</h2>
          <p className="text-sm text-gray-400">
            Passionate Software Engineer and Data Analyst focused on solving real-world problems through clean code, DSA, and creative logic.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-secondary transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-secondary transition">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-secondary transition">Skills</Link></li>
            <li><Link to="/internship" className="hover:text-secondary transition">Internship</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaGithub className="text-primary" />
              <a href="https://github.com/vivekchoure" target="_blank" rel="noreferrer" className="hover:text-secondary">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-primary" />
              <a href="https://www.linkedin.com/in/vivek-choure-8a7a391aa/" target="_blank" rel="noreferrer" className="hover:text-secondary">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaEnvelope className="text-primary" /> vivekchoure606@gmail.com</li>
            <li className="flex items-center gap-2"><FaPhone className="text-primary" /> +91 7067368075</li>
            <li className="flex items-center gap-2"><FaLocationArrow className="text-primary" /> Bhopal, MP</li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Vivek Choure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
