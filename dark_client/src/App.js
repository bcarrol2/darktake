import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing';
import {Spending} from './components/Spending';
import './App.css';

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/spending" exact component={Spending} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
