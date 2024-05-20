// LatestMovies.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails, setSelectedMovie } from "../Store/actions/movieActions";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const LatestMovies = ({ movieDetails, fetchMovieDetails, setSelectedMovie }) => {
  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  const handleBookClick = (movie) => {
    setSelectedMovie(movie); // Dispatch action to set selected movie
  };

  return (
    <div>
      <h1 className="text-center" style={{color: 'white'}}>Latest Movies</h1>
      <div className="Container d-flex justify-content-center">
        {movieDetails.length > 0 ? (
          movieDetails.map((movie) => (
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
  movieDetails: state.movieDetails,
});

export default connect(mapStateToProps, { fetchMovieDetails, setSelectedMovie })(LatestMovies);
