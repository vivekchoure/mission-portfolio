import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMicroscope, FaSatelliteDish, FaPenNib } from "react-icons/fa";

const internships = [
  {
    icon: <FaMicroscope className="text-xl text-secondary" />,
    title: "ML & Data Science Intern",
    org: "Feynn Labs",
    time: "Jan 15, 2025 – Mar 30, 2025",
    link: "/internships/ml-intern",
    highlights: [
      "Developed AI prototypes & business models",
      "Applied ML for market segmentation",
    ],
  },
  {
    icon: <FaSatelliteDish className="text-xl text-secondary" />,
    title: "Antenna Design Research Intern",
    org: "MITS Gwalior",
    time: "Jun 1, 2024 – Aug 15, 2024",
    link: "/internships/antenna-design",
    highlights: [
      "Researched 4G/5G antenna designs",
      "Optimized models for better performance",
    ],
  },
  {
    icon: <FaPenNib className="text-xl text-secondary" />,
    title: "Technical Content Writer",
    org: "IETE Students Forum MITS",
    time: "Aug 2022 – Feb 2025",
    link: "/internships/content-writer",
    highlights: [
      "Created content for tech events",
      "Wrote professional emails & documents",
    ],
  },
];

const Internship = () => {
  return (
    <section className="min-h-screen bg-background text-light px-6 md:px-20 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        Internship Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-card border border-light/10 p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-secondary text-center">{item.title}</h3>
              <p className="text-sm text-gray-400 text-center">{item.org}</p>
              <p className="text-xs text-gray-500 text-center mb-3">{item.time}</p>
              <ul className="list-disc text-sm text-light pl-5 space-y-1 mb-4">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <Link
              to={item.link}
              className="text-primary text-sm hover:underline mt-2 text-center"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
