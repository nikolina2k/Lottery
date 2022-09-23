import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BuyTicket({ show, onHide, validTicketCount, totalPrice }) {
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
      <Modal.Footer className="bg-dark text-white">
        <Button onClick={onHide} variant="success">
          Buy
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BuyTicket;
