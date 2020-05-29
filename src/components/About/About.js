import React from "react";
import Navbar from "../NavBar/Navbar";
import {
  faBookReader,
  faBalanceScale,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const about = () => {
  return (
    <div>
      <Navbar />
      <section className="page-section " id="services">
        <div className="backgroundContent ">
          <div className="fullPage">
            <div className="col-md-12 col-lg-4 cv-date backgroundContent1">
              <div className="cv-content project-content">
                <div
                  className="cv-content-in cv-content-in-about"
                  style={{ padding: "20px" }}
                >
                  <FontAwesomeIcon
                    icon={faBookReader}
                    className="cv-content-in-icon"
                  />
                  <br />
                  Hi, I'm Wojtek I am a 3rd year student of computer science at
                  the Silesian University of Technology.
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 cv-date backgroundContent1">
              <div className="cv-content project-content">
                <div
                  className="cv-content-in cv-content-in-about"
                  style={{ padding: "20px" }}
                >
                  <FontAwesomeIcon
                    icon={faBalanceScale}
                    className="cv-content-in-icon"
                  />
                  <br />
                  Recently, I started learning HTML, CSS, JS and React. I can
                  also use the following languages: C, C++, Java. I am familiar
                  with such concepts as Responsive Web Design, Redux GIT and
                  SQL.
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 cv-date backgroundContent1">
              <div className="cv-content project-content">
                <div className="cv-content-in cv-content-in-about">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="cv-content-in-icon"
                  />
                  <br />I learn quickly, criticism is only a motivation for me
                  to continue working and working under pressure is not a
                  problem for me.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
