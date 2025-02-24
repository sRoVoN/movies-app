import { Children, createContext, useContext, useState } from "react";

const MoviesContext = createContext();

export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = '5f754655';
    const fetchMovies = async (movieTitle, movieYear) => {
      try {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieTitle)}&y=${encodeURIComponent(movieYear)}&type=movie`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (data.Response === 'True') {
          setMovies(data.Search); // Set fetched movies
        } else {
          setMovies([]); // No results
        }
      } catch (err) {
        setError(err.message || 'An error occurred'); // Set error state
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
        
    return (
        <MoviesContext.Provider value={{ movies, loading, error, fetchMovies }}>
          {children}
        </MoviesContext.Provider>
      );
    };

