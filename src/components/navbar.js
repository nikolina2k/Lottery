import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../logo.svg";
import { ReactComponent as LogOut } from "../coolicon.svg";

function navbar({ totalPrice }) {
  return (
    <Navbar fixed="top" bg="black" variant="dark" expand="lg">
      <Container className="align-items-start">
        <Navbar.Brand href="#" mb="0">
          <img
            className="d-inline-block align-top"
            src={Logo}
            alt="logo"
            width="134"
            height="42"
          />
        </Navbar.Brand>

        <div>
          <span
            className="d-inline d-lg-none text-secondary"
            style={{ marginRight: "1em" }}
          >
            To pay: {totalPrice} ₽
          </span>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
            <Nav className="me-auto">
              <Nav.Link href="#Lottery">Lottery</Nav.Link>
              <Nav.Link href="#My tickets">My tickets</Nav.Link>
              <Nav.Link href="#Check tickets">Check tickets</Nav.Link>
            </Nav>

            <LogOut
              alt="logout"
              width="18"
              height="18"
              style={{ marginLeft: "5em" }}
            />
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default navbar;
