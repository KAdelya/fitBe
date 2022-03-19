import styles from "../SignPage/SignPage.module.sass";
import time from "../../assets/images/time.svg";
import {HeaderSignAndRegistration} from "../../components/HeaderSignAndRegisteration/HeaderSignAndRegistration";

export const SignPage = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <div className={styles.upper_content_wrapper}>
                    <HeaderSignAndRegistration/>
                    <div className={styles.input_and_button_wrapper}>
                        <div className={styles.login_statement}>Время тренироваться!</div>
                        <div className={styles.time}>
                            <img src={time} />
                        </div>
                        <input placeholder='Имя/Email'/>
                        <input placeholder='Пароль' />
                        <div className={styles.button_wrapper}>
                            <button>Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
