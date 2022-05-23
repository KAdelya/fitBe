import styles from '../Login/LoginPage.module.sass';
import { Login } from '../../components/Login/Login';

export const LoginPage = () => {
    return (
        <div className={styles.login_page}>
            <Login />
        </div>
    );
};