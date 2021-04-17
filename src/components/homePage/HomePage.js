import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import API from '../../services/movieApi';
import s from './HomePage.module.css';
import defaultImg from '../../img/no-image-small.jpg';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    const getMovies = async () => {
      const data = await API.get(page);
      const newList = data.results
        .map(movie => movie)
        .filter(movie => movie?.title);
      setMovies(newList);
      setTotalPages(data.total_pages);
    };
    getMovies();
  }, [page]);

  const onChangePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

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
      <Pagination
        className={s.pag}
        shape={'round'}
        count={totalPages}
        onChange={onChangePage}
        page={Number(page)}
        showFirstButton
        showLastButton
        size="large"
      />
    </>
  );
};

export default HomePage;
