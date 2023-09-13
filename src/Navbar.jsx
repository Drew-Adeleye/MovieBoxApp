import React from "react";
import logo from "./images/tv.png";
import menuIcon from "./images/Menu.png";

function Navbar(props) {
  return (
    <div className="row align-items-center nav py-2">
      <div className="col-md-4">
        <div className="brandname">
          <img src={logo} alt="" className="" />
          <h1 className="m-0">MovieBox</h1>
        </div>
      </div>
      <div className="col-md-5">
        <input
          type="text"
          className="w-100"
          placeholder="what do you want to watch?"
          value={props.searchInput}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
      <div className="col-md-3 d-flex justify-content-end">
        <div className="auth">
          <img src={menuIcon} alt="" />
          <p className="m-0">Sign in</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
