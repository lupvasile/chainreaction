import React from 'react';
import './App.css';
import Dashboard from './view/Dashboard'
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import IndividualDashboard from "./view/IndividualDashboard";
import Map from "./view/Map"

const App = () => (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact={true} component={IndividualDashboard} path="/"/>
            <Route exact={true} component={Dashboard} path="/common"/>
            <Route exact={true} component={Map} path="/map"/>
        </Switch>
      </HashRouter>
    </div>
);

export default App;
