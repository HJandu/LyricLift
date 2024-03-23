import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import "./navbar.css";
import logoImage from "../../assets/images/Logo.png";

export default function Navbar() {

  useEffect(() => {
    // Initialize the sidenav
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav);
  }, []);

  return (
    <>
      <nav className="nav-wrapper teal darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            <img src={logoImage} alt="Logo" className="rounded-logo" width={50} />
          </Link>
          <a href="#" data-target="mobile-links" className="sidenav-trigger">
            <FontAwesomeIcon icon={faBars} />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sidenav-container">
        <ul className="sidenav" id="mobile-links">
          <div className="close-btn">
            <a href="#" className="close-icon" onClick={() => M.Sidenav.getInstance(document.querySelector('.sidenav')).close()}>
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>

      </div>
    </>
  );
}
