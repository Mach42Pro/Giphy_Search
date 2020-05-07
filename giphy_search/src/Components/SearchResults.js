import React from 'react';


function SearchResults( props ) {
    
    if (props.images.length){
        return (
            <div class="search-results-container">
                {props.images.map (image =>
                <div key={image.id}>
                    <a href={image.url} target='_blank'>
                            <img src={image.images.original.url} />
                    </a>
                </div>
                )}
            </div>
        )
    } else {
        return (
            <h1>No images found, search something else</h1>
        )
    }
}


export default SearchResults;