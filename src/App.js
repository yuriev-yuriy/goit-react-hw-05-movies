import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './App.module.css';
import NavBar from './components/navBar/navBar';

const HomeView = lazy(() => import('./views/HomeView.js'));
const MoviesView = lazy(() => import('./views/MoviesView.js'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView.js'));
const NotFoundView = lazy(() => import('./views/NotFoundView.js'));
const LoaderComponent = {
  display: 'flex',
  justifyContent: 'center',
};
console.log('No errors here ))');
function App() {
  return (
    <div className={s.App}>
      <NavBar />
      <Suspense fallback={<Loader style={LoaderComponent} type="Puff" />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
