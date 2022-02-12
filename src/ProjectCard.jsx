import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <img src={project.image} wrapped ui={false} className="image" />
      <div>
        <h3 className="header">{project.name}</h3>
        <p className="description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
