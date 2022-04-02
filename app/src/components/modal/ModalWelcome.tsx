<<<<<<< HEAD
import style from "../Layouts/ModalLayout/ModalLayout.module.sass";
import { useStore } from "../../utils/use-stores-hook";
=======
import style from "../layouts/ModalLayout/Modal.module.sass";
import {useStore} from "../../utils/use-stores-hook";
>>>>>>> ef55964a32c8e9682578d8c8356250b0d66c4148
import logo_black from '../../assets/images/logo_black.svg'
import { FC } from "react";
interface Props {
    ccal: number
}


export const ModalWelcome: FC<Props> = ({ ccal }) => {
    const { modalStore: { clearCurrentModal } } = useStore()
    return (
        <div>
            <div className={style.wrapper_title}>
                <div className={style.logo_wrapper}>
                    <img src={logo_black} />
                </div>
                <div className={style.welcome_text}>
                    Welcome to Befit!
                </div>
                <div className={style.wrapper_exit_button}>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.content_suggest}>Based on the registration data, we advise you consume at least {ccal} cal</div>
                <div className={style.button_wrapper}>
                    <button onClick={clearCurrentModal}>
                        UNDERSTANDABLY
                    </button>
                </div>
            </div>
        </div>
    );
}
