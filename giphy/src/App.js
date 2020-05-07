import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/search"

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      gifs: {}
    }
  }
 
  fetchGifs(searchText) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=5`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(json => this.setState({
      gifs: json
    }))

}
  componentDidMount() {
    this.fetchGifs()


  }


 
  render() {
    return(
      <>
      <div>Giphy Search App</div>
      <Search />
      </>
    )
  }
}

export default App;
