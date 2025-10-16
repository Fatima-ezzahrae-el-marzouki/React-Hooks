import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid gray", borderRadius: "10px", padding: "1rem", width: "200px" }}>
      <Link to={`/movie/${movie.title}`}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: "100%", borderRadius: "10px" }} />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
