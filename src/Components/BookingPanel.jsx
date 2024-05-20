// src/components/TicketBookingCard.js
import React, { useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BookingPanel = ({ selectedMovie }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();

  const incrementTicket = () => {
    if (ticketCount < 6) {
      setTicketCount(ticketCount + 1);
    }
  };

  const decrementTicket = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handleBookNow = () => {
    const bookingDetails = {
      movie: selectedMovie.name,
      language: selectedMovie.language,
      type: selectedMovie.type,
      rate: selectedMovie.rate,
      imageUrl: selectedMovie.imageUrl,
      tickets: ticketCount,
    };
    navigate("/BookingDetails", { state: { bookingDetails } });
  };

  return (
    <Card className="m-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={selectedMovie.imageUrl} alt={selectedMovie.name} />
      <Card.Body>
        <Card.Title className="text-center">{selectedMovie.name}</Card.Title>
        <Card.Text>
          Language: <b>{selectedMovie.language}</b>
          <br />
          Type: <b>{selectedMovie.type}</b>
          <br />
          Rating: <b>{selectedMovie.rate}</b>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <ButtonGroup>
            <Button variant="secondary" onClick={decrementTicket} disabled={ticketCount === 1}>
              -
            </Button>
            <Button variant="outline-primary" disabled>
              {ticketCount}
            </Button>
            <Button variant="secondary" onClick={incrementTicket} disabled={ticketCount === 6}>
              +
            </Button>
          </ButtonGroup>
          <Button variant="primary" onClick={handleBookNow}>Book</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie, 
});

export default connect(mapStateToProps)(BookingPanel);
