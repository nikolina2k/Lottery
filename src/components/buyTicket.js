import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function BuyTicket({ show, onHide, validTicketCount, totalPrice }) {
  const [amount, setAmount] = useState(1);

  function increment() {
    setAmount((amount) => amount + 1);
  }

  function decrement() {
    setAmount((amount) => (amount === 1 ? 1 : amount - 1));
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="modallabelig"
      centered
    >
      <Modal.Header
        closeButton
        className="bg-dark text-white"
        closeVariant="white"
      >
        <Modal.Title id="modaltitleig">To pay {totalPrice} ₽</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <h4>
          {validTicketCount} ticket{validTicketCount > 1 ? "s" : ""} Sportlotto
          4 from 20
        </h4>
        <p>till 8th Feb - 08:00</p>
      </Modal.Body>
      <Modal.Footer className="bg-dark text-white justify-content-between">
        <div className="d-flex">
          <Button
            variant="secondary"
            onClick={decrement}
            style={{ fontSize: "20px" }}
          >
            -
          </Button>
          <p style={{ margin: "10px" }}>
            {amount} round{amount > 1 ? "s" : ""}
          </p>
          <Button
            variant="secondary"
            onClick={increment}
            style={{ fontSize: "20px" }}
          >
            +
          </Button>
        </div>

        <Button onClick={onHide} variant="success">
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BuyTicket;
