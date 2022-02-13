import React from "react";
import { render } from "react-dom";
import Projects from "../projects";
import { render, screen } from "@testing-library/react";

describe("projects.jsx", () => {
  let aciosSpy;

  const mockedResponse = [
    {
      id: 1,
      name: "My First Website",
    },
  ];
  beforeEach(() => {
    axiosSpy = jest.spyOn(axios, "get").mockedResolvedValue(mockedResponse);
    (useStateSpy = jest.spyOn(React, "useState")), render(<Projects />);
  });

  it("is expected to make a call using axios", () => {
    expect(axiosSpy).toHaveBeenCalled();
  });
});
