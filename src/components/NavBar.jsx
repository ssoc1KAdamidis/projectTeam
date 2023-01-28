import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

// NavBar react bootstrap tutorial -> Url: https://www.youtube.com/watch?v=0wJCxEDDetE
// Nav.Link as={Link} or as={NavLink} tutorial -> https://stackoverflow.com/questions/72091197/what-is-the-difference-between-nav-link-vs-link-vs-navlink-in-react-router-dom-a

const NavBar = () => {
  return (
    <Navbar
      className="Navbar"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        color: "black",
        fontSize: "small",
        fontWeight: "bold",
      }}
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/" style={{ margin: "5px" }}>
        Dashboard
      </Navbar.Brand>
      {/*not working as we want */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={NavLink}
            to="/courses"
            style={{ margin: "5px", color: "black" }}
          >
            Courses
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/new"
            style={{ margin: "5px", color: "black" }}
          >
            Add New Course
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
