import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useLanguage } from "../config/LanguageContext";
import MediaQuery from "../config/MediaQuery";

function LandingPage() {
  const { isEnglish } = useLanguage();
  const isMobile = MediaQuery("(max-width: 768px)");

  const typeEffect = (typewriter, text) => {
    typewriter.typeString(text).pauseFor(3000).deleteAll(100).pauseFor(1500).start();
  };

  return (
    <div className="overflow-x-hidden">
      <div className={`bg-center bg-cover w-screen h-screen relative ${isMobile ? "bg-mobile" : "bg-desktop"}`}>
        <Navbar className="bg-gradient-to-r from-black" />
        <div className="inset-0 flex flex-col items-center justify-center h-screen">
          <div className="container mx-auto relative">
            <h1 style={{ fontFamily: "Courier New" }} className={` ${isMobile ? "text-center text-6xl" : "text-9xl text-start"}`}>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typeEffect(typewriter, "KINOLIST");
                }}
              />
            </h1>
            <p className={`${isMobile ? "text-center mb-6 text-xs" : "text-xl mb-6"}`}>{isEnglish ? "Organize, Rate, Get Recommendations." : "Atur, Nilai, Dapatkan Rekomendasi."}</p>
            <div className={isMobile ? "flex justify-center items-center" : ""}>
              <Link to="/How-to-Use">
                <Button label={isEnglish ? "Learn More" : "Pelajari Lebih Lanjut"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
