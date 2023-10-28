import React from "react";
import { useLanguage } from "../LanguageContext";

function AddWatchlist() {
  const { isEnglish } = useLanguage();

  return (
    <>
      <span>{isEnglish ? "Add to Watchlist" : "Tambah ke Watchlist"}</span>
    </>
  );
}

export default AddWatchlist;
