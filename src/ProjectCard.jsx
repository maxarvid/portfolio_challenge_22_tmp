import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} wrapped className="image" />
      <div>
        <h3 className="header">{project.name}</h3>
        <p className="description">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
