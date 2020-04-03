import React from "react";
import "./App.css";
import "./assets/styles/index.scss";
import { Switch, Route, withRouter } from "react-router-dom";

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
      <Navbar />
      <Switch>
        <Route exact path="/about" component={about} />
        <Route exact path="/services" component={services} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/coaching" component={coaching} />
        <Route exact path="/health-and-wellness" component={zija} />
        <Route path="/" component={index} />
      </Switch>
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default withRouter(App);
