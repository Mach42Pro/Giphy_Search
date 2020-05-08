import React, { useState, useEffect } from 'react';
import {errorStyle, noErrorStyle} from './styleOptions'
import './App.css';
const axios = require('axios');

function App() {
   const key = process.env.API_KEY;
   const [searchQuery, setSearchQuery] = useState('');
   const [resultsArray, setResultsArray] = useState();
   const [errorFlag, setErrorFlag] = useState();
   const [currentOffset, setCurrentOffset] = useState();
   const [showFlag, setShowFlag] = useState(false);
   const [clickedFlag, setClickedFlag] = useState(false);

  useEffect(() => {
    setErrorFlag(false);
    const fetch = async () => {
      const results = await axios.get(
         `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${key}&limit=5&offset=${currentOffset}`
      );
      setResultsArray(results.data.data);
    }

    fetch();
          
  }, [currentOffset, clickedFlag])

  const fetchGifs = (e, str = false) => {
      e.preventDefault();
      setShowFlag(true);
      if (searchQuery === '') {
        setErrorFlag(true);
      } else {
          switch (str) {
            case 'next':
              setCurrentOffset(currentOffset+5);
              break;
            case 'previous':
              setCurrentOffset(Math.max(0, currentOffset-5));
              break;
            default:
              setCurrentOffset(0);
              
          }
          setClickedFlag(!clickedFlag);
      }
    }

   return (
      <div>
         <div className='search-container'>
            <form className='search-form'>
               <input
                  type='text'
                  style={errorFlag ? errorStyle : noErrorStyle}
                  onChange={(e) => setSearchQuery(e.target.value)}
               ></input>
               <button className='input-button'
                  onClick={(e) => {
                     fetchGifs(e);
                  }}
               >
                  Search
               </button>
            </form>
            {errorFlag && <p>Search parameters cannot be empty.</p>}
         </div>
         {resultsArray && resultsArray.length > 0 && showFlag && <div className='gif-container'>
            <button onClick={(e) => fetchGifs(e, 'previous')}>Previous 5</button>
               {resultsArray.map((gif) => {
                  return (
                     <>
                        <img
                           className='gif'
                           src={gif.images.original.url}
                           alt={searchQuery}
                        />
                     </>
                  );
               })}
            <button onClick={(e) => fetchGifs(e, 'next')}>Next 5</button>
         </div>}
      </div>
   );
}

export default App;
