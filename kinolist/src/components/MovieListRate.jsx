import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieListHeading from "../components/MovieListHeading";
import Button from "./Button";
import RemoveRate from "./RemoveRate";
import { useLanguage } from "../config/LanguageContext";
import MediaQuery from "../config/MediaQuery";

function MovieListRate() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const { isEnglish } = useLanguage();
  const isMobile = MediaQuery("(max-width: 768px)");
  const URL_API = import.meta.env.VITE_RATE_KEY;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePosterChange = (e) => {
    setPoster(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !poster || !rating || !description) {
      alert(isEnglish ? "Title, URL Poster, Rating, and Your Thought are required." : "Judul, URL Poster, Rating, dan Pikiranmu harus diisi");
      return;
    }

    if (title.length > 30) {
      alert(isEnglish ? "Title should not exceed 30 characters" : "Judul tidak boleh melebihi 30 karakter.");
      return;
    }

    if (rating < 1 || rating > 10) {
      alert(isEnglish ? "Rating must be between 1-10" : "Rating harus diantara 1-10");
      return;
    }

    const movieData = {
      Title: title,
      Poster: poster,
      Rating: rating,
      Description: description,
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
    setRating("");
    setDescription("");
    getMovieList();
  };

  const handleEdit = (id) => {
    const movieToEdit = movieList.find((movie) => movie.id === id);
    setTitle(movieToEdit.Title);
    setPoster(movieToEdit.Poster);
    setRating(movieToEdit.Rating);
    setDescription(movieToEdit.Description);
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

  const handleRatingClick = async (id) => {
    try {
      const response = await axios.get(`${URL_API}/${id}`);
      setSelectedMovie(response.data);
      setIsPopupActive(true);

      document.body.style.overflow = "hidden";
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const closePopup = () => {
    setIsPopupActive(false);

    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="scroll-container overflow-y-hidden overflow-x-auto flex flex-nowrap">
        {movieList.map((movie) => (
          <div key={movie.id} className="relative me-4 mb-4 flex flex-col items-center justify-center shrink-0">
            <div className="image-container hover:scale-105 hover:cursor-pointer transition duration-250 ease-in">
              <img src={movie.Poster} alt={movie.Title} className={`rounded transition ${isMobile ? "w-48 h-72" : "w-75 h-110"}`} />
              <div onClick={() => handleDelete(movie.id)} className={`opacity-0 overlay bg-black/75 flex items-center justify-center inset-0 p-5 text-center absolute ${isMobile ? "w-48 h-72 text-md" : "w-75 h-110 text-xl"}`}>
                <RemoveRate />
              </div>
            </div>
            <div onClick={() => handleRatingClick(movie.id)} className="hover:cursor-pointer ">
              <div className={`rounded-full bg-black border border-white p-4 -top-4 -right-4 flex items-center justify-center my-2 ${isMobile ? "w-8 h-8" : "w-10 h-10"}`}>
                <p className={`text-white font-medium ${isMobile ? "text-sm" : "text-lg"}`}>{movie.Rating}</p>
              </div>
            </div>
            <p className={`text-center font-bold mb-4 ${isMobile ? "w-48 text-sm truncate" : "w-75"}`}>{movie.Title}</p>
            <Button label={isEnglish ? "Edit" : "Sunting"} onClick={() => handleEdit(movie.id)} />
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4 mb-4">
        <MovieListHeading heading={isEditing ? (isEnglish ? "Edit" : "Sunting") : isEnglish ? "Add" : "Tambah"} />
      </div>

      <form className="space-y-4 mb-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-white">
            {isEnglish ? "Title:" : "Judul:"}
          </label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} className={`bg-transparent border border-white text-white rounded px-3 py-2 focus:outline-none ${isMobile ? "w-11/12" : "w-1/3"}`} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="poster" className="text-white">
            URL Poster:
          </label>
          <input type="text" id="poster" value={poster} onChange={handlePosterChange} className={`bg-transparent border border-white text-white rounded px-3 py-2 focus:outline-none ${isMobile ? "w-11/12" : "w-1/3"}`} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="text-white">
            Rating:
          </label>
          <input type="text" id="rating" value={rating} onChange={handleRatingChange} className={`bg-transparent border border-white text-white rounded px-3 py-2 focus:outline-none ${isMobile ? "w-11/12" : "w-1/3"}`} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-white">
            {isEnglish ? "Your Thought:" : "Pikiranmu:"}
          </label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} className={`bg-transparent border border-white text-white rounded px-3 py-2 focus:outline-none ${isMobile ? "w-11/12" : "w-1/3"}`} />
        </div>
        <p className={isMobile ? "w-11/12" : "w-1/3"}>
          {isEnglish
            ? "Note: If you want to view the details of your rating, click on your rate number located beneath the movie poster in the 'RATE' section."
            : "Pesan: Jika kamu ingin melihat detail penilaianmu, klik pada nomor ratingmu yang terletak di bawah poster film dalam bagian 'RATE'."}
        </p>
        <Button type="submit" label={isEditing ? (isEnglish ? "Update" : "Perbarui") : isEnglish ? "Add" : "Tambah"} />
      </form>

      {isPopupActive && selectedMovie && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/75 ${isMobile ? "overflow-y-auto" : ""}`}>
          <div className={`bg-black p-4 rounded-lg p-4 shadow shadow-white/50 ${isMobile ? "w-11/12" : "w-1/2"}`}>
            <div className={isMobile ? "" : "flex"}>
              <div className={`shrink-0 ${isMobile ? "flex justify-center items-center" : ""}`}>
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} className={`rounded transition ${isMobile ? "w-48 h-72 " : "w-75 h-110"}`} />
              </div>
              <div className="ml-4">
                <h2 className={` italic font-bold truncate ${isMobile ? "mt-2 text-center text-xl truncate" : "text-3xl"}`}>{selectedMovie.Title}</h2>
                <div className={`my-4 ${isMobile ? "flex justify-center items-center mt-2" : ""}`}>
                  <div className={`rounded-full bg-black border border-white p-4 -top-4 -right-4 flex items-center justify-center my-2 ${isMobile ? "w-8 h-8" : "w-10 h-10"}`}>
                    <p className={`text-white font-medium ${isMobile ? "text-sm" : "text-lg"}`}>{selectedMovie.Rating}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs">{isEnglish ? "My Thought:" : "Pikiranku:"}</p>
                  <p className="mt-2">{selectedMovie.Description}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <Button onClick={closePopup} label="Close" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieListRate;
