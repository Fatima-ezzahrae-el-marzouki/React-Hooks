import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid gray", borderRadius: "10px", padding: "1rem", width: "200px" }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
