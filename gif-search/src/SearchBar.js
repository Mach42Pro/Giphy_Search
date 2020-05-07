import React from "react";

function SearchBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="search.."></input>
      <button type="submit" className="button">
        search
      </button>
    </form>
  );
}

export default SearchBar;
