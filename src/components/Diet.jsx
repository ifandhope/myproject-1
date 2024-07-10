import React from "react";
import "./diet.css";

export default function Diet() {
  return (
    <div className="diet-container" id="diet-section">
      <h3>
        <em>Limiting Sodium, Potassium, and Liquid!</em>
      </h3>
      <div className="diet">
        <h4>
          SODIUM <span> :</span>
          <span>
            <h5>Intake less than 2000mg each day</h5>
          </span>
        </h4>
        <h4>
          POTASSIUM:{" "}
          <span>
            <h5>Safe(Normal) - 3.5~5.0 mmol/L</h5>
          </span>
        </h4>
        <h4>
          FLUID:{" "}
          <span>
            <h5>No more than 1.5 to 2 litres in a day</h5>
          </span>
        </h4>
      </div>
    </div>
  );
}
