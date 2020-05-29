import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Link to="/" style={{ color: "white" }}>
          Wojciech Waleszczyk
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/cv" style={{ color: "white", marginRight: "20px" }}>
              CV
            </Link>
            <Link to="/about" style={{ color: "white", marginRight: "20px" }}>
              ABOUT ME
            </Link>
            <Link
              to="/coverletter"
              style={{ color: "white", marginRight: "20px" }}
            >
              COVER LETTER
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
