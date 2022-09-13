import React from "react";
import { Link } from "react-router-dom";


export default function Header() {

  let handleLogOut = () => {
    localStorage.removeItem('email')
    window.location.href="/"
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container d-flex .justify-content-between align-items-center">
        <img className="img-fluid logo" src={require("../assets/images/logo.png")} />
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
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/careers">Careers</Link>
            </li>
            { !localStorage.getItem('email') && <Link to ='/login' style={{marginRight: '10px'}}> <div className="btn roundrd-circle main-btn btn-login">Login</div></Link>}
            { !localStorage.getItem('email') && <Link to ='/register'> <div className="btn roundrd-circle main-btn btn-login">Register</div></Link>}
            { localStorage.getItem('email') &&  <button className="btn roundrd-circle main-btn btn-login" onClick={handleLogOut}>LogOut</button>}
            <div className="btn roundrd-circle main-btn btn-book btn-business ms-0 ms-lg-2 mt-0">Business B2B</div>
            <div className="lang d-flex align-items-center ms-1 text-black-50"><Link to="/ar">AR</Link></div>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
