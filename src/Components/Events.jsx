import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { nearByEvents } from '../Store/actions/movieActions'; // Assuming it's fetching events, not movies
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Events = ({ nearByEventsData, fetchNearByEvents }) => { // Renamed props for clarity
  useEffect(() => {
    fetchNearByEvents(); // Renamed to match mapDispatchToProps
  }, [fetchNearByEvents]);

  return (
    <div>
        <h1 className='text-center'style={{color: 'white'}}>Nearby Events</h1>
      <div className="Container d-flex justify-content-center">
        {nearByEventsData.length > 0 ? (
          nearByEventsData.map((event) => ( // Renamed 'movie' to 'event' for clarity
            <Card
              className="m-2"
              key={event._id}
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <Card.Img variant="top" src={event.imageUrl} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  <b>Language:</b> {event.language}
                  <br />
                  <b>Rating: </b>{event.rate}
                  {/* Add more event properties as needed */}
                </Card.Text>
                {/* Adjusted link to event details */}
                <Link to={`/EventDetails/${event._id}`}>
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nearByEventsData: state.nearByEvents, // Renamed to match state property
});

const mapDispatchToProps = (dispatch) => ({
  fetchNearByEvents: () => dispatch(nearByEvents()), // Renamed to match action creator
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
