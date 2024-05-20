// movieReducer.jsx or reducers.js

const initialState = {
  movieDetails: [], // Initialize as an empty array for multiple movie details
  upComingMovies: [],
  nearByEvents: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      return {
        ...state,
        movieDetails: action.payload, // Assuming action.payload is an array of movie details
      };

    case "SET_SELECTED_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload, // Set selected movie details
      };
    case "RESET_SELECTED_MOVIE":
      return {
        ...state,
        selectedMovie: null, // Reset selected movie to null
      };
    case "UPCOMING_MOVIES":
      return {
        ...state,
        upComingMovies: action.payload,
      };

    case "NEARBY_EVENTS":
      return {
        ...state,
        nearByEvents: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
