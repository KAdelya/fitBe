import styles from '../Containers/ModalContainer/ModalContainer.module.sass';
import logo_black from '../../assets/images/logo_black.svg';
import { useAppSelector } from '../../utils/redux-hooks';



export const ModalWelcome = () => {
    const { generalCalories} = useAppSelector(state => state.activity);
    return (
        <div className={styles.welcome_modal}>
            <div className={styles.welcome_modal__logo}>
                <img src={logo_black} alt='logo'/>
            </div>
            <div className={styles.welcome_modal__text}>
                Welcome to Befit!
            </div>
            <div className={styles.welcome_modal__info}>
                <div className={styles.welcome_modal__info__content}>
                    Based on the registration data, we advise you consume at least {generalCalories} cal</div>
            </div>
        </div>
    );
};