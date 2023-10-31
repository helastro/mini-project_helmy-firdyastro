import React from "react";
import "../App.css";
import MediaQuery from "../config/MediaQuery";

function MovieList(props) {
  const WatchlistComponent = props.watchlistComponent;
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="scroll-container overflow-y-hidden overflow-x-auto flex flex-nowrap mb-4">
        {props.movies.map((movie, index) => (
          <div className="relative flex flex-col items-center justify-center shrink-0 me-4" key={index}>
            <div className="image-container hover:scale-105 hover:cursor-pointer transition duration-250 ease-in">
              <img src={movie.Poster} alt={movie.Title} className={`rounded transition ${isMobile ? "w-48 h-72" : "w-75 h-110"}`} />
              <div onClick={() => props.handleWatchlistClick(movie)} className={`opacity-0 overlay bg-black/75 flex items-center justify-center inset-0 p-5 text-center absolute ${isMobile ? "w-48 h-72 text-md" : "w-75 h-110 text-xl"}`}>
                <WatchlistComponent />
              </div>
            </div>
            <p className={`text-center font-bold my-4 ${isMobile ? "w-48 text-sm" : "  w-75"}`}>{movie.Title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
