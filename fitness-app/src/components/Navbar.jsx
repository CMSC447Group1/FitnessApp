import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.svg";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar overflow-clip bg-black">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img className="logo" src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/exercises"> Exercises </Link>
          <Link to="/sheets"> Sheets </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/exercises"> Exercises </Link>
        <Link to="/sheets"> Sheets </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
