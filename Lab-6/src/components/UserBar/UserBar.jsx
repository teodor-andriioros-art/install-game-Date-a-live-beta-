import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '../Button/Button';
import styles from './UserBar.module.css';

export default function UserBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div className={styles.bar}>
      <span>Ви увійшли як: {user.guest ? 'гість' : user.email}</span>
      <Button onClick={handleLogout}>Вийти</Button>
    </div>
  );
}
