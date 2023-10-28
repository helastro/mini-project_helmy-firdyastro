import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieListHeading from "../components/MovieListHeading";
import Button from "./Button";
import "../App.css";
import RemoveWatchlist from "./RemoveWatchlist";

function AddMovieManual() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const URL_API = "https://6538bec1a543859d1bb1d5d3.mockapi.io/kinolist/MovieListManual";

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePosterChange = (e) => {
    setPoster(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !poster) {
      alert("Title and URL Poster are required.");
      return;
    }

    if (title.length > 30) {
      alert("Title should not exceed 30 characters");
      return;
    }

    const movieData = {
      Title: title,
      Poster: poster,
    };

    if (isEditing) {
      try {
        await axios.put(`${URL_API}/${editId}`, movieData);
        console.log("Movie has successfully been updated.");
        setIsEditing(false);
        setEditId(null);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        await axios.post(URL_API, movieData);
        console.log("Movie has successfully been added.");
      } catch (error) {
        console.error("Error:", error);
      }
    }

    setTitle("");
    setPoster("");
    getMovieList();
  };

  const handleEdit = (id) => {
    const movieToEdit = movieList.find((movie) => movie.id === id);
    setTitle(movieToEdit.Title);
    setPoster(movieToEdit.Poster);
    setIsEditing(true);
    setEditId(id);
  };

  const getMovieList = async () => {
    try {
      const response = await axios.get(URL_API);
      setMovieList(response.data);
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL_API}/${id}`);
      getMovieList();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div>
      <div className="scroll-container overflow-y-hidden overflow-x-auto flex flex-nowrap">
        {movieList.map((movie) => (
          <div key={movie.id} className="relative me-4 mb-4 flex flex-col items-center justify-center shrink-0">
            <div className="image-container hover:scale-105 hover:cursor-pointer transition duration-250 ease-in">
              <img src={movie.Poster} alt={movie.Title} className="rounded w-75 h-110 transition" />
              <div onClick={() => handleDelete(movie.id)} className="overlay bg-black/75 flex items-center justify-center inset-0 w-75 h-110  opacity-0 text-xl p-5 text-center absolute">
                <RemoveWatchlist />
              </div>
            </div>
            <p className="text-center my-4 font-bold w-75">{movie.Title}</p>
            <Button label="Edit" onClick={() => handleEdit(movie.id)} />
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4 mb-4">
        <MovieListHeading heading={isEditing ? "Edit" : "Add Manually"} />
      </div>

      <form className="space-y-4 mb-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-white">
            Title:
          </label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} className="w-1/3 bg-transparent border border-white text-white rounded px-3 py-2 focus:outline-none" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="poster" className="text-white">
            URL Poster:
          </label>
          <input type="text" id="poster" value={poster} onChange={handlePosterChange} className="w-1/3 bg-transparent border border-white rounded px-3 py-2 focus:outline-none" />
        </div>
        <Button type="submit" label={isEditing ? "Update" : "Add"} />
      </form>
    </div>
  );
}

export default AddMovieManual;
