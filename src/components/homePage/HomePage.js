import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from '../../services/movieApi';
import s from './HomePage.module.css';
import defaultImg from '../../img/no-image.jpg';

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
          movies.map(movie => (
            <li className={s.item} key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <img
                  className={s.img}
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                />
                <p className={s.descr}>{movie.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
