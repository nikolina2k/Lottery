import React, { useState } from "react";
import Navbar from "./components/navbar.js";
import Ticket from "./components/ticket.js";
import Timer from "./components/timer.js";
import TmrButtons from "./components/tmrButtons.js";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const PRICE_PER_NUMBER = 300;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tickets, setTickets] = useState([getEmptyTicket()]);

  const validTicketCount = tickets.reduce(
    (prev, current) => prev + Number(isValid(current)),
    0
  );
  const totalPrice = tickets
    .filter(isValid)
    .map((ticket) => ticket.block2.size * PRICE_PER_NUMBER)
    .reduce((prev, curr) => prev + curr, 0);

  function isValid(ticket) {
    return ticket.block1.size === 8 && ticket.block2.size > 0;
  }

  function nextSlide() {
    setActiveIndex((idx) => (idx + 1) % tickets.length);
  }

  function prevSlide() {
    setActiveIndex((idx) => (tickets.length + idx - 1) % tickets.length);
  }

  function getEmptyTicket() {
    return {
      block1: new Set(),
      block2: new Set(),
    };
  }

  function addTicket() {
    setTickets((currentTickets) => [...currentTickets, getEmptyTicket()]);
    setActiveIndex(tickets.length);
  }

  function toggleNumberBlock1(ticketIdx, n) {
    const selectedNumbers = tickets[ticketIdx].block1;
    const selectedCopy = new Set(selectedNumbers);
    if (selectedCopy.has(n)) {
      selectedCopy.delete(n);
    } else {
      if (selectedNumbers.size >= 8) return;
      selectedCopy.add(n);
    }
    setTickets((currentTickets) => {
      const ticketsCopy = [...currentTickets];
      ticketsCopy[ticketIdx].block1 = selectedCopy;
      return ticketsCopy;
    });
  }

  function toggleNumberBlock2(ticketIdx, n) {
    const selectedNumbers = tickets[ticketIdx].block2;
    const selectedCopy = new Set(selectedNumbers);
    if (selectedCopy.has(n)) {
      selectedCopy.delete(n);
    } else {
      selectedCopy.add(n);
    }
    setTickets((currentTickets) => {
      const ticketsCopy = [...currentTickets];
      ticketsCopy[ticketIdx].block2 = selectedCopy;
      return ticketsCopy;
    });
  }

  return (
    <>
      <header style={{ marginBottom: "68px" }}>
        <Navbar totalPrice={totalPrice} />
      </header>
      <Container className="main" as="main" style={{ paddingTop: "4em" }}>
        <div className="timer">
          <Timer />
        </div>
        <div className="tickets">
          <Carousel
            variant="dark"
            className="h-100"
            controls={false}
            indicators={false}
            interval={null}
            activeIndex={activeIndex}
          >
            {tickets.map((ticket, idx) => (
              <Carousel.Item key={idx} className="h-100">
                <Ticket
                  onNext={nextSlide}
                  onPrev={prevSlide}
                  idx={idx + 1}
                  ticket={ticket}
                  onToggleNumberBlock1={(n) => toggleNumberBlock1(idx, n)}
                  onToggleNumberBlock2={(n) => toggleNumberBlock2(idx, n)}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="tmr-buttons">
          <TmrButtons
            onGetTicket={addTicket}
            validTicketCount={validTicketCount}
            totalPrice={totalPrice}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
