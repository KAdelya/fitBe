import styles from "../Layouts/ModalContainer/ModalContainer.module.sass";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUncorrectPasswordSign = () => {
    return (
        <div>
            <div className={styles.wrapper_title}>
                <div className={styles.welcome_text}>
                    <div className={styles.content_suggest}>Invalid password</div>
                </div>
            </div>
        </div>
    );
}
