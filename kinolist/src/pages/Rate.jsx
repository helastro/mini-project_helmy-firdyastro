import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieListRate from "../components/MovieListRate";
import MovieListHeading from "../components/MovieListHeading";
import MediaQuery from "../config/MediaQuery";

function Rate() {
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
        <div className="scroll container mx-auto">
          <div className={`flex items-center my-4 ${isMobile ? " justify-center" : ""}`}>
            <MovieListHeading heading="RATE" />
          </div>
          <div className={`${isMobile ? "mx-8" : ""}`}>
            <MovieListRate />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Rate;
