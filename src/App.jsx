import { useEffect, useState } from 'react';
import './App.css';
import MoviesTable from './components/MoviesTable';
import SearchInput from './components/SearchInput';
import Wrapper from './components/Wrapper';
import { useMovies } from './context/MoviesContext';

function App() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("http://www.omdbapi.com"); 
  const { fetchMovies } = useMovies();
  const apiKey = '5f754655';
  useEffect(() => {
    if (searchQuery) {
      fetchMovies(title, year); // Use searchQuery as a trigger
    }
  }, [searchQuery, title, year, fetchMovies]);

 const handleChangeTitle = (newValue) => {
  setTitle(newValue);
  console.log(newValue);
 }
 const handleChangeYear = (newValue) => {
  setYear(newValue);
  console.log(newValue);
 }
 const handleClick = (title, year) => {
  if (title || year) {

    const query = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}&y=${encodeURIComponent(year)}&type=movie`;
    setSearchQuery(query);
    
    fetchMovies(query);
  } else {
    console.error("Please provide both a title and a year.");
  }
};
  return (
    <>
    <Wrapper>
     <SearchInput title={title}
      year={year}
       handleChangeTitle={handleChangeTitle}
       handleChangeYear={handleChangeYear}
       handleClick={handleClick}
       searchQuery={searchQuery}
        />
     <MoviesTable />
    </Wrapper>
    </>
  )
}

export default App
