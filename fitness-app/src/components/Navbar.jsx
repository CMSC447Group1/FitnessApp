import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/RandomFitnessLogo.png";

function Navbar() {
  // const[openLinks, setOpenLinks] = useState(false)

  //const toggleNavbar = () => {
  // setOpenLinks(!openLinks)
  //}

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        {/* <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div> */}
      </div>
      <div className="rightSide">
        {/* <Link to="/"> Home </Link>
                <Link to="/exercises"> Exercises </Link>
                <Link to="/sheets"> Sheets </Link> */}
        Home&emsp; &emsp; &emsp;Exercieses&emsp; &emsp; &emsp;Sheets
      </div>
    </div>
  );
}

export default Navbar;
