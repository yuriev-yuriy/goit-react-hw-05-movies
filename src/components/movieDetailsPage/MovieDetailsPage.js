import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/movieApi';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fethMovie = async () => {
      const movieById = await API.getById(movieId);
      setMovie(movieById);
    };
    fethMovie();
  }, [movieId]);
  return (
    <>
      {movie && (
        <div className={s.wrapper}>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={s.inner}>
            <h2>{movie.title}</h2>
            <p> User score - {movie.vote_average}/10</p>
            <h4> Genres </h4>
            {movie.genres &&
              movie.genres.map(({ id, name }) => (
                <p key={id} className={s.genre}>
                  {name}{' '}
                </p>
              ))}
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
