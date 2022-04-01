import style from "../layouts/Modal.module.sass";
import {useStore} from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'
import {FC} from "react";
interface Props {
    ccal: number
}


export const ModalWelcome: FC<Props> = ({ccal }) =>{
    const {modalStore: {clearCurrentModal}} = useStore()
    return (
        <div>
            <div className={style.wrapper_title}>
                    <div className={style.logo_wrapper}>
                        <img src={logo_black}/>
                    </div>
                    <div className={style.welcome_text}>
                        Добро пожаловать в BeFit!
                    </div>
                <div className={style.wrapper_exit_button}>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.content_suggest}>Исходя из данных регистрации мы советуем <br></br>вам
                    употреблять {ccal} ккал</div>
                <div className={style.button_wrapper}>
                        <button onClick={clearCurrentModal}>
                            Понятно
                        </button>
                </div>
            </div>
        </div>
    );
}
