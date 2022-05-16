import styles from "../Login/LoginPage.module.sass";
import { Login } from "../../components/Login/Login";
import { Icon } from "../../components/Icon/Icon";

export const LoginPage = () => {
    return (
        <div className={styles.page_wrapper}>
            <Login />
        </div>
    )
}
