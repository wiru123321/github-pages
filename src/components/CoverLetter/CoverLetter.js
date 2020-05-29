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
                  style={{ padding: "50px" }}
                >
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="cv-content-in-icon"
                  />
                  <br />I am looking for student internships that I have to
                  complete during the holiday season, which is why I decided to
                  apply for the position of programmer in your company, hoping
                  that you will be looking for apprentices / trainees. Why do I
                  think it's worth hiring me? I am positive about work and I
                  want to develop all the time. I am open to new solutions,
                  technologies and methods, which is why I will quickly adapt to
                  a new workplace. For now, I haven't created any commercial
                  projects, but I have two university projects created in
                  programming teams simulating work in a programming company. I
                  am happy to talk to you to tell you more about my projects and
                  answer your questions.
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
