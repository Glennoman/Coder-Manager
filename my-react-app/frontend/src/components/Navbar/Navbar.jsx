import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming custom styles are added

const Navbar = ({ containerStyles }) => {
  const [isActive, setIsActive] = useState("home");

  return (
    <header
      className="flex flex-wrap justify-between items-center"
      style={containerStyles}
    >
      <div className="flex items-center justify-center">
        <img src="/assets/logo.svg" alt="CLA Logo" />
        <p className="header-logo">CodeCLA</p>
      </div>
      <nav className="flex justify-evenly items-center gap-4">
        <a
          href="#testimonials"
          onClick={() => setIsActive("testimonials")}
          className={isActive === "testimonials" ? "active-link" : ""}
        >
          For Coders
        </a>
        <a
          href="forms.html"
          target="_blank"
          onClick={() => setIsActive("developers")}
          className={isActive === "developers" ? "active-link" : ""}
        >
          For Developers
        </a>
        <Link
          to="/register"
          target="_blank"
          onClick={() => setIsActive("join-now")}
          className={`join-now-button ${
            isActive === "register" ? "active-link" : ""
          }`}
        >
          Join Now
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
