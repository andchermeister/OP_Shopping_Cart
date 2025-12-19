import logo1 from "../assets/sf_logo1.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
              <li>Home</li>
              <li>Shop</li>
              <li>
                Cart <FontAwesomeIcon icon={faBagShopping} />
              </li>
              <div id="qty-bubble">
                <p id="qty">10</p>
              </div>
            </ul>
          </section>
        </div>
        <div id="separator"></div>
      </nav>
    </>
  );
}

export default Navbar;
