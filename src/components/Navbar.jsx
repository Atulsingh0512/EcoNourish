import React from 'react';
import { Link } from 'react-router-dom';
import logo2Image from "./images/logo2.png";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar-area">
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <div className="logo">
              <Link to="/">
                {/* <img src="assets/img/logo2.png" alt="image" /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              {/* <img src="assets/img/logo2.png" alt="image" /> */}
              <img src={logo2Image} alt="LOGO2" className="logo-image" />
            </Link>
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/services"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Services
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/services/iffco" className="dropdown-item">
                      IFFCO Fertilizer
                    </Link>
                    <Link to="/services/NFL" className="dropdown-item">
                      NFL Fertilizer
                    </Link>
                    <Link to="/services/npk" className="dropdown-item">
                      NPK Fertilizer
                    </Link>
                    <Link to="/services/Shaktiman" className="dropdown-item">
                      Shaktiman Fertilizer
                    </Link>
                    <Link to="/services/paras" className="dropdown-item">
                      Paras Fertilizer
                    </Link>
                    <Link to="/services/navratna" className="dropdown-item">
                      Navratna Fertilizer
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/package" className="nav-link">
                    Package
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="others-options d-flex align-items-center">
                <div className="option-item">
                  <Link to="/apply-now" className="default-btn">
                    Apply now
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
