import styles from './Registration.module.sass';

export const Registration = () => {
    return (
        <div className={styles.input_and_button_wrapper}>
            <div className={styles.question_register}>Зарегистрируемся?</div>
            <input placeholder='Email' type='email'/>
            <input placeholder='Имя' type='name'/>
            <input placeholder='Пароль' type='password'/>
            <input placeholder='Подтверждение пароля' type='password'/>
            <div className={styles.button_wrapper}>
                <button>Зарегистрироваться</button>
            </div>
        </div>
    );
}
