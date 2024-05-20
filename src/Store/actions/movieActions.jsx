// movieActions.js
import axios from 'axios';

// Action types
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';
export const RESET_SELECTED_MOVIE = 'RESET_SELECTED_MOVIE';
export const UPCOMING_MOVIES = 'UPCOMING_MOVIES';
export const NEARBY_EVENTS = 'NEARBY_EVENTS';

// Action creators
export const fetchMovieDetails = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://3.17.216.66:4000/latest');
      dispatch({ type: SET_MOVIE_DETAILS, payload: response.data });
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };
};

export const upComingMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://3.17.216.66:4000/upcomingMovies');
      dispatch({ type: UPCOMING_MOVIES, payload: response.data });
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };
};

export const nearByEvents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://3.17.216.66:4000/events');
      dispatch({ type: NEARBY_EVENTS, payload: response.data });
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };
};

export const setSelectedMovie = (movieDetails) => ({
  type: SET_SELECTED_MOVIE,
  payload: movieDetails,
});

export const resetSelectedMovie = () => ({
  type: RESET_SELECTED_MOVIE,
});
