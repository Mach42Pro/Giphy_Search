import React, { Component } from "react";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',

    };
  }
  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
    };

 handleSearch = () => {

 }




  render() {
        return (
            <div>
            <input name="text" type="text" placeholder="Search" onChange={e =>  this.handleOnChange(e)} value={this.state.searchValue} />
            <button onClick={this.handleSearch}>Search</button>
            </div>
            );

  }
 
}

export default Search;