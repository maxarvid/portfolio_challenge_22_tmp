import React from "react";
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Header.jsx", () => {
  beforeEach(() => {
    render(
      <BroserRouter>
        <Header />
      </BroserRouter>
    );
  });

  it('is expected to display "My Portfolio"', () => {
    expect(screen.getByText("My Portfolio")).toBeVisible();
  });

  it('is expected to display "About Me"', () => {
    expect(screen.getByText("About Me")), toBeVisible();
  });

  it('is expected to be displayed "My Projects"', () => {
    expect(screen.getByText("My Projects")).toBeVisible();
  });
});
