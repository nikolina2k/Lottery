import React, { Component } from "react";
import Navbar from "./components/navbar.js";
import Ticket from "./components/ticket.js";
import Timer from "./components/timer.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TmrButtons from "./components/tmrButtons.js";
import Tickets from "./components/tickets.js";

function App() {
  return (
    <>
      <header style={{ marginBottom: "68px" }}>
        <Navbar />
      </header>
      <Container as="main" style={{paddingTop:"4em"}}>
        <Row xs={1} md={2}>
          <Col xs={12} md={5} lg={4} xl={3}>
            <Timer />
          </Col>
          <Col xs={12} md={7} lg={8} xl={9}>
             {/* <Ticket /> */}
             <Tickets />
          </Col>
          <Col xs={12} md={5} lg={4} xl={3}>
            <TmrButtons />
          </Col>
        </Row>
      </Container>
      {/* <main className="container">
      <div className='d-flex'>
      <Timer />
      <Ticket />        
      </div>
    </main> */}
    </>
  );
}

export default App;
