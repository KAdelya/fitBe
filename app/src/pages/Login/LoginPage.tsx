import styles from "../SignPage/SignPage.module.sass";
import time from "../../assets/images/time.svg";
import { Login } from "../../components/Login/Login";
import { Icon } from "../../components/Icon/Icon";

export const LoginPage = () => {
    return (
        <div className={styles.page_wrapper}>
            {/* <header className={styles.wrapper}>
                <div className={styles.logo_wrapper}> 
                    <Icon name='logo' width={62} height={62} />
                    <p>BeFit</p>
                </div> 
            </header> */}
            <div className={styles.content}>
            <Login />
            </div>
        </div>
    )
}
