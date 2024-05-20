import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { upComingMovies } from '../Store/actions/movieActions';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UpComingMovies = ({ upComingMovies, upComingMoviesAction }) => {
  useEffect(() => {
    upComingMoviesAction();
  }, [upComingMoviesAction]);

  return (
    <div>
      <h1 className="text-center" style={{color: 'white'}}>Upcoming Movies</h1>
      <div className="Container d-flex justify-content-center">
        {upComingMovies.length > 0 ? (
          upComingMovies.map((movie) => (
            <Card
              className="m-2"
              key={movie._id}
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <Card.Img variant="top" src={movie.imageUrl} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                  Language: {movie.language}
                  <br />
                  Type: {movie.type}
                  <br />
                  Rate: {movie.rate}
                </Card.Text>
                <Link to={`/MovieDetails/${movie._id}`}>
                  <Button variant="primary">Book</Button>
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  upComingMovies: state.upComingMovies,
});

const mapDispatchToProps = (dispatch) => ({
  upComingMoviesAction: () => dispatch(upComingMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpComingMovies);
