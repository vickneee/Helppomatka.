import React from "react";
import "./searchComponent.css";

function SearchComponent() {
  return (
    <>
      <div className="search-bar">
        <div className="search-container">
          <div className="where">
            <p>
              <b>Where</b>
            </p>
            <input type="text" placeholder="Search destinations" />
          </div>
          <div className="check-in">
            <p>
              <b>Check in</b>
            </p>
            <p>Add dates</p>
          </div>
          <div className="check-out">
            <p>
              <b>Check out</b>
            </p>
            <p>Add dates</p>
          </div>
          <div className="add-guess">
            <p>
              <b>Who</b>
            </p>
            <p>Add guess</p>
          </div>
        </div>
      </div>
      <button className="add-guess-button">Search</button>
    </>
  );
}

export default SearchComponent;
