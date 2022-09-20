import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Nmbr(props) {

    const { number, isSelected } = props;



//   function addNmbr() {}

  return <Button variant={isSelected ? "light" : "secondary"}>{number}</Button>;
}

export default Nmbr;
