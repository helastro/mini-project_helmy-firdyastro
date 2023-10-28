import React from "react";
import BackgroundLandingPage from "../assets/img/background_LandingPage.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  const typeEffect = (typewriter, text) => {
    typewriter.typeString(text).pauseFor(3000).deleteAll(100).pauseFor(1500).start();
  };

  return (
    <div className="overflow-x-hidden">
      <div
        className="bg-hero bg-center bg-cover w-screen h-screen relative"
        style={{
          backgroundImage: `url(${BackgroundLandingPage})`,
        }}
      >
        <Navbar className="bg-gradient-to-r from-black" />
        <div className="inset-0 flex flex-col items-center justify-center h-screen">
          <div className="container mx-auto relative">
            <h1 style={{ fontFamily: "Courier New" }} className="text-9xl text-start">
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typeEffect(typewriter, "KINOLIST");
                }}
              />
            </h1>
            <p className="text-xl mb-6">Organize, Rate, Get Recommendations.</p>
            <Link to="/How-to-Use">
              <Button label="Learn More" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
