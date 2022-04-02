<<<<<<< HEAD
import style from "../Layouts/ModalLayout/ModalLayout.module.sass";
import { useStore } from "../../utils/use-stores-hook";
=======
import style from "../layouts/ModalLayout/Modal.module.sass";
import {useStore} from "../../utils/use-stores-hook";
>>>>>>> ef55964a32c8e9682578d8c8356250b0d66c4148
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUncorrectNameRegistration = () => {
    const { modalStore: { clearCurrentModal } } = useStore()
    return (
        <div>
            <div className={style.wrapper_title}>
                <div className={style.welcome_text}>
                    <div className={style.content_suggest}>This name is already in use!</div>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.button_wrapper}>
                    <button onClick={clearCurrentModal}>
                        UNDERSTANDABLY
                    </button>
                </div>
            </div>
        </div>
    );
}
