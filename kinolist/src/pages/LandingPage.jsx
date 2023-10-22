import React from "react";
import BackgroundLandingPage from "../assets/img/background_LandingPage.jpg";
import Navbar from "../components/Navbar";

function LandingPage() {
  const backgroundLandingPage = {
    backgroundImage: { BackgroundLandingPage },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={backgroundLandingPage}>
      <Navbar />
    </div>
  );
}

export default LandingPage;
