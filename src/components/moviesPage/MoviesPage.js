import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesPage.module.css';

const MoviesPage = ({ list }) => {
  const location = useLocation();

  return (
    <>
      {
        <ul className={s.list}>
          {list.map(movie => (
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
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <p className={s.descr}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

MoviesPage.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default MoviesPage;
