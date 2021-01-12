import { lazy, Suspense } from 'react';
import {
  NavLink,
  useRouteMatch,
  Route,
  useParams,
  useHistory,
} from 'react-router-dom';
import s from './MovieDetailsView.module.css';
// import ReviewsView from '../views/ReviewsView.js';
// import CastView from '../views/CastView.js';
import MovieDetailsPage from '../components/movieDetailsPage/MovieDetailsPage';

const ReviewsView = lazy(() => import('./ReviewsView.js'));
const CastView = lazy(() => import('./CastView.js'));

const MovieDetailsView = () => {
  const history = useHistory();
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const numbermovieId = Number(movieId);

  const goBackPage = () => {
    history.push(history.location?.state?.from.pathname || '/');
  };
  return (
    <>
      <button className={s.button} onClick={goBackPage}>
        Go back
      </button>
      <MovieDetailsPage />
      <NavLink
        to={`${url}/cast`}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Cast
      </NavLink>
      <NavLink
        to={`${url}/reviews`}
        className={s.link}
        activeClassName={s.activeLink}
      >
        Reviews
      </NavLink>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path="/movies/:movieId/reviews">
          <ReviewsView id={numbermovieId} />
        </Route>
        <Route path="/movies/:movieId/cast">
          <CastView id={numbermovieId} />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsView;
