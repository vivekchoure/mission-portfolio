import React from "react";

const ProjectDetails = ({ title, description, features, github }) => {
  return (
    <div className="mb-20">
      <h2 className="text-2xl text-secondary font-bold mb-2">{title}</h2>
      <p className="text-sm text-light mb-4">{description}</p>
      <ul className="list-disc pl-5 text-sm text-gray-400 mb-4 space-y-1">
        {features.map((feat, i) => (
          <li key={i}>{feat}</li>
        ))}
      </ul>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary underline"
      >
        View More
      </a>
    </div>
  );
};

export default ProjectDetails;
