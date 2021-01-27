import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../services/movieApi';
import s from '../views/CastView.module.css';
import defaultImg from '../img/no-image.jpg';

const CastView = ({ id }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      const data = await API.getCast(id);
      if (!data) {
        return;
      }
      const dataSlice = data.slice(0, 5);
      setCast(dataSlice);
    };
    fetchCast();
  }, [id]);

  return (
    <ul className={s.list}>
      {cast && cast.length ? (
        cast.map(actor => (
          <li key={actor.id} className={s.item}>
            <img
              className={s.img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))
      ) : (
        <p>No info provided</p>
      )}
    </ul>
  );
};

CastView.propTypes = {
  id: PropTypes.number,
};

export default CastView;
