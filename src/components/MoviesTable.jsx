import React from 'react'
import { Link } from 'react-router-dom';
import { useMovies } from '../context/MoviesContext';

function MoviesTable() {
      const {movies, loading, error} = useMovies();
      if (loading) {
          return <p>Loading...</p>;
        }
      
        if (error) {
          return <p>{error}</p>;
        }

  return (
    <div className='movies-table'>
        <div className="table-row header-row">
    <div className="table-cell">Title</div>
    <div className="table-cell">Year</div>
  </div>
      {
        movies.length > 0 ? (movies.map((movie, index) => (
          <div key={index} className="table-row">
          <div className="table-cell">  
            <Link to={`/${movie.imdbID}`}>
            {movie.Title}
            </Link>          
            </div>
          <div className="table-cell">
            {movie.Year}
            </div>
          </div>

        ))) : (<p>No movies found. Please try another search.</p>)
      }
    </div>
  )
}

export default MoviesTable