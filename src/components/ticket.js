import Card from "react-bootstrap/Card";
import TicketBlock from "./ticketBlock";
import TicketBlock2 from "./ticketBlock2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Ticket({
  onNext,
  onPrev,
  idx,
  ticket,
  onToggleNumberBlock1,
  onToggleNumberBlock2,
}) {
  return (
    <Card style={{ color: "white" }} className="bg-dark box h-100">
      <Card.Title style={{ margin: "1em", fontWeight: "700" }}>
        Card {idx}
        <div style={{ display: "inline-block", float: "right" }}>
          <button
            onClick={onPrev}
            style={{
              borderRadius: "50%",
              border: "none",
              width: "32px",
              height: "32px",
              padding: "0",
              marginRight: "5px",
            }}
          >
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
              style={{ backgroundSize: "50%" }}
            />
          </button>
          <button
            onClick={onNext}
            style={{
              borderRadius: "50%",
              border: "none",
              width: "32px",
              height: "32px",
              padding: "0",
            }}
          >
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
              style={{ backgroundSize: "50%" }}
            />
          </button>
        </div>
      </Card.Title>
      <Card.Body>
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <TicketBlock
                total={20}
                selectedNumbers={ticket.block1}
                onToggleNumber={onToggleNumberBlock1}
              />
            </Col>
            <Col>
              <TicketBlock2
                total={4}
                selectedNumbers={ticket.block2}
                onToggleNumber={onToggleNumberBlock2}
              />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Ticket;
