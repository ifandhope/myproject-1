import React from "react";
import "./footer.css";
import heart from "../assets/heart.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img src={heart} className="footer-logo" alt="logo" />
        <div className="footer-navi">
          <label>Navigation:</label>
          <ul className="footer-link">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Zone</Link>
            </li>
            <li>
              <Link to="/">Diet</Link>
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

        <div className="footer-info">
          <label>For more information:</label>
          <ul className="footer-link-1">
            <li>
              <a href="https://www.bcheartfailure.ca">www.bcheartfailure.ca</a>
            </li>
            <li>
              <a href="https://www.healthlinkbc.ca">www.healthlinkbc.ca</a>
            </li>

            <li>
              <a href="https://www.ccs.ca">www.ccs.ca</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
