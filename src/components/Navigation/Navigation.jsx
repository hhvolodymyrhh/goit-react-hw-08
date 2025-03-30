
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

  return (
    <nav className={css.wrapper}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Phone list
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;