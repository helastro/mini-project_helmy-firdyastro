import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBar from "../components/SearchBar";
import AddWatchlist from "../components/AddWatchlist";
import RemoveWatchlist from "../components/RemoveWatchlist";
import AddMovieManual from "../components/AddMovieManual";
import MediaQuery from "../config/MediaQuery";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

function WatchList() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const isMobile = MediaQuery("(max-width: 768px)");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
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
    if (movieWatchlist) {
      setWatchlist(movieWatchlist);
    }
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
        <div className="scroll container mx-auto">
          <div>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className={`flex items-center ${isMobile ? "mx-8" : ""}`}>
            <MovieList movies={movies} handleWatchlistClick={addWatchlistMovie} watchlistComponent={AddWatchlist} />
          </div>
          <div className={`flex items-center ${isMobile ? " justify-center" : ""}`}>
            <MovieListHeading heading="WATCHLIST" />
          </div>{" "}
          <div className={`flex items-center my-4 ${isMobile ? "mx-8" : ""}`}>
            <MovieList movies={watchlist} handleWatchlistClick={removeWatchlistMovie} watchlistComponent={RemoveWatchlist} />
          </div>
          <div className={`flex items-center my-4 ${isMobile ? "mx-8" : ""}`}>
            <AddMovieManual />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WatchList;
