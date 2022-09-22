import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BuyTicket from "./buyTicket";
import React from "react";

function TmrButtons({ onGetTicket, validTicketCount, totalPrice }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card bg="transparent">
      <Card.Body style={{ color: "white", padding: "0" }}>
        <div>
          <Button
            onClick={onGetTicket}
            variant="dark"
            style={{ marginBottom: "1em", display: "block", width: "100%" }}
          >
            Get ticket
          </Button>
          <Button
            variant="success"
            onClick={() => setModalShow(true)}
            style={{
              display: validTicketCount > 0 ? "block" : "none",
              width: "100%",
            }}
          >
            Buy {validTicketCount} ticket{validTicketCount > 1 ? "s" : ""} for{" "}
            {totalPrice} ₽
          </Button>
          <BuyTicket
            show={modalShow}
            onHide={() => setModalShow(false)}
            validTicketCount={validTicketCount}
            totalPrice={totalPrice}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default TmrButtons;
