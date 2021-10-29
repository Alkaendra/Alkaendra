import React, { createContext, useReducer } from "react";
import logo from "../src/assets/images/logo.png";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import modules from "../src/modules";
import "./App.scss";

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "HANDLE_SETTLEMENT":
      return { ...state, nation: action.payload };
    case "HANDLE_LEADER":
      return { ...state, leader: action.payload };
    case "HANDLE_NATION": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export const AppContext = createContext<any>(undefined);

function App() {
  const [state, dispatch] = useReducer(appReducer, {});

  return (
    <AppContext.Provider value={[state, dispatch]}>
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
    </AppContext.Provider>
  );
}

export default App;
