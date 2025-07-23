import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/home/Home";

test("renders learn react link", () => {
  render(<Home />);
  const textElement = screen.getByText(/O Sabor do Verão!/i);
  expect(textElement).toBeInTheDocument();
});