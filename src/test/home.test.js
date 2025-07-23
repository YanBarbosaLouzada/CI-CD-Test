import Home from "../pages/Home/Home";
import React from "react";
import { render } from "@testing-library/react";

describe('Home', () => {
  it('deve renderizar corretamente', () => {
    const { getByText } = render(<Home />);
    expect(getByText('O Sabor do Verão!')).toBeInTheDocument();
    expect(getByText('Experimente nossos sabores artesanais feitos com amor 💖')).toBeInTheDocument();
    expect(getByText('Ver Produtos')).toBeInTheDocument();
  });
});