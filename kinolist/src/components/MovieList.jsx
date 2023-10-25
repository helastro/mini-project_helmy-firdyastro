import React from "react";
import "../App.css";

function MovieList(props) {
  const WatchlistComponent = props.watchlistComponent;

  return (
    <>
      <div className="scroll-container overflow-y-hidden overflow-x-auto flex flex-nowrap">
        {props.movies.map((movie, index) => (
          <div className="relative me-4 flex flex-col items-center justify-center shrink-0" key={index}>
            <div className="image-container hover:scale-105 hover:cursor-pointer transition duration-250 ease-in">
              <img src={movie.Poster} alt="movie" className="rounded w-75 h-110 transition" />
              <div onClick={() => props.handleWatchlistClick(movie)} className="overlay flex items-center justify-center inset-0 w-75 h-110  opacity-0 text-xl p-5 text-center absolute">
                <WatchlistComponent />
              </div>
            </div>
            <p className="text-center my-4">{movie.Title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
