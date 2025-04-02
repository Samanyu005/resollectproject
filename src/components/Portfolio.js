import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace this with a fetch call if you have an API or a local JSON file
    const dummyData = [
      { id: 1, title: "Project A", description: "Description A" },
      { id: 2, title: "Project B", description: "Description B" }
    ];
    setProjects(dummyData);
  }, []);

  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
