import React from "react";
import { useLanguage } from "../config/LanguageContext";
import MediaQuery from "../config/MediaQuery";

function SearchBar(props) {
  const { isEnglish } = useLanguage();
  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <div className="flex justify-center items-center">
      <input
        className={`border-2 border-transparent bg-transparent border-b-white px-4 py-2 my-4 focus:outline-none text-center placeholder:text-gray-500 ${isMobile ? "w-2/3" : "w-1/3"}`}
        placeholder={isEnglish ? "Search..." : "Cari..."}
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
