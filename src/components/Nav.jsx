import React from "react";
import heart from "../assets/heart.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [linkOpen, setLinkOpen] = useState(false);

  const toggleMenu = () => {
    setLinkOpen(!linkOpen);
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={`navbar ${linkOpen ? "open" : ""}`}>
      <div className="logo-container">
        <a href="/" className="logo">
          <img src={heart} alt="logo" />
        </a>
        <h3>Living with Heart Failure</h3>

        {!linkOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        <ul className={`nav-links ${linkOpen ? "visible" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#about" onClick={handleClick("about-section")}>
              About
            </a>
          </li>
          <li>
            <a href="/#zone" onClick={handleClick("zone-section")}>
              Zone
            </a>
          </li>
          <li>
            <a href="/#diet" onClick={handleClick("diet-section")}>
              Diet
            </a>
          </li>
          <li>
            <Link to="/dailyCheck">
              <a href="/">DailyCheck</a>
            </Link>
          </li>
          <li>
            <Link to="/activity">
              <a href="/">Activity</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
