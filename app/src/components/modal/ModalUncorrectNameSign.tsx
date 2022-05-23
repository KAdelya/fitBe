import styles from "../Containers/ModalContainer/ModalContainer.module.sass";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUncorrectNameOrPasswordSign = () => {
    return (
    <div className={styles.uncorrect_name_or_password_modal}>
        <div className={styles.uncorrect_name_or_password_modal__logo}>
            <img src={logo_black}/>
        </div>
        <div className={styles.uncorrect_name_or_password_modal__info}>
            <div className={styles.uncorrect_name_or_password_modal__info__content}>Invalid username or password
            </div>
        </div>
    </div>
    );
}
