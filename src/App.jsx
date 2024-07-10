import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

import Footer from "./components/Footer";
import "./App.css";
import Main_body from "./components/Main_body";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main_body />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
