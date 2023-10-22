import React from "react";
import Logo from "../assets/img/logo_Kinolist_Round.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-black p-4 flex justify-between items-center">
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
              <Link to="/">RATE</Link>
            </li>
            <li className="font-normal">
              <Link to="/">CHATBOT</Link>
            </li>
            <li className="font-normal">
              <Link to="/">HOW TO USE</Link>
            </li>
          </ul>
        </div>
        <button>dark</button>
      </nav>
    </>
  );
}

export default Navbar;
