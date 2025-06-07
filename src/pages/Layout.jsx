import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "./Layout.css";

function Layout() {  
  return (
    <div>
      <section className="nav"><Navbar /></section>
      <section><Outlet /></section>
      


    </div>
  );
}

export default Layout;
