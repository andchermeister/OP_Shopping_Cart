import Navbar from "../Navbar/Navbar";
import "./Home.css";
import leclerc from "../assets/charles_leclerc.avif";
import hamilton from "../assets/lewis_hamilton.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//<FontAwesomeIcon icon="fa-solid fa-arrow-right" />

function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <section id="hero">
          <h1 id="hero-text">
            Feel the <i>speed</i>. Wear the <i>legacy</i>.
          </h1>
          <button id="gearup-btn">Gear up now</button>
        </section>
        <section id="drivers">
          <div id="charles-leclerc-section">
            <img src={leclerc} alt="charles leclerc img" id="leclerc-img" />
            <div className="div-flex">
              <div id="leclerc-txt">
                <p className="driver-text">Charles Leclerc</p>
                <p className="driver-text">collection</p>
              </div>
              <button className="arrow-btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div id="lewis-hamilton-section">
            <img src={hamilton} alt="lewis hamilton img" id="hamilton-img" />
            <div className="div-flex">
              <div id="hamilton-txt">
                <p className="driver-text">Lewis Hamilton</p>
                <p className="driver-text">collection</p>
              </div>
              <button className="arrow-btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
