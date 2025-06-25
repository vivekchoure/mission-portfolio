import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaCertificate, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Antenna Design Research Intern",
    org: "MITS Gwalior",
    period: "June 2024 – Aug 2024",
    points: [
      "Designed and optimized 4G/5G antenna models",
      "Improved signal strength and radiation coverage",
      "Worked under faculty guidance using industry standards",
    ],
  },
  {
    title: "Technical Content Writer",
    org: "IETE Students Forum",
    period: "Aug 2022 – Feb 2025",
    points: [
      "Wrote engaging technical content for hackathons and webinars",
      "Designed posters, emails and outreach letters",
      "Contributed to student tech community building",
    ],
  },
];

const leadership = [
  {
    title: "Vice President",
    org: "IETE MITS",
    period: "Oct 2023 – Present",
    points: [
      "Led events with 400+ participants",
      "Managed a team of 30 volunteers",
      "Organized contests, workshops and seminars",
    ],
  },
  {
    title: "Head Boy",
    org: "MGM School",
    period: "2020",
    points: ["Led school assemblies and student council"],
  },
];

const certifications = [
  "Fuzzy Logic & Applications – NPTEL",
  "Advanced Remote Sensing – ISRO",
  "Solved 50+ SQL Questions – LeetCode",
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-background text-light px-6 md:px-20 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        My Journey & Impact
      </h1>

      {/* Internship & Experience */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <FaBriefcase className="text-2xl text-secondary" />
          <h2 className="text-xl font-semibold text-primary">Experience</h2>
        </motion.div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-5 rounded-xl border border-light/20"
            >
              <h3 className="text-lg font-semibold text-secondary">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.org} | {exp.period}</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-light space-y-1">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <FaUserTie className="text-2xl text-secondary" />
          <h2 className="text-xl font-semibold text-primary">Leadership</h2>
        </motion.div>
        <div className="space-y-6">
          {leadership.map((role, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-5 rounded-xl border border-light/20"
            >
              <h3 className="text-lg font-semibold text-secondary">{role.title}</h3>
              <p className="text-sm text-gray-400">{role.org} | {role.period}</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-light space-y-1">
                {role.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className="flex items-center gap-4 mb-6">
          <FaCertificate className="text-2xl text-secondary" />
          <h2 className="text-xl font-semibold text-primary">Certifications</h2>
        </div>
        <ul className="list-disc pl-6 text-sm space-y-2 text-light">
          {certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
