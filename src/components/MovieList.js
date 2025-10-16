import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, titleFilter, rateFilter }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            movie.rating >= rateFilter
        )
        .map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
