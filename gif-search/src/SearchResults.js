import React from "react";

export default function SearchResults(props) {
  if (props.data.length == 0) {
    return <div> LOADING... </div>;
  }

  return (
    <div>
      <img src={props.data.data[0].images.preview_webp.url}></img>
      {/* <p>{props.data.data[0].type}</p> */}
      <p>test</p>
    </div>
  );
}
