import React from "react";
import "../Navbar/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

import logo from "../../images/m_logo.png";

export default function NavBar() {
  return (
    <div>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top md:ml-5"
            alt="Project Wing logo"
          />{" "}
        </Navbar.Brand>
        <Navbar.Brand className="nav-name" href="/">
          <span
            style={{
              fontSize: "36px",
              fontFamily: "poppins",
              color: "#ff914d",
            }}
            className="nav-name"
          >
            MSC{" "}
          </span>
          <span
            style={{ fontSize: "34px", fontFamily: "poppins" }}
            className="nav-name"
          >
            Project Wing
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          className="toggler"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
          <Nav className="ml-auto" style={{ fontFamily: "Poppins" }}>
            <Nav.Link className="nav-toggles" href="/#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-toggles" href="/#timeline">
              Timeline
            </Nav.Link>
            <Nav.Link className="nav-toggles" href="/#procedure">
              Procedure
            </Nav.Link>
            <Nav.Link className="nav-toggles" href="/#domains">
              Domains
            </Nav.Link>
            <Nav.Link className="nav-toggles" href="/#projects">
              Projects
            </Nav.Link>
            {/* <Nav.Link className="nav-toggles" href="/#sponsors">Sponsors</Nav.Link> */}
            {/* <Nav.Link className="nav-toggles" href="/organizers">Organizers</Nav.Link> */}
            <Nav.Link className="nav-toggles" href="/#rules">
              Rules
            </Nav.Link>
            <Nav.Link className="nav-toggles" href="/#faq">
              FAQs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
