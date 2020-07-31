import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./RouteNav";
import { BrowserRouter as Router } from "react-router-dom";
import "./Style/main.scss";

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
