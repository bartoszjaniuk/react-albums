import React from "react";
import "./search-bar.styles.scss";

const SearchBar = () => {
  return (
    <div className="search-container">
      <form action="">
        <input type="text" placeholder="Search" className="search-input" />
      </form>
    </div>
  );
};

export default SearchBar;
