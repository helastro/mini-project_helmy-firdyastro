import React from "react";
import BackgroundLandingPage from "../assets/img/background_LandingPage.jpg";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div
      className="bg-hero bg-center bg-cover w-screen h-screen relative"
      style={{
        backgroundImage: `url(${BackgroundLandingPage}),`,
      }}
    >
      <Navbar />
      <div className="absolute bg-gradient-to-r from-black inset-0 flex flex-col items-center justify-center">
        <div className="container mx-auto">
          <h1 style={{ fontFamily: "Courier New" }} className="text-9xl">
            KINOLIST
          </h1>
          <p className="text-xl">Organize, Rate, Get Recommendations.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
