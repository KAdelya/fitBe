import styles from './HeaderMainAndQuestionnaire.module.sass';
import {Icon} from "../Icon/Icon";

export const HeaderMainAndQuestionnaire = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={styles.logo_wrapper}>
                    <Icon name="logo" width="85" height="62" />
                    <p>BeFit</p>
                </div>
                <div className={styles.button_wrapper}>
                    <a type='button' href='/sign'>Войти</a>
                </div>
            </div>
        </header>
    );
}
