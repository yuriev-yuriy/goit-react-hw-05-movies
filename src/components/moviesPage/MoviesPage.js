import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesPage.module.css';
import defaultImg from '../../img/no-image.jpg';

const MoviesPage = ({ list }) => {
  const location = useLocation();

  return (
    <>
      {
        <ul className={s.list}>
          {list.map(({ id, title, backdrop_path }) => (
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
                  src={
                    backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                      : defaultImg
                  }
                  alt={title}
                />
                <p className={s.descr}>{title}</p>
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
