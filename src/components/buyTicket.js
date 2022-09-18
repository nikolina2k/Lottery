import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BuyTicket(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="modallabelig" centered>
      <Modal.Header closeButton>
        <Modal.Title id="modaltitleig">To pay 150 ₽</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>2 tickets Sportlotto 4 from 20</h4>
        <p>till 8th Feb - 08:00</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Buy</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BuyTicket;
