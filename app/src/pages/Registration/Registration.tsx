import styles from "../Registration/Registration.module.sass";
import {Icon} from "../../components/Icon/Icon";

export const Registration = () => {
    return (<div className={styles.page_content}>
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
                    <div className={styles.question_register}>Зарегистрируемся?</div>
                    <input placeholder='Email'/>
                    <input placeholder='Имя'/>
                    <input placeholder='Пароль'/>
                    <input placeholder='Подтверждение пароля'/>
                    <div className={styles.button_wrapper}>
                        <button>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
