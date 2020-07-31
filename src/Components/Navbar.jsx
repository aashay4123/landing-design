import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <NavLink className="nav-link" exact to="/">
                  Home{" "}
                </NavLink> */}

              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="login"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
