import React from "react";
import Logo from "../assets/img/logo_Kinolist_Round.png";
import { Link } from "react-router-dom";

function Navbar({ className }) {
  return (
    <>
      <nav className="bg-gradient-to-b from-black text-white p-4 flex justify-between items-center sticky top-0 z-50 relative">
        <img src={Logo} alt="Logo" className="h-8 w-8" />
        <div>
          <ul className="flex gap-x-12 justify-center items-center">
            <li className="font-normal">
              <Link to="/">HOME</Link>
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
              <Link to="/How-to-Use">HOW TO USE</Link>
            </li>
          </ul>
        </div>
        <button>dark</button>
      </nav>
      <div className={`inset-0 flex flex-col items-center justify-center h-screen absolute z-0 pointer-events-none ${className}`}></div>
    </>
  );
}

export default Navbar;
