import logo1 from "../assets/sf_logo1.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav id="navigation-bar">
        <div id="flex-div">
          <section id="logo-section">
            <img src={logo1} alt="ferrari-horse-logo" id="logo1" />
            <h1>Scuderia Ferrari</h1>
          </section>
          <section id="page-links">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="cart" className="nav-link">
                  Cart <FontAwesomeIcon icon={faBagShopping} />
                  <div id="qty-bubble">
                    <p id="qty">10</p>
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

export default Navbar;
