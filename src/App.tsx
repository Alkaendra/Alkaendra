import React from "react";
import logo from "../src/assets/images/logo.png";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import modules from "../src/modules";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="layout">
            <div className="papiro">
              {/* <Link to="/">
                <img className="logo" src={logo} />
              </Link> */}
              <div className="App-content">
                <Switch>
                  {modules.map((module: any) =>
                    module.map((m: any) => (
                      <Route {...m.routeProps} key={m.name} />
                    ))
                  )}
                </Switch>
              </div>
            </div>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
