import React from "react";
import { Link } from "react-router-dom";

const mainPage = () => {
  return (
    <div>
      <header className="masthead">
        <div className="halfbackground">
          <div className="intro-text" style={{ marginRight: "14vw" }}>
            <div className="intro-lead-in">
              Hello, I'Am <br />
              Wojciech Waleszczyk
            </div>
            <div className="intro-lead-inn">Future Web developer</div>
          </div>
        </div>
        <div className="schalfbackground">
          <div className="menuMain col-lg-12 first-content">
            <div className="intro-text">
              <p>
                <Link to="/cv" className="intro-lead-in-contain">
                  RESUME
                </Link>
              </p>
            </div>
          </div>
          <div className="menuMain col-lg-12 second-content">
            <div className="intro-text">
              <p>
                <Link to="/about" className="intro-lead-in-contain">
                  ABOUT ME
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="raw5">
          <div
            style={{
              backgroundColor: "#343a40",
              width: "100%",
              position: "absolute",
              bottom: "0",
            }}
            className="col-lg-12"
          >
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright" style={{ color: "white" }}>
                  Copyright &copy; Wojciech Waleszczyk 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default mainPage;
