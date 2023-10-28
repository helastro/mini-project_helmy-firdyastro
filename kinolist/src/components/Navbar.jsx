import React, { useState } from "react";
import Logo from "../assets/img/logo_Kinolist_Round.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import FlagEng from "../assets/img/flag_Eng.png";
import FlagInd from "../assets/img/flag_Ind.png";

function Navbar({ className }) {
  const { isEnglish, toggleLanguage } = useLanguage();
  return (
    <>
      <nav className="bg-gradient-to-b from-black text-white p-4 flex justify-between items-center sticky top-0 z-50 relative">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
        </Link>
        <div>
          <ul className="flex gap-x-12 justify-center items-center">
            <li className="font-normal">
              <Link to="/">{isEnglish ? "HOME" : "BERANDA"}</Link>
            </li>
            <li className="font-normal">
              <Link to="/Watchlist">WATCHLIST</Link>
            </li>
            <li className="font-normal">
              <Link to="/Rate">RATE</Link>
            </li>
            <li className="font-normal">
              <Link to="/Chatbot">CHATBOT</Link>
            </li>
            <li className="font-normal">
              <Link to="/How-to-Use">{isEnglish ? "HOW TO USE" : "CARA PENGGUNAAN"}</Link>
            </li>
          </ul>
        </div>
        <button className="h-8 w-8" onClick={toggleLanguage}>
          {isEnglish ? <img src={FlagEng} alt="English Flag" /> : <img src={FlagInd} alt="Indonesian Flag" />}
        </button>
      </nav>
      <div className={`inset-0 flex flex-col items-center justify-center h-screen absolute z-0 pointer-events-none ${className}`}></div>
    </>
  );
}

export default Navbar;
