import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../services/movieApi';
import s from '../views/CastView.module.css';

const CastView = ({ id }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      const data = await API.getCast(id);
      const dataSlice = data.slice(0, 5);
      setCast(dataSlice);
    };
    fetchCast();
  }, [id]);

  return (
    cast && (
      <ul className={s.list}>
        {cast.map(actor => (
          <li key={actor.id} className={s.item}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    )
  );
};

CastView.propTypes = {
  id: PropTypes.number,
};

export default CastView;
