import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./Calendar.css";
import "./App.css";
import PictureGet from "./components/PictureGet";
import { Route, Switch } from "react-router-dom";


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


    <Switch>
      <Route path={"/:date"}>
      <PictureGet />
      </Route>
      <Route path="/">
      <PictureGet date={new Date()}/>
      </Route>
    </Switch>

    </div>

  );
}

export default App;
