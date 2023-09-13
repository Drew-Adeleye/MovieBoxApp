import React, { useEffect, useState } from "react";
import logo from "./images/tv.png";
import homeIcon from "./images/Home.png";
import movieIcon from "./images/movieicon.png";
import seriesIcon from "./images/seriesicon.png";
import calendarIcon from "./images/Calendar.png";
import movieCover from "./images/moviecover.png";
import { useParams } from "react-router-dom";

function MovieInfoPage() {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual TMDb API key
    const apiKey = "1d01ba6333dcca2427e736451a846ae1";

    // Replace 'MOVIE_ID' with the ID of the movie you want to retrieve
    const movieId = id;

    // Endpoint URL for fetching movie details by ID
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

    // Function to fetch and display movie details by ID
    function fetchMovieDetails() {
      // Send a GET request to the TMDb API
      fetch(endpoint)
        .then((response) => {
          // Check if the response status is OK (200)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // Parse the JSON response
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setCurrentMovie(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    // Call the function to fetch movie details by ID
    fetchMovieDetails();
  }, []);

  //   console.log(currentMovie)

  return (
    <section className="movie-info-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar border border-1 border-dark py-3 d-none d-md-block">
            <div className="brandname">
              <img src={logo} alt="" className="" />
              <h1 className="m-0">MovieBox</h1>
            </div>
            <div className="sidebar-home side-menu py-3">
              <img src={homeIcon} alt="" />
              <h3 className="m-0">Home</h3>
            </div>
            <div className="sidebar-movies side-menu py-3">
              <img src={movieIcon} alt="" />
              <h3 className="m-0">Movies</h3>
            </div>
            <div className="sidebar-tv-series side-menu py-3">
              <img src={seriesIcon} alt="" />
              <h3 className="m-0">Tv Series</h3>
            </div>
            <div className="sidebar-upcoming side-menu py-3">
              <img src={calendarIcon} alt="" />
              <h3 className="m-0">Upcoming</h3>
            </div>
            <div className="sidebar-log-out side-menu py-3">
              <img src={homeIcon} alt="" />
              <h3 className="m-0">Log out</h3>
            </div>
          </div>
          <div className="col-md-9 py-3">
            <div className="row">
              <div className="col-md-12">
                <img
                  src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
                  alt=""
                  className="w-100"
                />
                <div className="movie-stats py-3">
                  <h3>
                    {"  "}
                    <span data-testid="movie-title">{currentMovie.title}</span>
                    {"  "}
                    <span data-testid="movie-release-date">
                      {currentMovie.release_date}
                    </span>
                    {"  "}
                    {"  "}
                    <span data-testid="movie-runtime">
                      {currentMovie.runtime}m
                    </span>
                    {"  "}
                    {"  "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p data-testid="movie-overview">{currentMovie.overview}</p>
                <p>Director : Joseph Kosinski</p>
                <p>Writers : Jim Cash, Jack Epps Jr, Peter Craig</p>
                <p>Stars : Tom Cruise, Jennifer Connelly, Miles Teller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieInfoPage;
