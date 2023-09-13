import React from "react";
import imdbIcon from "./images/imdb.png";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <header className="header-section">
      <div className="container">
        <Navbar
          handleChange={props.handleChange}
          searchInput={props.searchInput}
        />
        <div className="row row-2 py-5">
          <div className="col-lg-4">
            <h2>
              John Wick 3: <br /> Parabellum
            </h2>
            <div className="movie-rating d-flex align-items-center my-3">
              <img src={imdbIcon} alt="" />
              <span className="rating mx-2">86.0/100</span>
            </div>
            <p className="desc">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
