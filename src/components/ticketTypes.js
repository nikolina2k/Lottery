import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

function TicketTypes({ show, onHide, remainingTime }) {
  const date = new Date(remainingTime * 1000);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const cards = [
    {
      prize: 173_156_740,
      round: "221, No. 58693475",
    },
    {
      prize: 173_156_740,
      round: "221, No. 58693475",
    },
    {
      prize: 173_156_740,
      round: "221, No. 58693475",
    },
  ];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="buyTicket"
      centered
      contentClassName="tickets-modal-content"
    >
      <Modal.Header
        closeButton
        className="bg-dark"
        closeVariant="white"
      ></Modal.Header>
      <Modal.Body className="bg-dark text-white">
        {cards.map((card) => (
          <Card bg="dark" style={{ margin: "10px" }} className="ticket-types">
            <Card.Text>Super prize {card.prize} ₽</Card.Text>
            <Card.Text>Round {card.round}</Card.Text>
            <Card.Text style={{ color: "orange" }}>
              Time left for the draw: {minutes} m {seconds} s
            </Card.Text>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer className="bg-dark"></Modal.Footer>
    </Modal>
  );
}

export default TicketTypes;
