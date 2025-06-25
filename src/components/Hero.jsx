import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 md:px-20">
      <div className="text-center">
        {/* Animated Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm Vivek Choure
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-light text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
         Upcoming Software Engineer | Data Analyst | Frontend Developer | Tech Enthusiast
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
  to="/resume"
  className="bg-primary text-black font-medium px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
>
  View Resume
</Link>
          <Link
            to="/contact"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
