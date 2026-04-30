import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo_novajoy.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (item) => {
    setActive(item);
    setMenuOpen(false); // close menu after click
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {["home", "about", "products", "contact"].map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => handleLinkClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="cta">
        <button>Get in Touch</button>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
};

export default Navbar;