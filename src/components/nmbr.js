import Button from "react-bootstrap/Button";
import "./nmbr.css";

function Nmbr(props) {
  const { number, isSelected, onClick } = props;

  return (
    <Button
      variant={isSelected ? "light" : "secondary"}
      onClick={onClick}
      className="number"
    >
      {number}
    </Button>
  );
}

export default Nmbr;
