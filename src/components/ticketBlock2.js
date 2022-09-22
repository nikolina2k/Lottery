import Card from "react-bootstrap/Card";
import Nmbr from "./nmbr";

function TicketBlock2({ total, selectedNumbers, onToggleNumber }) {
  const allNumbers = [];
  for (let i = 0; i < total; i++) {
    allNumbers.push(i + 1);
  }

  return (
    <Card bg="transparent">
      <Card.Body>
        <Card.Title>Field 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Choose at least 1 number
        </Card.Subtitle>
        <div
          style={{
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "repeat(auto-fill, minmax(45px, 1fr))",
          }}
        >
          {allNumbers.map((n) => (
            <Nmbr
              number={n}
              onClick={() => onToggleNumber(n)}
              isSelected={selectedNumbers.has(n)}
              key={n}
            />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default TicketBlock2;
