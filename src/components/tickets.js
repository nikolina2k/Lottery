import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Ticket from "./ticket";

function Tickets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tickets = [1, 2, 3];

  function nextSlide() {
    setActiveIndex((idx) => (idx + 1) % tickets.length);
  }

  function prevSlide() {
    setActiveIndex((idx) => (tickets.length + idx - 1) % tickets.length);
  }

  return (
    <Carousel
      variant="dark"
      controls={false}
      indicators={false}
      interval={null}
      activeIndex={activeIndex}
    >
      {tickets.map((ticket, idx) => (
        <Carousel.Item key={idx}>
          <Ticket
            onNext={nextSlide}
            onPrev={prevSlide}
            idx={ticket}
            total={20}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Tickets;
