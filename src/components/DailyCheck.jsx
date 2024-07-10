import React from "react";
import "./dailyCheck.css";

export default function DailyCheck() {
  return (
    <div className="dailyCheck-container">
      <div className="dailyCheck-header">
        <h4 className="safe-text">ALL CLEAR - This zone is your goal!</h4>
        <h5>Your symptoms are under control.</h5>
        <div className="dailyCheck-green">
          <h5 className="green-text">Safe Zone</h5>
        </div>
      </div>

      <div className="dailyCheck-green-list">
        <ul>
          <li>
            <input
              type="checkbox"
              id="shortnessOfBreath"
              name="shortnessOfBreath"
            />
            <label htmlFor="shortnessOfBreath">No shortness of breath</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="chestDiscomfort"
              name="chestDiscomfort"
            />
            <label htmlFor="chestDiscomfort">
              No chest discomfort, pressure, or pain
            </label>
          </li>
          <li>
            <input type="checkbox" id="noSwelling" name="noSwelling" />
            <label htmlFor="noSwelling">
              No swelling of your feet, ankles, legs, or stomach
            </label>
          </li>
          <li>
            <input type="checkbox" id="noWeightGain" name="noWeightGain" />
            <label htmlFor="noWeightGain">No weight gain</label>
          </li>
        </ul>
      </div>
      <hr className="border-line" />
      <div className="dailyCheck-header">
        <h4 className="warning-text">CAUTION - This zone is a warning!</h4>
        <h5>Call your health provider if you have any of the following:</h5>
        <div className="dailyCheck-yellow">
          <h5 className="yellow-text">Caution</h5>
        </div>
      </div>

      <div className="dailyCheck-yellow-list">
        <ul>
          <li>
            <input type="checkbox" id="weightGain" name="weightGain" />
            <label htmlFor="weightGain">
              More than 2kg over 2days in a row or 2.5kg in 1 week
            </label>
          </li>
          <li>
            <input type="checkbox" id="vomit" name="vomit" />
            <label htmlFor="vomit">
              Vomiting and/or diarrhea that lasts more than 2 days
            </label>
          </li>
          <li>
            <input type="checkbox" id="sob" name="sob" />
            <label htmlFor="sob">More shortness of breath than usual</label>
          </li>
          <li>
            <input type="checkbox" id="swelling" name="swelling" />
            <label htmlFor="swelling">
              Increased swelling in feet, ankles, legs, or stomach
            </label>
          </li>
          <li>
            <input type="checkbox" id="coughing" name="oughing" />
            <label htmlFor="swelling">Dry hacking cough</label>
          </li>
        </ul>
      </div>
      <hr className="border-line" />
      <div className="dailyCheck-header">
        <h4 className="danger-text">EMERGENCY - This zone means act fast!</h4>
        <h5>Go to emergency or call 911 if you have any of following:</h5>
        <div className="dailyCheck-red">
          <h5 className="red-text">Danger</h5>
        </div>
      </div>

      <div className="dailyCheck-red-list">
        <ul>
          <li>
            <input
              type="checkbox"
              id="strugglingBreath"
              name="strugglingBreath"
            />
            <label htmlFor="strugglingBreath">Struggling to breath</label>
          </li>
          <li>
            <input type="checkbox" id="constantSOB" name="constantSOB" />
            <label htmlFor="constantSOB">
              Shortness of breath does not go away while ssitting still
            </label>
          </li>
          <li>
            <input type="checkbox" id="fastHeartbeat" name="fastHeartbeat" />
            <label htmlFor="fastHeartbeat">
              Fast heartbeat that does not slow down when resting
            </label>
          </li>
          <li>
            <input type="checkbox" id="chestPain" name="chestPain" />
            <label htmlFor="chestPain">
              Chest pain that does not go away with rest or with medicine
            </label>
          </li>
          <li>
            <input type="checkbox" id="fainted" name="fainted" />
            <label htmlFor="fainted">Fainted</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
