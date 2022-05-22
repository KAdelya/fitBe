import styles from "../Containers/ModalContainer/ModalContainer.module.sass";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUncorrectNameSign = () => {
    return (
        <div>
            <div className={styles.wrapper_title}>
                <div className={styles.welcome_text}>
                    <div className={styles.content_suggest}>Invalid username or password</div>
                </div>
            </div>
        </div>
    );
}
