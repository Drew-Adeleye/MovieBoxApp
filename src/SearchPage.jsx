import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function SearchPage(props) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const apiKey = "1d01ba6333dcca2427e736451a846ae1";

    // Endpoint URL for searching movies
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${props.searchInput}`;

    function searchMovies() {
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
          // Process and display the search results
          console.log(data);
          setSearchResults(data.results);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    // if (props.searchInput.length > 0) {
    //   searchMovies();
    // }
    searchMovies();
  }, [props.searchInput]);

  function toggleActive(event, id) {
    event.preventDefault();
    event.stopPropagation();

    searchResults.map((movie) => {
      if (movie.id == id) {
        event.target.classList.toggle("active");
        return movie;
      } else {
        return movie;
      }
    });
  }

  const movieElements = searchResults.map((movie) => (
    <MovieCard
      key={movie.id}
      title={movie.title}
      releaseDate={movie.release_date}
      rating={movie.vote_average}
      source={movie.poster_path}
      id={movie.id}
      toggleActive={(event) => toggleActive(event, movie.id)}
    />
  ));

  return (
    <>
      <section className="search-heading">
        <div className="container">
          <Navbar
            handleChange={props.handleChange}
            searchInput={props.searchInput}
          />
        </div>
      </section>
      <section className="top-movies-section">
        <div className="container">
          <div className="row py-5">
            <div className="movie-category">
              <h2>Search Results</h2>
            </div>
          </div>
          <div className="row g-5">{movieElements}</div>
        </div>
      </section>
    </>
  );
}

export default SearchPage;
