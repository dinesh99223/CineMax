// src/components/MovieDetails.js
import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieDetails = ({ selectedMovie }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking"); // Adjust the route path as needed
  };

  return (
    <div>
      <h1 className="text-center">Movie Details</h1>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={selectedMovie.imageUrl} />
          <Card.Body>
            <Card.Title>{selectedMovie.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <b>Duration:</b> 2 hours 24 mins
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Ratings:</b> {selectedMovie.rate}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Release Date:</b> Feb 16
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button className="Primary" onClick={handleBookNow}>Book Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie, // Assuming you have a reducer managing selected movie details
});

export default connect(mapStateToProps)(MovieDetails);
