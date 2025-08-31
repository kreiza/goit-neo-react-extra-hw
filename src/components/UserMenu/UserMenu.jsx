import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Вітаємо, {user.name}</p>
      <button type="button" onClick={handleLogout} className={styles.button}>
        Вийти
      </button>
    </div>
  );
}