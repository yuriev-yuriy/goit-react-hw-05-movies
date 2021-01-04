import { Switch, NavLink, Route } from 'react-router-dom';
import s from './App.css';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
