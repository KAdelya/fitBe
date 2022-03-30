import style from "../layouts/Modal.module.sass";
import {useStore} from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalWelcome = () => {
    const {modalStore: {clearCurrentModal}} = useStore()
    return (
        <div>
            <div className={style.wrapper_title}>
                    <div className={style.logo_wrapper}>
                        <img src={logo_black}/>
                    </div>
                    <div className={style.welcome_text}>
                    Welcome to Befit!
                    </div>
                <div className={style.wrapper_exit_button}>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.content_suggest}>Based on the registration data, we advise you<br></br>вам
                consume at least 2000 kcal</div>
                <div className={style.button_wrapper}>
                        <button onClick={clearCurrentModal}>
                            Understandably
                        </button>
                </div>
            </div>
        </div>
    );
}
