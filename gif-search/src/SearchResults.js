import React from "react";

export default function SearchResults(props) {
  var gifs = [];

  if (props.data && props.data[0]) {
    gifs = props.data;
  }

  //   const searchResults = props.data.map((item, idx) => {
  //     return (
  //       <div>
  //         <img src={item.images.preview_webp.url}></img>
  //       </div>
  //     );
  //   });

  if (gifs.length == 0) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      {/* {if (gifs.length == 0) {

        }} */}
      <img src={props.data[0].images.preview_webp.url}></img>
      {/* <p>{props.data[0].type}</p> */}
      <p>test</p>
    </div>
  );
}
