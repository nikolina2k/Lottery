import Card from "react-bootstrap/Card";
import Nmbr from "./nmbr";

function TicketBlock(props) {
  return (
    <Card bg="transparent">
      <Card.Body >
        <Card.Title>Field 1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Choose 8 numbers
        </Card.Subtitle>
        <div>
          <Nmbr isSelected={true} number={1} />
          <Nmbr number={2} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default TicketBlock;
