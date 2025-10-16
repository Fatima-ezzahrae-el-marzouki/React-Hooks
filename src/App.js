import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      rating: 9,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL: "https://tse2.mm.bing.net/th/id/OIP.mIAEbilfpzD99yhpUECS1wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 8,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const addMovie = () => {
    if (newMovie.title && newMovie.posterURL && newMovie.rating) {
      setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🎬 My Movie App</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        rateFilter={rateFilter}
        setRateFilter={setRateFilter}
      />

      <div style={{ marginBottom: "2rem" }}>
        <h2>Add a New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <MovieList movies={movies} titleFilter={titleFilter} rateFilter={rateFilter} />
    </div>
  );
}

export default App;

