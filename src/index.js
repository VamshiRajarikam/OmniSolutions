import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import "assets/fonts/fonts.css";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/styles.css";
// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AboutPage from "views/AboutPage/AboutPage";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/contact-us" component={ContactPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/about-us" component={AboutPage} />
      {/* <Route path="/contact-us" component={ContactUsPage} /> */}
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
