import React from "react";

function MovieListHeading(props) {
  return (
    <div className="flex">
      <h1 className="font-bold text-3xl">{props.heading}</h1>
    </div>
  );
}

export default MovieListHeading;
