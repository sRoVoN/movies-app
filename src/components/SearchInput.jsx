import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useMovies } from '../context/MoviesContext';

function SearchInput() {
  const {
    searchTitle,
    searchYear,
    setSearchTitle,
    setSearchYear,
    fetchMovies
  } = useMovies();

  const handleSearch = () => {
    if (searchTitle || searchYear) {
      fetchMovies(searchTitle, searchYear);
    }
  };

  return (
    <div className='form'>
      <div className="form-header">Search By Title</div>
      <div className='input-groups'>
        <div className='title-input'>
          <label>Title</label>
          <input
            type='text'
            placeholder='title ...'
            className='title-input'
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div className='title-input'>
          <label>Year</label>
          <input
            type='text'
            placeholder='year ...'
            className='title-input'
            value={searchYear}
            onChange={(e) => setSearchYear(e.target.value)}
          />
        </div>
        <button className='search-btn' onClick={handleSearch}>
          Search
          <CiSearch className='search-icon' size={20} />
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
