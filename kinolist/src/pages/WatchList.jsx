import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

function WatchList() {
  const [movies, setMovies] = useState([]);
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

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="flex">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default WatchList;
