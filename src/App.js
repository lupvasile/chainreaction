import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Map from "./view/Map"
import SmartIndividualDashboard from "./smart_view/SmartIndividualDashboard";
import SmartRegionDashboard from "./smart_view/SmartRegionDashboard";

const App = () => (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact={true} component={SmartIndividualDashboard} path="/"/>
                <Route exact={true} component={SmartRegionDashboard} path="/common"/>
                <Route exact={true} component={Map} path="/map"/>
            </Switch>
        </HashRouter>
    </div>
);

export default App;
