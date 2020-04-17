import React from "react";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import PictureGet from "./components/PictureGet";

import Logo from "./img/NASA_logo_alt.svg"

function App() {
  return (
    <div className="App">
      <div className="header logo-container">
        <div className="logo">
          <img alt="NASA Logo" src={Logo}></img>
        </div>
        <div className="logo-header">

        </div>
      </div>

      <PictureGet />
    </div>
  );
}

export default App;
