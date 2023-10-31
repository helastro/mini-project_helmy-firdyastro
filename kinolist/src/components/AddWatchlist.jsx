import React from "react";
import { useLanguage } from "../config/LanguageContext";

function AddWatchlist() {
  const { isEnglish } = useLanguage();

  return (
    <>
      <span>{isEnglish ? "Add to Watchlist" : "Tambah ke Watchlist"}</span>
    </>
  );
}

export default AddWatchlist;
