import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import API from '../services/movieApi';
import MoviesPage from '../components/moviesPage/MoviesPage';

const MoviesView = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(() =>
    JSON.parse(localStorage.getItem('movies')),
  );
  const history = useHistory();
  const location = useLocation();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fetchByName = async () => {
      const data = await API.getByName(value);
      console.log(data);
      setMovies(data);
    };
    fetchByName();
    history.push({
      ...location,
      search: `query=${value}`,
    });
    window.localStorage.setItem('storagedQuery', JSON.stringify(value));
  };

  useEffect(() => {
    if (location.search !== '') {
      return;
    }

    history.push({
      ...location,
      search: `query=${JSON.parse(localStorage.getItem('storagedQuery'))}`,
    });
  }, [history, location]);

  useEffect(() => {
    window.localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter film..."
          value={value}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {movies && movies.map(movie => <MoviesPage list={movies} />)}
    </>
  );
};

export default MoviesView;
