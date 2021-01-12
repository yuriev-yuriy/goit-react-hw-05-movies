import { NavLink } from 'react-router-dom';
import s from './navBar.module.css';

const NavBar = () => {
  return (
    <>
      <div className={s.App}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
