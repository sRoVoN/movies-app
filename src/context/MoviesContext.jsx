import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("https://www.omdbapi.com");

  const apiKey = "5f754655";

  const fetchMovies = async (movieTitle, movieYear) => {
    setLoading(true);
    setError(null);
    setSearchTitle(movieTitle);
    setSearchYear(movieYear);
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
      movieTitle
    )}&y=${encodeURIComponent(movieYear)}&type=movie`;
    setSearchQuery(url);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        error,
        fetchMovies,
        searchTitle,
        searchYear,
        searchQuery,
        setSearchTitle,
        setSearchYear
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
