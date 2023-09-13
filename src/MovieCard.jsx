import React from "react";
import moviePoster from "./images/movieposter.png";
import imdbIcon from "./images/imdb.png";
import { useNavigate, Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <Link className="link" to={`/movies/${props.id}`}>
        <div className="card" data-testid="movie-card">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/original${props.source}`}
            alt="Card image cap"
            data-testid="movie-poster"
          />
          <div className="card-body">
            <p data-testid="movie-release-date" className="my-2">
              {props.releaseDate}
            </p>
            <h3 data-testid="movie-title">{props.title}</h3>
            <div className="movie-rating d-flex align-items-center my-3">
              <img src={imdbIcon} alt="" />
              <span className="rating mx-2">{props.rating}/10</span>
            </div>
          </div>
          <i className="fa-solid fa-heart" onClick={props.toggleActive}></i>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
