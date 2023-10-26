import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import MovieListRate from "../components/MovieListRate";
import MovieListHeading from "../components/MovieListHeading";

function Rate() {
  return (
    <>
      <div>
        <Navbar />
        <div className="scroll container mx-auto">
          <div className="flex items-center mt-4 mb-4">
            <MovieListHeading heading="RATE" />
          </div>{" "}
          <div>
            <MovieListRate />
          </div>
        </div>
      </div>
    </>
  );
}

export default Rate;
