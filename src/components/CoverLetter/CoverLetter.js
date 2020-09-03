import React from "react";
import Navbar from "../NavBar/Navbar";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const coverLetter = () => {
  return (
    <div>
      <Navbar />
      <section className="page-section " id="services">
        <div className="backgroundContent ">
          <div className="fullPage">
            <div className="col-md-12 col-lg-12 cv-date backgroundContent2">
              <div className="cv-content project-content">
                <div
                  className="cv-content-in cv-content-in-about cv-content-in-about-2"
                  style={{ padding: "20px" }}
                >
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="cv-content-in-icon"
                  />
                  <br />I am looking for first job. I decided to apply for the
                  position of web programmer in Your company, hoping that you
                  will be looking for young students with passion for
                  programming. Why do I think it's worth hiring me? I am
                  positive about work and I want to develop all the time. I am
                  open to new solutions, technologies and methods, which is why
                  I will quickly adapt to a new workplace.This summer I went
                  through 1.5 months of internship.During internship I made a
                  project in which I was responsible for the frontend in team
                  which consisted of 5 people.I will be happy to talk to you to
                  tell you more about my projects and answer your questions.
                  <br /> Yours sincerely, Wojciech Waleszczyk
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default coverLetter;
