import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../config/LanguageContext";
import MediaQuery from "../config/MediaQuery";

function Footer() {
  const { isEnglish } = useLanguage();
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <footer className="bg-black h-auto w-full">
      <div className="container mx-auto p-5 flex flex-col md:flex-row justify-around items-start">
        <div className="p-5">
          <ul>
            <p className="text-white text-5xl pb-6" style={{ fontFamily: "Courier New" }}>
              KINOLIST
            </p>
            <div className="flex gap-6 pb-5">
              <a href="https://www.facebook.com/profile.php?id=100010732577121" className="text-2xl cursor-pointer hover:font-semibold" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/firdyastro/" className="text-2xl cursor-pointer hover:text-pink-500" target="_blank">
                <FaInstagram />
              </a>{" "}
              <a href="https://www.linkedin.com/in/helmy-firdyastro/" className="text-2xl cursor-pointer hover:font-semibold" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://github.com/helastro" className="text-2xl cursor-pointer hover:text-purple-700" target="_blank">
                <FaGithub />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">{isEnglish ? "Page" : "Halaman"}</p>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <Link to="/">{isEnglish ? "Home" : "Beranda"}</Link>
            </li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <Link to="/Watchlist">Watchlist</Link>
            </li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <Link to="/Rate">Rate</Link>
            </li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <Link to="/Chatbot">Chatbot</Link>
            </li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <Link to="/How-to-Use">{isEnglish ? "How to Use" : "Cara Penggunaan"}</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">{isEnglish ? "Social" : "Sosial"}</p>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <a href="https://www.facebook.com/profile.php?id=100010732577121" className="text-white" target="_blank">
                Facebook
              </a>
            </li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <a href="https://www.instagram.com/helmy_193/" className="text-white" target="_blank">
                Instagram
              </a>
            </li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">
              <a href="https://www.linkedin.com/in/helmy-firdyastro/" className="text-white" target="_blank">
                LinkedIn
              </a>
            </li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer" target="_blank">
              <a href="https://github.com/helastro" className="text-white" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">{isEnglish ? "Contact" : "Kontak"}</p>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">Helmy Firdyastro</li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">Kab. Cirebon</li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">helmyfirdy888@gmail.com</li>
            <li className="text-white text-md pb-2 hover:font-semibold cursor-pointer">+62 821-1519-5443</li>
          </ul>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-center text-center p-5">
        <p className="text-white">
          {isEnglish ? "This website is made by " : "Website ini dibuat oleh "}
          <span className="cursor-pointer hover:text-violet-700 text-violet-500 font-bold">HELASTRO</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
