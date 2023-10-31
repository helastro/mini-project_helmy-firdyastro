import React, { useState } from "react";
import Logo from "../assets/img/logo_Kinolist_Round.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../config/LanguageContext";
import FlagEng from "../assets/img/flag_Eng.png";
import FlagInd from "../assets/img/flag_Ind.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar({ className }) {
  const { isEnglish, toggleLanguage } = useLanguage();
  let [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-b from-black text-white z-50 relative p-4 w-full sticky top-0 left-0 ">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 w-8 cursor-pointer" />
          </Link>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12 bg-gradient-to-t from-black" : "top-[-490px] "}`}>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to="/">
                <p className={`text-white hover:font-bold duration-500 ${open ? "bg-black py-2 px-4 w-fit rounded-full" : ""}`}>{isEnglish ? "HOME" : "BERANDA"}</p>
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to="/Watchlist">
                <p className={`text-white hover:font-bold duration-500 ${open ? "bg-black py-2 px-4 w-fit rounded-full" : ""}`}>WATCHLIST</p>
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to="/Rate">
                <p className={`text-white hover:font-bold duration-500 ${open ? "bg-black py-2 px-4 w-fit rounded-full" : ""}`}>RATE</p>
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to="/Chatbot">
                <p className={`text-white hover:font-bold duration-500 ${open ? "bg-black py-2 px-4 w-fit rounded-full" : ""}`}>CHATBOT</p>
              </Link>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to="/How-to-Use">
                <p className={`text-white hover:font-bold duration-500 ${open ? "bg-black py-2 px-4 w-fit rounded-full" : ""}`}>{isEnglish ? "HOW TO USE" : "CARA PENGGUNAAN"}</p>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <button className="h-8 w-8" onClick={toggleLanguage}>
              {isEnglish ? <img src={FlagEng} alt="English Flag" /> : <img src={FlagInd} alt="Indonesian Flag" />}
            </button>
            <div onClick={() => setOpen(!open)} className="  cursor-pointer md:hidden">
              {open ? <AiOutlineClose className="h-8 w-8" /> : <AiOutlineMenu className="h-8 w-8" />}
            </div>
          </div>
        </div>
      </nav>
      <div className={`inset-0 flex flex-col items-center justify-center h-screen absolute z-0 pointer-events-none ${className}`}></div>
    </>
  );
}

export default Navbar;
