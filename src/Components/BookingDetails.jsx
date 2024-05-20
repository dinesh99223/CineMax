// src/components/BookingDetails.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';

const BookingDetails = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  const qrData = JSON.stringify(bookingDetails);

  return (
    <div className="d-flex justify-content-center">
      <Card className="m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bookingDetails.imageUrl} alt={bookingDetails.movie} />
        <Card.Body>
          <Card.Title className="text-center">{bookingDetails.movie}</Card.Title>
          <Card.Text>
            Language: <b>{bookingDetails.language}</b>
            <br />
            Type: <b>{bookingDetails.type}</b>
            <br />
            Rating: <b>{bookingDetails.rate}</b>
            <br />
            Tickets: <b>{bookingDetails.tickets}</b>
          </Card.Text>
          <div className="text-center mt-3">
            <QRCode value={qrData} />
            <p>Scan this QR code at the theater</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookingDetails;
