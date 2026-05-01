import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../assets/logo_novajoy.png";

const Navbar = () => {

  
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(); // 👈 for outside click

  const toggleMenu = () => {
    
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (item) => {
    setActive(item);
    setMenuOpen(false);
  
    // HOME scroll top
    if (item === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  
    // SAFE SCROLL
    const section = document.getElementById(item);
  
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ SCROLL + AUTO CLOSE
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // close menu on scroll
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // ✅ CLICK OUTSIDE CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
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