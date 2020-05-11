import React from "react";

export function SearchResults(props) {
  if (props.results === undefined) {
    return null;
  }

  // Render the images in a horizontal flexbox layout
  return (
    <div className="giphy-results-container">
      {props.results.data.map(gif => (
        <a href={gif.url} className="giphy-result">
          <img
            src={gif.images.fixed_height.url}
            alt={gif.title}
          />
        </a>
      ))}
    </div>
  );
}
