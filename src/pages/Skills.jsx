import React from "react";
import { motion } from "framer-motion";
import SkillTag from "../components/SkillTag";
import { FaCode, FaDatabase, FaLaptopCode, FaTools, FaCogs } from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming",
    icon: <FaCode className="text-secondary text-xl" />,
    skills: ["C++", "Python"],
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-secondary text-xl" />,
    skills: ["HTML", "CSS", "JavaScript", "React (Basic)", "Tailwind CSS"],
  },
  {
    title: "Backend / Database",
    icon: <FaDatabase className="text-secondary text-xl" />,
    skills: ["SQL", "MySQL Workbench", "DBMS"],
  },
  {
    title: "Core Concepts",
    icon: <FaCogs className="text-secondary text-xl" />,
    skills: ["OOPs", "DSA", "Computer Networks", "Operating System"],
  },
  {
    title: "Tools",
    icon: <FaTools className="text-secondary text-xl" />,
    skills: ["VS Code", "Git", "Power BI", "Excel"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-background text-light px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary">⚡ My Skill Set</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Here's a glimpse of the tech stack and core concepts I've mastered across frontend, backend, and core CS. Also preparing tools for Data Analytics.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              {group.icon}
              <h3 className="text-lg font-semibold text-primary">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <SkillTag key={i} name={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
