import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BuyTicket from "./buyTicket";
import React, { useEffect, useState } from "react";
import TmrButtons from "./tmrButtons";

const MINUTE = 60;

function Timer() {
  const [remainingTime, setRemainingTime] = useState(2 * MINUTE);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((time) => time > 0 ? time - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const date = new Date(remainingTime * 1000);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <Card style={{ marginBottom: "1em"}} bg="dark" text="white">
      <Card.Body>
        <div>
          <Card.Title>Rapido</Card.Title>
          <Card.Text>Super prize 173 156 740 ₽</Card.Text>
          <Card.Text>Round 221, No. 58693475</Card.Text>
          <Card.Text style={{color: "orange"}}> Time left for the draw: {minutes} m {seconds} s </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Timer;
