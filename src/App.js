import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./Calendar.css";
import "./App.css";
import PictureGet from "./components/PictureGet";
import PictureArchive from "./components/PictureArchive"
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
          <div className="back-button" onClick={() => goBack()}>
  {"<  "}Previous Image
          </div>
          <PictureArchive history={history} />
        </Route>
        <Route path="/">
          <PictureGet history={history} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
