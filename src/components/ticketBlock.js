import Card from "react-bootstrap/Card";
import Nmbr from "./nmbr";

function TicketBlock() {
  return (
    <Card bg="transparent">
      <Card.Body >
        <Card.Title>Field 1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Choose 8 numbers
        </Card.Subtitle>
        <div>
          <Nmbr />
          <Nmbr />
        </div>
      </Card.Body>
    </Card>
  );
}

export default TicketBlock;
