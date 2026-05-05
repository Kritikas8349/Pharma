import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo_novajoy.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // 🔥 HYBRID NAVIGATION (SCROLL + ROUTING)
  const handleLinkClick = (item) => {
    setActive(item);
    setMenuOpen(false);

    // 👉 ROUTES
    if (item === "products") {
      navigate("/products");
      return;
    }

    if (item === "contact") {
      navigate("/contact");
      return;
    }

    // 👉 IF NOT ON HOME → GO HOME THEN SCROLL
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        if (item === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.getElementById(item);
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return;
    }

    // 👉 NORMAL SCROLL (HOME PAGE)
    if (item === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(item);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ SCROLL EFFECT + AUTO CLOSE
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>

      {/* MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {["home", "about", "products", "contact"].map((item) => (
          <li
            key={item}
            className={
              (location.pathname === "/products " && item === "products") ||
              (location.pathname === "/contact" && item === "contact") ||
              (location.pathname === "/" && active === item)
                ? "active"
                : ""
            }
            onClick={() => handleLinkClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="cta">
        <button onClick={() => navigate("/contact")}>
          Get in Touch
        </button>
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