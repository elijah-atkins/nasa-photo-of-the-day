import React from "react";
import "./App.css";
import PictureGet from "./components/PictureGet"

function App() {
  return (
    <div className="App">
      <div className="header logo-container">
        <h1>Nasa Picture of the Day</h1>
      </div>
      <PictureGet />
    </div>
  );
}

export default App;
