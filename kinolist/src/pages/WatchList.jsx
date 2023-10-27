import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBar from "../components/SearchBar";
import AddWatchlist from "../components/AddWatchlist";
import RemoveWatchlist from "../components/RemoveWatchlist";
import AddMovieManual from "../components/AddMovieManual";

function WatchList() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d38ed0a8`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieWatchlist = JSON.parse(localStorage.getItem("react-kinolist-watchlist"));
    setWatchlist(movieWatchlist);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-kinolist-watchlist", JSON.stringify(items));
  };

  const addWatchlistMovie = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  };

  const removeWatchlistMovie = (movie) => {
    const newWatchlist = watchlist.filter((watchlist) => watchlist.imdbID !== movie.imdbID);
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  };

  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
        <div className="scroll container mx-auto ">
          <div>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className="flex items-center mt-4 mb-4">
            <MovieList movies={movies} handleWatchlistClick={addWatchlistMovie} watchlistComponent={AddWatchlist} />
          </div>
          <div className="flex items-center mt-4 mb-4">
            <MovieListHeading heading="WATCHLIST" />
          </div>{" "}
          <div className="flex">
            <MovieList movies={watchlist} handleWatchlistClick={removeWatchlistMovie} watchlistComponent={RemoveWatchlist} />
          </div>
          <div>
            <AddMovieManual />
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchList;
