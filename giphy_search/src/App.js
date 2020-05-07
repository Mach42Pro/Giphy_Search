import React from 'react';
import './App.css';
import './Components/SearchBar';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import { useState, useEffect } from 'react';


function App() {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('nerds');

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    getImages();
  }

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    const key = process.env.REACT_APP_GIPHY_KEY;
    const limit = 5
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}&limit=${limit}`;
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data);
      }).catch(console.error);

  }

  return (
    <div >
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} search={search} />
      <SearchResults images={images} />
    </div>
  );
}

export default App;
