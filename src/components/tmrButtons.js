import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BuyTicket from "./buyTicket";
import React from "react";

function TmrButtons() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card bg="transparent">
      <Card.Body style={{ color: "white", padding: "0" }}>
        <div>
          <Button variant="dark" style={{ marginBottom: "1em", display: "block", width: "100%" }}>
            Get ticket
          </Button>
          <Button variant="success" onClick={() => setModalShow(true)} style={{display: "block", width: "100%"}}>
            Buy 1 ticket 200 000 ₽
          </Button>
          <BuyTicket show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default TmrButtons;
