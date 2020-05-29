import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const navbar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/" style={{ color: "white" }}>
          Wojciech Waleszczyk
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cv" style={{ color: "white" }}>
              CV
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "white" }}>
              ABOUT ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
