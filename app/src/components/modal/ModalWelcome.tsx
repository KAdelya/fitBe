import styles from '../Containers/ModalContainer/ModalContainer.module.sass';
import logo_black from '../../assets/images/logo_black.svg';
import { FC } from 'react';;

interface Props {
    ccal: number
}
export const ModalWelcome: FC<Props> = ({ ccal }) => {
    return (
        <div className={styles.welcome_modal}>
            <div className={styles.welcome_modal__logo}>
                <img src={logo_black} alt='logo'/>
            </div>
            <div className={styles.welcome_modal__text}>
                Welcome to Befit!
            </div>
            <div className={styles.welcome_modal__info}>
                <div className={styles.welcome_modal__info__content}>Based on the registration data, we advise you consume at least {ccal} cal</div>
            </div>
        </div>
    );
};