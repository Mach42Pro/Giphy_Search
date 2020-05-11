import React from "react";

// A generic paginator that takes in a 'currentPage' int and a 'setCurrentPage' function
// and allows the user to go to the next page, the previous page, and the first page
export function Paginator(props) {
  return (
    <div className="paginator-container">
      <div className="paginator-item">Page</div>

      {props.currentPage !== 0 && (
        <div className="paginator-item">
          {/* First page button */}
          <button
            onClick={event => {
              props.setCurrentPage(0);
            }}
          >
            1
          </button>
        </div>
      )}

      {/* If there are enough pages between page 1 and the "previous page button", display an ellipsis */}
      {props.currentPage > 2 && <> ... </>}

      {/* Previous page button */}
      {props.currentPage > 1 && (
        <div className="paginator-item">
          <button
            onClick={event => {
              props.setCurrentPage(props.currentPage - 1);
            }}
          >
            {props.currentPage}
          </button>
        </div>
      )}

      {/* Current page marker */}
      <div className="paginator-item">{props.currentPage + 1}</div>

      {/* Next page button */}
      <div className="paginator-item">
        <button
          onClick={event => {
            props.setCurrentPage(props.currentPage + 1);
          }}
        >
          {props.currentPage + 2}
        </button>
      </div>
    </div>
  );
}
