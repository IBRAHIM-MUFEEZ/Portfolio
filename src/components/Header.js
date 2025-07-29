import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <h1 className="logo">Mohammad Mufeez Ibrahim</h1>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/skills"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
