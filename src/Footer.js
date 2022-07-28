import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function Footer() {

  return (
    <div className="header">
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <DarkMode />
    </div>
  );
}

export default Footer;
