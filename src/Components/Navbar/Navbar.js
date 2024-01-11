import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("reponsive");
  }

  function removeNavbar() {
    navRef.current.classList.remove("reponsive");
  }

  return (
    <nav className="navbar">
      <div>
        <h1 className="nav-logo">CruiseCarts</h1>
      </div>

      <div ref={navRef} className="nav-links">
        <button className=" btn nav-close " onClick={removeNavbar}>
          <i class="fa-solid fa-x"></i>
        </button>
        <Link className="link" onClick={removeNavbar} to="/">
          Shop
        </Link>

        <Link className="link" onClick={removeNavbar} to="supportpage">
          Support
        </Link>
      </div>
      <button className="nav-open btn" onClick={showNavbar}>
        <i class="fa-solid fa-bars fa-2x "></i>
      </button>
    </nav>
  );
}

export default Navbar;
