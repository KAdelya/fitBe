import styles from "../Layouts/ModalContainer/ModalContainer.module.sass";
import { useStore } from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUncorrectNameRegistration = () => {
    return (
        <div>
            <div className={styles.wrapper_title}>
                <div className={styles.welcome_text}>
                    <div className={styles.content_suggest}>This name is already in use!</div>
                </div>
            </div>
        </div>
    );
}
