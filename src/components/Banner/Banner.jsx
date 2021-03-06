import React from "react";
import "./Banner.scss";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { fakeMovieData } from "../../data/fakeMovieData";

const { movies } = fakeMovieData;

const getRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  const {
    id,
    backdrop_path: backdrop,
    average_rating: rating,
    release_date: release,
    title,
  } = randomMovie;
  return { id, backdrop, rating, release, title };
};

const randomMovie1 = getRandomMovie();
const randomMovie2 = getRandomMovie();
const randomMovie3 = getRandomMovie();

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to={`/movies/${randomMovie1.id}`}>
          <div className="banner-wrapper">
            <img
              className="d-block w-100 img-fluid kenburns-bottom-left"
              src={randomMovie1.backdrop}
              alt="First slide"
            />
          </div>
        </Link>
        <Carousel.Caption>
          <h3>{randomMovie1.title}</h3>
          <p>
            Average User Score:{" "}
            {((randomMovie1.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`/movies/${randomMovie2.id}`}>
          <div className="banner-wrapper">
            <img
              className="d-block w-100 img-fluid kenburns-bottom-left"
              src={randomMovie2.backdrop}
              alt="Second slide"
            />
          </div>
        </Link>
        <Carousel.Caption>
          <h3>{randomMovie2.title}</h3>
          <p>
            Average User Score:{" "}
            {((randomMovie2.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`/movies/${randomMovie3.id}`}>
          <div className="banner-wrapper">
            <img
              className="d-block w-100 img-fluid kenburns-bottom-left"
              src={randomMovie3.backdrop}
              alt="Third slide"
            />
          </div>
        </Link>
        <Carousel.Caption>
          <h3>{randomMovie3.title}</h3>
          <p>
            Average User Score:{" "}
            {((randomMovie3.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
