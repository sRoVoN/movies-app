import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchInput({title, year, handleChangeTitle, handleChangeYear, handleClick, searchQuery}) {
  return (
    <div className='form'>
      <div className="form-header">Search By Title</div>
      <div className='input-groups'>
        <div className='title-input'>
        <label>Title</label>
        <input type='text' placeholder='title ...' className='title-input' value={title} onChange={(e) => handleChangeTitle(e.target.value)} />
        </div>
        <div className='title-input'>
        <label>Year</label>
        <input type='text' placeholder='year ...' className='title-input' value={year} onChange={(e) => handleChangeYear(e.target.value)} />
        </div>
      <button className='search-btn' onClick={() => handleClick(title,year)}>
        Search
        <CiSearch className='search-icon' size={20} />
        </button>
      </div>
      <div className='response'>
      <div className='response-header'>Request and Response</div>
      <div className='response-box'>
        <div className='query'>
          <p>Request :</p>
          <a href={searchQuery} target="_blank" rel="noopener noreferrer">{searchQuery}</a>
        </div>
      </div>        
      </div>
    </div>
  )
}

export default SearchInput