import React from "react";
import { Switch, Route } from "react-router-dom";
// import Contact from "./Components/Contact/Contact";
// import Services from "./Components/Services/Services";
// import About from "./Components/About/About";
// // import Home from "./Components/Home/Home";
// import Login from "./Components/Login/Login";
import App from "./App";

/**TODO:
 * Single page landing page => hence only 1 route
 * add in page route
 */

function RouteNav() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} /> */}
    </Switch>
  );
}

export default RouteNav;
