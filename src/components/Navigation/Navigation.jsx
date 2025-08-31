import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Головна
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Контакти
        </NavLink>
      )}
    </nav>
  );
}