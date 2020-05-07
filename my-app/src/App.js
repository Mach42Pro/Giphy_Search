import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      gifs: {},
      query: "",
      loaded: false,
    }
  }

  fetchGifs(search) {
    
    const key = process.env.REACT_APP_GIPHY_API_KEY
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=5`)
    .then( res => res.json() )
    .then(
      (results) => {
        this.setState({
          loaded: true,
          gifs: results.data.url
        });
        console.log(this.state.gifs)
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

handleChange = e => {
  this.setState({query:e.target.value})
  console.log(this.state.query)
};

handleSearch=() =>{
  this.fetchGifs(this.state.query)
}


  render(){
    console.log(this.state.gifs)

  return (
    <div className="App">
      <label htmlFor="search">
        <input 
          type="text" 
          value={this.state.query}
          placeholder="Search a Gif"
          onChange={e => this.handleChange(e)}
         >

        </input>
        <button onClick={this.handleSearch}>Search</button>
      </label>
    </div>
  );
  }
}

export default App;
