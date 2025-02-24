import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useMovies } from '../context/MoviesContext';
import NotFound from './NotFound';
import { IoReturnDownBack } from "react-icons/io5";

function Movie() {
    const {MovieId} = useParams();
    const {movies, loading, error} = useMovies();
    console.log(movies);
    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>{error}</p>;
      }
      const movie = movies.find((movie) => movie.imdbID === MovieId);
      if (!movie) {
        return <NotFound/>;
      }
  return (
    <>
    <div className='card'>
      <div>
      <div className='card__title'>
        <p>{`Title : ${movie.Title}`}</p>
      </div>
      <div className='card__type'>
       <p>{`Type : ${movie.Type}`}</p>
      </div>
      <div className='card__year'>
      <p>{`Year : ${movie.Year}`}</p>
      </div>
      </div>
      <div className='card__poster'>
        <p>Movie Poster : </p>
        <img src={movie.Poster} />
      </div>
    </div>
    <Link to="/">
    <IoReturnDownBack size={30} color='green' className='card__icon' />
    </Link>
    </>
  )
}
export default Movie;