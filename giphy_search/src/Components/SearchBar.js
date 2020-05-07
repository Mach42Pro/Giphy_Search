import React from 'react';
import { useState } from 'react';

function SearchBar( props ){

    return(
        <div class="search-bar">
            <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} placeholder="Search Gifys"></input>
            <button type="submit">search</button>
            </form>
        </div>
    )
}


export default SearchBar;