import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // 🔺 At top of file

const ProjectCard = ({ title, description, highlights, tech, link }) => {
  const navigate = useNavigate();

  const getRoutePath = (title) => {
    switch (title.toLowerCase()) {
      case "booknexusdb":
        return "/projects/booknexusdb";
      case "duoconnect":
        return "/projects/duoconnect";
      case "solar scout":
        return "/projects/solarscout";
      default:
        return "/projects";
    }
  };

  return (
    <motion.div
      className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={() => navigate(getRoutePath(title))}
    >
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-2">{title}</h2>
        <p className="text-sm text-light mb-4">{description}</p>
        <ul className="text-xs text-gray-400 mb-4 list-disc pl-5 space-y-1">
          {highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-background border border-light text-light text-xs px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <Link
  to={`/projects/${title.toLowerCase().replace(/\s+/g, "")}`}
  className="mt-4 flex items-center text-sm text-secondary hover:underline"
>
  View Project <FaArrowRight className="ml-2" />
</Link>
    </motion.div>
  );
};

export default ProjectCard;
