import React from "react";
import "./zone.css";
import { Link } from "react-router-dom";

export default function Zone() {
  return (
    <div className="zone-container" id="zone-section">
      <h3 className="heading-button">
        <em> Which Zone Are You Today?</em>
        <span className="zone-button">
          <Link to="/dailyCheck">
            <button className="check-button" aria-label="On Click">
              ClickMe
            </button>
          </Link>
        </span>
      </h3>

      <div className="container">
        <div className="round-box-1">
          <h4 className="round-text-1">Safe Zone</h4>
          <p className="zone-p">All Clear</p>
        </div>

        <div className="round-box-2">
          <h4 className="round-text-2">Caution Zone</h4>
          <p className="zone-p">Warning</p>
        </div>

        <div className="round-box-3">
          <h4 className="round-text-3">Danger Zone</h4>
          <p className="zone-p">Emergency</p>
        </div>
      </div>
    </div>
  );
}
