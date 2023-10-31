import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import cover from "../assets/img/cover.jpg";
import { useLanguage } from "../config/LanguageContext";

function HowtoUse() {
  const { isEnglish } = useLanguage();

  return (
    <div>
      <Navbar />
      <div className="inset-0 flex flex-col items-center justify-center bg-black h-screen">
        <img src={cover} alt="cover" className="h-110 w-auto mb-8" />
        <a href="https://drive.google.com/file/d/1wenoMb8QFZqfs_yUTpfaWq_fB3u2KJua/view?usp=sharinga" target="_blank">
          <Button label={isEnglish ? "Download" : "Unduh"} />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default HowtoUse;
