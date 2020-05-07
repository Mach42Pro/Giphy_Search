import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  const giphyURL = "http://api.giphy.com/v1/gifs/search?q=";
  const testSearch = "ryan";
  const key = process.env.REACT_APP_API_KEY;

  const [gifs, setGifs] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = () => {
    setSearchString(searchText);
  };

  useEffect(() => {
    if (searchString.length > 2) {
      fetch(giphyURL + testSearch + "&api_key=" + key)
        .then((res) => res.json())
        .then((res) => setGifs(res))
        .catch((err) => console.log(err));
    }
  }, [searchString]);

  // if (gifs.length == 0) {
  //   return <div>LOADING...</div>;
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="">Search GIFs</header>
        <form className="search-bar">
          <input
            type="text"
            onChange={handleChange}
            value={searchText}
            placeholder="search.."
          ></input>
          <Link to="/results">
            <button type="submit" className="button" onClick={handleClick}>
              search
            </button>
          </Link>
        </form>
        <Route
          path="/results"
          render={(props) => <SearchResults data={gifs} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
