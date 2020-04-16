import React from "react";
import "./App.css";
import PictureGet from "./components/PictureGet";

import Logo from "./img/NASA_logo.svg"

function App() {
  return (
    <div className="App">
      <div className="header logo-container">
        <div className="logo">
          <img alt="NASA Logo" src={Logo}></img>
        </div>
        <div className="logo-header">
        <h1>Astronomy Picture of the Day</h1>
        </div>
      </div>

      <PictureGet />
    </div>
  );
}

export default App;
