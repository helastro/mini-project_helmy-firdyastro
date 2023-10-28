import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WatchList from "./pages/WatchList";
import Rate from "./pages/Rate";
import Chatbot from "./pages/Chatbot";
import HowtoUse from "./pages/HowtoUse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Watchlist" element={<WatchList />} />
        <Route path="/Rate" element={<Rate />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/How-to-Use" element={<HowtoUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
