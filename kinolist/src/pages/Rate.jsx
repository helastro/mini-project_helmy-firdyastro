import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
// import MovieListRate from "../components/MovieListRate";
// import MovieListHeading from "../components/MovieListHeading";
// import SearchBar from "../components/SearchBar";
// import AddRate from "../components/AddRate";
// import RemoveRate from "../components/RemoveRate";

function Rate() {
  //   const [movies, setMovies] = useState([]);
  //   const [rate, setRate] = useState([]);
  //   const [searchValue, setSearchValue] = useState("");

  //   const getMovieRequest = async (searchValue) => {
  //     const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d38ed0a8`;
  //     const response = await fetch(url);
  //     const responseJson = await response.json();

  //     if (responseJson.Search) {
  //       setMovies(responseJson.Search);
  //     }
  //   };

  //   useEffect(() => {
  //     getMovieRequest(searchValue);
  //   }, [searchValue]);

  //   useEffect(() => {
  //     const movieRate = JSON.parse(localStorage.getItem("react-kinolist-rate"));
  //     setRate(movieRate);
  //   }, []);

  //   const saveToLocalStorage = (items) => {
  //     localStorage.setItem("react-kinolist-rate", JSON.stringify(items));
  //   };

  //   const addRateMovie = (movie) => {
  //     const newRate = [...rate, movie];
  //     setRate(newRate);
  //     saveToLocalStorage(newRate);
  //   };

  //   const removeRateMovie = (movie) => {
  //     const newRate = rate.filter((rate) => rate.imdbID !== movie.imdbID);
  //     setRate(newRate);
  //     saveToLocalStorage(newRate);
  //   };

  return (
    <>
      <div className="bg-black h-max text-white">
        <Navbar />
        {/* <div className="scroll container mx-auto ">
          <div>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className="flex">
            <MovieListRate movies={movies} handleRateClick={addRateMovie} rateComponent={AddRate} />
          </div>
          <div className="flex items-center mt-4 mb-4">
            <MovieListHeading heading="RATE" />
          </div>{" "}
          <div className="flex">
            <MovieListRate movies={rate} handleRateClick={removeRateMovie} rateComponent={RemoveRate} />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Rate;
