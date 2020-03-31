import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import index from "./pages/index";
import about from "./pages/about";
import services from "./pages/services";
import contact from "./pages/contact";
import coaching from "./pages/coaching";
import zija from "./pages/zija";

// components
import Navbar from "./components/Navbar";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={about} />
          <Route path="/services" component={services} />
          <Route path="/contact" component={contact} />
          <Route path="/coaching" component={coaching} />
          <Route path="/health-and-wellness" component={zija} />
          <Route path="/" component={index} />
        </Switch>
        <Footer1 />
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
