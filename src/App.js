import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import index from "./pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
