import React from "react";
import { Nav } from "./style";
import {
  faAdd,
  faCompass,
  faHeart,
  faHome,
  faPaperPlane,
  faSackDollar,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <nav className="navbar">
        <Link exact to="/home:home" className="navbar__brand">
          <FontAwesomeIcon className="icons" size="2x" icon={faInstagram} />
          <p>Pinsta</p>
        </Link>
        <input
          className="navbar__search"
          style={{
            fontFamily: "Arial, FontAwesome",
          }}
          type="text"
          placeholder="Search"
        />
        <ul className="navbar__list">
          <li className="navbar__list__item">
            <Link to="/home:home">
              <FontAwesomeIcon className="icons" size="2x" icon={faHome} />
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/message">
              <FontAwesomeIcon
                className="icons"
                size="2x"
                icon={faPaperPlane}
              />
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link exact to="/explore">
              <FontAwesomeIcon className="icons" size="2x" icon={faCompass} />
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/addPost">
              <FontAwesomeIcon className="icons" size="2x" icon={faAdd} />
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/profile">
              <img
                src="https://www.toptrendsguide.com/wp-content/uploads/2021/06/Hottest-Guys-560x420.jpg"
                alt=""
                style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </Nav>
  );
}

export default Navbar;
