import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import Home from "./components/Home";
import Sorting from "./components/Sorting/sort.component";
import Pathfinding from "./components/pathfindingVisualizer/Pathfinding";
import Searching from "./components/Searching/search.component";
import Cli from "./components/Cli/Cli";
function App() {
  return (
      <div className="App">
          <Router basename="/Visualgo">
              <HashRouter hashType={'noslash'}>
              <div>
                  <Switch>
                      <Route path="/pathfinding">
                          <Pathfinding/>
                      </Route>
                      <Route path="/sorting">
                          <Sorting/>
                      </Route>
                      <Route path="/searching">
                          <Searching/>
                      </Route>
                      <Route path="/cli">
                          <Cli/>
                      </Route>
                      <Route path="/">
                          <Home/>
                      </Route>

                  </Switch>
              </div>
              </HashRouter>
          </Router>
      </div>
  );
}

export default App;
