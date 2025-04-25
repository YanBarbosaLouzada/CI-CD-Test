import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      {/* Outlet é o conteudo principal da nossa pagina */}
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
