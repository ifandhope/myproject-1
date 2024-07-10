import React from "react";
import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import DailyCheck from "./DailyCheck";
import Activity from "./Activity";

export default function Main_body() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/dailyCheck" element={<DailyCheck />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  );
}
