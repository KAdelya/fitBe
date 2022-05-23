import styles from '../Containers/ModalContainer/ModalContainer.module.sass';
import logo_black from '../../assets/images/logo_black.svg';


export const ModalUncorrectNameRegistration = () => {
    return (
        <div className={styles.uncorrect_name_modal}>
            <div className={styles.uncorrect_name_modal__logo}>
                <img src={logo_black} alt='logo'/>
            </div>
            <div className={styles.uncorrect_name_modal__info}>
                <div className={styles.uncorrect_name_modal__info__content}>This name is already in use!
                </div>
            </div>
        </div>
    );
};
