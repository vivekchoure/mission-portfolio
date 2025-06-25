import React from "react";

const SkillTag = ({ name }) => {
  return (
    <span className="bg-secondary/10 text-secondary border border-secondary px-4 py-1 text-sm rounded-full hover:scale-105 transition transform duration-300">
      {name}
    </span>
  );
};

export default SkillTag;
