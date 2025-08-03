import './App.css';
import MoviesTable from './components/MoviesTable';
import Response from './components/Response';
import SearchInput from './components/SearchInput';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <SearchInput />
      <Response />
      <MoviesTable />
    </Wrapper>
  );
}

export default App;
