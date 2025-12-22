import logo1 from "../assets/sf_logo1.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import PropTypes from "prop-types";

const Navbar = ({ basketCounter }) => {
  return (
    <>
      <nav id="navigation-bar">
        <div id="flex-div">
          <section id="logo-section">
            <Link to="/" className="link-no-decor">
              <img src={logo1} alt="ferrari-horse-logo1" id="logo1" />
            </Link>
            <Link to="/" className="link-no-decor">
              <h1>Scuderia Ferrari</h1>
            </Link>
          </section>
          <section id="page-links">
            <ul>
              <li>
                <Link to="/" className="link-no-decor">
                  Home
                </Link>
              </li>
              <li>
                <Link to="shop" className="link-no-decor">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="cart" className="link-no-decor">
                  Cart <FontAwesomeIcon icon={faBagShopping} />
                  <div
                    id="qty-bubble"
                    className={basketCounter > 0 ? "visible" : ""}
                  >
                    <p id="qty">{basketCounter}</p>
                  </div>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div id="separator"></div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  basketCounter: PropTypes.number,
};

export default Navbar;
