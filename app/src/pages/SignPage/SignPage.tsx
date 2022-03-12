import styles from "../SignPage/SignPage.module.sass";
import {Icon} from "../../components/Icon/Icon";
import time from "../../assets/images/time.svg";

export const SignPage = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <div className={styles.upper_content_wrapper}>
                    <header className={styles.header}>
                        <div className={styles.header_wrapper}>
                            <div className={styles.logo_wrapper}>
                                <Icon name="logo" width="85" height="62"/>
                                <p>BeFit</p>
                            </div>
                        </div>
                    </header>
                    <div className={styles.input_and_button_wrapper}>
                        <div className={styles.login_statement}>Время тренироваться!</div>
                        <img src={time} className={styles.time}/>
                        <input placeholder='Имя/Email'/>
                        <input placeholder='Пароль'/>
                        <div className={styles.button_wrapper}>
                            <button>Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}
