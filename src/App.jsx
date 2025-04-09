// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
