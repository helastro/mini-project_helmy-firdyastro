import React from "react";
import { useLanguage } from "../config/LanguageContext";

function RemoveRate() {
  const { isEnglish } = useLanguage();

  return (
    <>
      <span>{isEnglish ? "Remove from Rate" : "Hapus dari Rate"}</span>
    </>
  );
}

export default RemoveRate;
