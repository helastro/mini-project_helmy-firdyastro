import React from "react";
import { useLanguage } from "../config/LanguageContext";

function RemoveWatchlist() {
  const { isEnglish } = useLanguage();

  return (
    <>
      <span>{isEnglish ? "Remove from Watchlist" : "Hapus dari Watchlist"}</span>
    </>
  );
}

export default RemoveWatchlist;
