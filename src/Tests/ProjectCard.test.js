import React from "react";
import ProjectCard from "../ProjectCard";
import { render, screen } from "@testing-library/react";

const project = {
  id: 1,
  name: "My First Website",
  image: "http://www.4president.us/websites/2000w/gore2000home.gif",
  description: "This was my first project",
};

describe("ProjectCard.jsx", () => {
  beforeEach(() => {
    render(<ProjectCard project={project} />);
  });

  it("is expected to display project cards", () => {
    expect(screen.getByText("My First Website")).toBeVisible();
  });
});
