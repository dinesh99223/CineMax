// src/components/RecommendedMovies.js
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { upComingMovies, setSelectedMovie } from '../Store/actions/movieActions';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecommendedMovies = ({ upComingMoviesList, upComingMoviesAction, setSelectedMovieAction }) => {
  useEffect(() => {
    upComingMoviesAction();
  }, [upComingMoviesAction]);

  const handleBookClick = (movie) => {
    setSelectedMovieAction(movie); // Dispatch action to set selected movie
  };

  return (
    <div>
      <h1 className='text-center' style={{color: 'white'}}>Recommended Movies</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {upComingMoviesList.length > 0 ? (
          upComingMoviesList.map((movie) => (
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
                  <Button variant="primary" onClick={() => handleBookClick(movie)}>Book</Button>
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
  upComingMoviesList: state.upComingMovies,
});

const mapDispatchToProps = (dispatch) => ({
  upComingMoviesAction: () => dispatch(upComingMovies()),
  setSelectedMovieAction: (movie) => dispatch(setSelectedMovie(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMovies);
