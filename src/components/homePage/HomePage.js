import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from '../../services/movieApi';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      const data = await API.get('trending/all/day');
      setMovies(data);
    };
    getMovies();
  }, []);
  return (
    <>
      <ul className={s.list}>
        {movies &&
          movies.map(({ id, title, backdrop_path }) => (
            <li className={s.item} key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                  alt={title}
                />
                <p className={s.descr}>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
