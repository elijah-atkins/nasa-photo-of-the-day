import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./Calendar.css";
import "./App.css";
import PictureGet from "./components/PictureGet";
import PictureArchive from "./components/PictureArchive";
import dateToString from './funcs/dateToString';
import Logo from "./img/NASA_logo_alt.svg";

function App() {
  const history = useHistory();
  const { goBack } = useHistory();

  return (
    <div className="App">
      <div className="header logo-container">
        <div className="logo">
          <img alt="NASA Logo" src={Logo}></img>
        </div>
        <div className="logo-header"></div>
      </div>

      <Switch>
        <Route path={"/:date"}>
          <PictureArchive dateToString={dateToString} history={history} goBack={goBack} />
        </Route>
        <Route path="/">
          <PictureGet dateToString={dateToString} date={new Date()} history={history} goBack={goBack} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
