import React from "react";
import { FooterDefault } from "../component/Footer/FooterDefault";
import { NavbarDefault } from "../component/Navbar/NavbarDefault";
import { SewaMobil } from "./SewaMobil/SewaMobil";
import './Layout.css'

export const Layout = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <SewaMobil/>
      <NavbarDefault />
      </div>
  
      <FooterDefault />
    </div>
  );
};
