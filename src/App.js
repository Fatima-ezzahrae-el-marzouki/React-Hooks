import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Filter from "./components/Filter";

function App() {
  // Movie array with description and trailerURL
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      rating: 9,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL: "https://m.media-amazon.com/images/I/71n58aYqrdL._AC_SY679_.jpg",
      rating: 8,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker in this action-packed thriller.",
      posterURL: "https://m.media-amazon.com/images/I/51k0qa6uJ-L._AC_.jpg",
      rating: 10,
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center" }}>
              <h1>🎬 My Movie App</h1>
              <Filter
                titleFilter={titleFilter}
                setTitleFilter={setTitleFilter}
                rateFilter={rateFilter}
                setRateFilter={setRateFilter}
              />
              <MovieList movies={movies} titleFilter={titleFilter} rateFilter={rateFilter} />
            </div>
          }
        />

        {/* Movie detail page */}
        <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
