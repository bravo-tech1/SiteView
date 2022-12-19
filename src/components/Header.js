import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";

export default function Header() {
  var today = new Date();
  var time = today.getHours();

  let handleLogOut = () => {
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container d-flex .justify-content-between align-items-center">
          <img
            className="img-fluid logo"
            src={require("../assets/images/logo.png")}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  pull-right" id="main">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/featured">
                  Featured Listings
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("email") && (
              <Link to="/login">
                {" "}
                <div
                  className="btn roundrd-circle main-btn btn-login"
                  style={{ width: "130px" }}
                >
                  Login
                </div>
              </Link>
            )}

            {localStorage.getItem("email") && (
              <button
                className="btn roundrd-circle main-btn btn-login"
                onClick={handleLogOut}
                style={{ width: "130px" }}
              >
                LogOut
              </button>
            )}
            <div className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0">
              <a href="https://40.87.158.147/reseller/auth/" className="b2b">
                Business B2B
              </a>
            </div>
            <div className="lang d-flex align-items-center ms-1 text-black-50">
              <Link to="/ar">AR </Link>
            </div>
          </div>
        </div>
      </nav>
      {window.location.pathname === "/" && <Landing />}
    </div>
  );
}
