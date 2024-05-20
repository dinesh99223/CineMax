import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/bahu.jpg";
import image2 from "../images/jailer.jpg";
import image3 from "../images/godzilla.jpg";
import { Button } from "react-bootstrap";
import RecommendedMovies from "./RecommendedMovies";
import { Link } from "react-router-dom";

const imageSizeStyle = {
  height: "50vh", // Set your desired height
};

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="d-flex justify-content-around m-2">
        <Link to={"/LatestMovies"}>
        <Button variant="primary">Latest Movies</Button>
        </Link>
        <Link to={"/UpcomingMovies"}>
        <Button variant="warning">Upcoming Movies</Button>
        </Link>
        <Link to={"/NearbyEvents"}>
        <Button variant="success">Nearby Events</Button>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <div className="container-fluid w-80 m-3">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                style={imageSizeStyle}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                style={imageSizeStyle}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                style={imageSizeStyle}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <RecommendedMovies />
    </>
  );
};

export default Home;
