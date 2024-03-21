import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMusic, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import 'materialize-css/dist/css/materialize.min.css';
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper teal darken-3">
        <Link to="/" className="brand-logo">
          <img src="./src/assets/images/Logo.png" alt="Logo" width="50" height="50" className="rounded-logo" />
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </li>
          <li>
            <Link to="/main-song">
              <FontAwesomeIcon icon={faMusic} />
            </Link>
          </li>
          <li>
            <Link to="/Login" ><FontAwesomeIcon icon={faRightToBracket} /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
