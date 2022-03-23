import styles from './Sign.module.sass';
import time from "../../assets/images/time.svg";

export const Sign = () => {
    return (
        <div className={styles.input_and_button_wrapper}>
            <div className={styles.login_statement}>Время тренироваться!</div>
            <div className={styles.time}>
                <img src={time} />
            </div>
            <input placeholder='Имя/Email'/>
            <input placeholder='Пароль' type='password'/>
            <div className={styles.button_wrapper}>
                <button>Войти</button>
            </div>
        </div>
    );
}
