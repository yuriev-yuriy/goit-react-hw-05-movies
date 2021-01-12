import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './App.module.css';
import NavBar from './components/navBar/navBar';
// import HomeView from './views/HomeView';
// import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';
import NotFoundView from './views/NotFoundView';

const HomeView = lazy(() => import('./views/HomeView.js'));
const MoviesView = lazy(() => import('./views/MoviesView.js'));
// const MovieDetailsView = lazy(() => lazy('./views/MovieDetailsView.js'));
// const NotFoundView = lazy(() => lazy('./views/NotFoundView.js'));

function App() {
  return (
    <div className={s.App}>
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
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
