import React from "react";
import Navbar from "../NavBar/Navbar";
import logo from "../../assets/img/Profilowe_img_2.jpg";
import logoReact from "../../assets/img/react.png";
import logoCss from "../../assets/img/css_picture.png";
import logoHtml from "../../assets/img/Html_picture.png";
import logojs from "../../assets/img/js_logo.png";
import logobootstrap from "../../assets/img/bootstrap_logo.png";
import logosql from "../../assets/img/sql_logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faGraduationCap,
  faBriefcase,
  faGlobe,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const cv = () => {
  return (
    <div>
      <Navbar />
      <section className="page-section " id="services">
        <div className="backgroundContent ">
          <div className="raw">
            <div className="col-md-4 col-lg-2 cv-date">
              <img
                src={logo}
                className=" image"
                style={{ boxShadow: "2px 2px", borderRadius: "50%" }}
                alt="cv photo"
              />
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in">Personal Datails</div>
                <div className="cv-content-in">
                  <i className="icon-adult" />
                </div>
                <div className="cv-content-in">Wojciech</div>
                <div className="cv-content-in">Waleszczyk</div>
                <div className="cv-content-in">wojtekmaj2@o2.pl</div>
                <div className="cv-content-in">
                  <a href="https://github.com/wiru123321">Link to Github</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in">Education</div>

                <div className="cv-content-in">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="cv-content-in">
                  <i className="" />
                  10.2017 - now
                </div>

                <div className="cv-content-in">
                  Silesian University of Technology{" "}
                  <p className="cv-content-in-p ">Informatic</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content">
                  <div className="cv-content-in">Experience</div>
                  <div className="cv-content-in">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="cv-content-in">10.2019- now</div>
                  <div className="cv-content-in">Mathematics Tutor</div>
                  <div className="cv-content-in">06.2018- 09.2018</div>
                  <div className="cv-content-in">Lifeguard</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in">Language</div>
                <div className="cv-content-in">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div className="cv-content-in">Polish: Native</div>
                <div className="cv-content-in">English: B2</div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in">Interests</div>
                <div className="cv-content-in">
                  <div className="cv-content-in">
                    <FontAwesomeIcon icon={faSmileBeam} />
                  </div>
                  Water Sports
                </div>
                <div className="cv-content-in">Music</div>
                <div className="cv-content-in">New Technology</div>
                <div className="cv-content-in">Football</div>
              </div>
            </div>
          </div>
          <div className="raw">
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in-img cv-content-in">
                  <img
                    src={logoCss}
                    className="image cv-img"
                    width="100%"
                    alt="cv photo"
                  />
                  <div className="cv-content">CSS 3</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in-img cv-content-in">
                  <img
                    src={logoHtml}
                    className=" image cv-img"
                    width="110vw"
                    height="150vh"
                    alt="cv photo"
                  />
                  <div className="cv-content">HTML 5</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in-img cv-content-in">
                  <img
                    src={logojs}
                    className=" image cv-img"
                    width="110vw"
                    height="150vh"
                    alt="cv photo"
                  />
                  <div className="cv-content">Java Script</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in-img cv-content-in">
                  <img
                    src={logoReact}
                    className=" image cv-img"
                    width="110vw"
                    height="150vh"
                    alt="cv photo"
                  />
                  <div className="cv-content">React</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in-img cv-content-in">
                  <img
                    src={logobootstrap}
                    className=" image cv-img"
                    width="110%"
                    height="150vh"
                    alt="cv photo"
                  />
                  <div className="cv-content">Bootstrap 4</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 cv-date backgroundContent1">
              <div className="cv-content">
                <div className="cv-content-in-img cv-content-in">
                  <img
                    src={logosql}
                    className=" image cv-img"
                    width="110vw"
                    height="150vh"
                    alt="cv photo"
                  />
                  <div className="cv-content">GIT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default cv;
