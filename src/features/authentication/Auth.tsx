import styles from './styles/authentication.module.scss';
import { Outlet } from 'react-router';

function Auth() {
  return (
    <section className={styles['auth']}>
      <Outlet />
    </section>
  );
}

export default Auth;
