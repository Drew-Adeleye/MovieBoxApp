import { useEffect, useState } from "react";
import "./App.css";
import Header from "./header";
import MovieCard from "./MovieCard";
import MovieInfoPage from "./MovieInfoPage";
import SearchPage from "./searchPage";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    setSearchInput(event.target.value); 
  }

  // useeffect to perform the fetch request
  useEffect(() => {
    const apiKey = "1d01ba6333dcca2427e736451a846ae1";

    // Endpoint URL for top rated movies
    const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    // Function to fetch and display movie data
    function fetchPopularMovies() {
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
          // set state to the results of the fetched data
          setTopRatedMovies(data.results.slice(0, 10));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    // Call the function to fetch popular movies
    fetchPopularMovies();

    // https://image.tmdb.org/t/p/original${movie[path_type]}
  }, []);

  /* loop through each movie, for each movie, 
  if a component is clicked and the id matches, 

  set a class of active on the clicked element 
  return the curent movie in the loop (movie(i))
  */
  function toggleActive(event, id) {
    event.preventDefault();
    event.stopPropagation();

    topRatedMovies.map((movie) => {
      if (movie.id == id) {
        event.target.classList.toggle("active");
        return movie;
      } else {
        return movie;
      }
    });
  }

  // loop through data in state and return a card element of each data
  const movieElements = topRatedMovies.map((movie) => (
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header handleChange={handleChange} searchInput={searchInput} />
              <section className="top-movies-section">
                <div className="container">
                  <div className="row py-5">
                    <div className="movie-category">
                      <h2>Top 10 Movies</h2>
                    </div>
                  </div>
                  <div className="row g-5">{movieElements}</div>
                </div>
              </section>
            </>
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage handleChange={handleChange} searchInput={searchInput} />
          }
        />
        <Route path="/movies/:id" element={<MovieInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
