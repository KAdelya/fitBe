import style from "../Layouts/ModalLayout/ModalLayout.module.sass";
import logo_black from '../../assets/images/logo_black.svg'
import { FC } from "react";

interface Props {
    ccal: number
}
const ModalWelcome: FC<Props> = ({ ccal }) => {
    return (
        <div className={style.welcom_modal}>
            <div className={style.welcom_modal__logo}>
                <img src={logo_black} />
            </div>
            <div className={style.welcom_modal__text}>
                Welcome to Befit!
            </div>
            <div className={style.welcom_modal__info}>
                <div className={style.welcom_modal__info__content}>Based on the registration data, we advise you consume at least {ccal} cal</div>
            </div>
        </div>
    );
}
export default ModalWelcome;