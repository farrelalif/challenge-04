import React from "react";
import { FooterDefault } from "../Assets/Compenents/Footer/FooterDefault";
import { NavbarDefault } from "../Assets/Compenents/Navbar/NavbarDefault";
import { SewaMobil } from "./SewaMobil/SewaMobil";

export const Layout = () => {
  return (
    <div>
      <SewaMobil/>
      <NavbarDefault />
  
      <FooterDefault />
    </div>
  );
};
