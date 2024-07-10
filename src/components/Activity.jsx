import React, { useState } from "react";
import "./activity.css";

export default function Activity() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weight, setWeight] = useState("");
  const [pulse, setPulse] = useState("");
  const [bp, setBp] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const handleSave = () => {
    if (!date || !time || !weight || !pulse || !bp) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Saving check information...");
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Weight:", weight);
    console.log("Pulse:", pulse);
    console.log("Blood Pressure:", bp);

    setDate("");
    setTime("");
    setWeight("");
    setPulse("");
    setBp("");

    setSavedMessage("SAVED");
  };
  return (
    <div className="acitivity-container">
      <h3 className="activity-header">
        <ul>
          <li>KEEP ACTIVE!</li>
          <li>CONSERVE YOUR ENERGY!</li>
          <li>GET ENOUGH SLEEP!</li>
          <li>TAKE CARE OF YOUR PHYSICAL/EMOTIONAL HEALTH!</li>
        </ul>
      </h3>
      <div className="activity-row">
        <div className="activity-col">
          <h4>DO:</h4>
          <ul className="custom-ul">
            <li>Walking</li>
            <li>light housework</li>
            <li>Gardening</li>
            <li>light vacuuming</li>
            <li>Stretching</li>
            <li>Laundry</li>
            <li>Grocery shopping</li>
          </ul>
        </div>
        <div className="activity-col">
          <h4>DON'T:</h4>
          <ul className="custom-ul">
            <li>Drinking alcohol</li>
            <li>Smoking</li>
          </ul>
        </div>
      </div>
      <div className="info-row">
        <h2>Daily Check Information</h2>
        <div>
          <label htmlFor="date">Check Date: </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Check Time: </label>

          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight: </label>
          <input
            type="number"
            id="weight"
            name="weight"
            min={40}
            step={0.1}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <select id="weightUnit" name="weightUnit">
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
        <div>
          <label htmlFor="pulse">Pulse: </label>
          <input
            type="number"
            id="pulse"
            value={pulse}
            onChange={(e) => setPulse(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bp">Blood Pressure: </label>

          <input
            type="text"
            id="bp"
            value={bp}
            onChange={(e) => setBp(e.target.value)}
            required
          />
          <div>
            <button className="info-btn" onClick={handleSave}>
              SAVE
            </button>
          </div>
        </div>
        {savedMessage && <p className="saved-message">{savedMessage}</p>}
      </div>
    </div>
  );
}
