import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "BookNexusDB",
      description:
        "An advanced SQL-based project analyzing real-world book sales and customer trends.",
      highlights: [
        "Used joins and grouping to uncover data insights",
        "Indexed key columns to optimize query performance",
        "Extracted top-selling books and seasonal trends",
      ],
      tech: ["SQL", "MySQL Workbench", "Indexing", "Data Analysis"],
      link: "https://lnkd.in/dy9EVC-s",
    },
    {
      title: "DuoConnect",
      description:
        "A modern video calling app using React, WebRTC, and Socket.IO for seamless real-time communication.",
      highlights: [
        "WebRTC peer-to-peer streaming",
        "Used Socket.IO for signaling and call events",
        "Responsive interface and call controls",
      ],
      tech: ["React.js", "WebRTC", "Socket.IO", "Context API"],
      link: "https://github.com/vivekchoure/Duo-Connect",
    },
    {
      title: "Solar Scout",
      description:
        "A servo-powered solar tracker using Arduino Nano and LDR sensors, boosting panel efficiency.",
      highlights: [
        "Built using Arduino IDE, Nano, LDR, and servos",
        "Tracked sunlight in real-time for auto panel rotation",
        "30%+ efficiency gain and research recognition",
      ],
      tech: ["Arduino", "LDR Sensors", "Servo Motors", "Renewable Tech"],
      link: "https://www.linkedin.com/posts/vivek-choure-8a7a391aa_i-am-thrilled-to-share-a-full-working-video-activity-7224785924558094336-lHHb/",
    },
  ];

  return (
    <section className="min-h-screen bg-background text-light px-6 md:px-20 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        Projects that Define Me
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
