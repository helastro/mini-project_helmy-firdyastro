import React from "react";
import "../App.css";

function MovieList(props) {
  return (
    <>
      <div className="scroll-container flex">
        {props.movies.map((movie, index) => (
          <div className="flex-shrink-0 m-2 flex justify-start">
            <img src={movie.Poster} alt="movie"></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
