import React from "react";
import "../App.css";

function MovieList(props) {
  const WatchlistComponent = props.watchlistComponent;

  return (
    <>
      <div className="scroll-container overflow-y-hidden overflow-x-auto flex flex-nowrap">
        {props.movies.map((movie, index) => (
          <div className="image-container relative me-4 m shrink-0 flex flex-col items-center justify-center transition duration-200 hover:cursor-pointer hover:scale-105" key={index}>
            <img src={movie.Poster} alt="movie" className="rounded" />
            <p className="text-center my-4">{movie.Title}</p>
            <div onClick={() => props.handleWatchlistClick(movie)} className="overlay flex items-center justify-center inset-0 w-full transition duration-250 ease-in opacity-0 text-xl p-5 text-center absolute">
              <WatchlistComponent />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
