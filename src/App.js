import React from "react";
import "./App.css";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { SearchResults } from "./SearchResults";
import { Paginator } from "./Paginator";

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

function App() {
  const [searchTerm, setSearchTerm] = React.useState();
  const [activeSearch, setActiveSearchTerm] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(0);

  const [results, setResults] = React.useState();
  React.useEffect(() => {
    if (activeSearch !== undefined) {
      gf.search(activeSearch, { offset: currentPage * 5, limit: 5 }).then(
        setResults
      );
    }
  }, [activeSearch, currentPage]);
  
  // If you prefer async/await to Promise.then(), you can use the following alternate version:
  //
  // React.useEffect(() => {
  //   async function getResultsAsync() {
  //     setResults(await gf.search(activeSearch, { offset: currentPage * 5, limit: 5 }));
  //   }
  //   getResultsAsync();
  // }, [activeSearch, currentPage]);
  //
  // My advice concerning async/await vs Promise.then() is to make sure you understand both
  // and use whichever one your team prefers
  //
  // (understanding both gives you more flexibility when joining teams)

  return (
    <div className="App">
      {/*
        Using a simple HTML form and input to handle the user searching for content on giphy
        
        NOTE: In a real project, usually there is a UI library in place (like bootstrap)
        and it would make sense to use that.  But since we don't have that already set up
        in this small project, we're just falling back to HTML, the lowest common denominator
      */}
      <form
        onSubmit={event => {
          setActiveSearchTerm(searchTerm);
          setCurrentPage(0);
          event.preventDefault();
        }}
      >
        <input
          value={searchTerm}
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>

      {/* Display the results using a separate component */}
      <SearchResults results={results} />

      {/* Showing pagination controls */}
      {results !== undefined && (
        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
