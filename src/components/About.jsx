import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-section" id="about-section">
      <h3>
        <em>Understanding Heart Failure</em>
      </h3>
      <div className="card-container">
        <div className="card">
          <h4>Basic</h4>
          <p>When the heart is not pumping as strongly as it should.</p>
          <ul>
            <li>Weak pump</li>
            <li>Stiff pump</li>
          </ul>
        </div>

        <div className="card">
          <h4>Causes</h4>
          <ul className="list">
            <li>Heart attack</li>
            <li>High blood pressure</li>
            <li>Heart valve problem</li>
            <li>Lung condition</li>
          </ul>
        </div>

        <div className="card">
          <h4>Signs</h4>
          <ul className="list">
            <li>Shortness breath</li>
            <li>Cough often</li>
            <li>Heart beat fast</li>
            <li>Tired all the time</li>
            <li>Dizzy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
