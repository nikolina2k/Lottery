import Card from "react-bootstrap/Card";

function TicketBlock2() {
  return (
    <Card bg="transparent">
      <Card.Body>
        <Card.Title>Field 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Choose at least 1 number
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default TicketBlock2;
