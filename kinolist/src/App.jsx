import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WatchList from "./pages/WatchList";
import Rate from "./pages/Rate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Watchlist" element={<WatchList />} />
        <Route path="/Rate" element={<Rate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
