import "./App.css";
import Events from "./Components/Events";
import Home from "./Components/Home";
import LatestMovies from "./Components/LatestMovies";
import MovieDetails from "./Components/MovieDetails";
import Navigation from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import UpComingMovies from "./Components/UpComingMovies";
import BookingDetails from "./Components/BookingDetails";
import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LatestMovies" element={<LatestMovies />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/NearbyEvents" element={<Events />} />
          <Route path="/UpcomingMovies" element={<UpComingMovies />} />
          <Route path="/BookingDetails" element={<BookingDetails />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
