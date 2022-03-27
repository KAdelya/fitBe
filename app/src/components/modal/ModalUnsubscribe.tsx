import style from "../layouts/Modal.module.sass";
import {useStore} from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUnsubscribe = () => {
    const {modalStore: {clearCurrentModal}} = useStore()
    return (
        <div>
            <div className={style.wrapper_title}>
                <div className={style.welcome_text}>
                <div className={style.content_suggest}>Вы уверены, что хотите отписаться?</div>
                </div>
            </div>
                <div className={style.content_wrapper}>
                <div className={style.button_wrapper}>
                    <button onClick={clearCurrentModal}>
                        Отменить подписку
                    </button>
                </div>
            </div>
        </div>
    );
}
