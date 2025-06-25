import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/internship", label: "Internship" },
];

const moreLinks = [
  { path: "/certifications", label: "Certifications" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass =
    "relative px-3 py-2 text-light hover:text-primary transition duration-300";
  const activeClass = "text-secondary font-bold";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* 🔗 Logo */}
        <Link to="/">
          <motion.h1
            className="text-xl md:text-2xl font-bold text-primary flex space-x-1"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {"Vivek Choure".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </Link>

        {/* 🌐 Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 relative">
          {mainLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              {label}
            </NavLink>
          ))}

          {/* ⭐ More Dropdown */}
          <div
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
            className="relative"
          >
            <button className="px-3 py-2 text-light hover:text-primary font-medium">
              More ▾
            </button>

            {showMore && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-10 right-0 w-44 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg shadow-md overflow-hidden z-50"
              >
                {moreLinks.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className="block px-4 py-3 text-sm text-light hover:bg-background hover:text-secondary transition"
                    onClick={() => setShowMore(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </motion.ul>
            )}
          </div>
        </nav>

        {/* 📱 Mobile Toggle */}
        <div className="md:hidden text-3xl text-light" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* 📱 Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-background/90 backdrop-blur-md"
          >
            {[...mainLinks, ...moreLinks].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 text-lg border-b border-card ${
                    isActive ? "text-secondary font-semibold" : "text-light"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
