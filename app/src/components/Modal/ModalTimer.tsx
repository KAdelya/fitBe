import style from "../Layouts/ModalLayout/ModalLayout.module.sass";
import { useStore } from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'
import timer from '../../assets/images/time.svg'


export const ModalTimer = () => {
    const { modalStore: { clearCurrentModal } } = useStore()
    return (
        <div>
            <div className={style.wrapper_title}>
                <div className={style.welcome_timer}>
                    <p>Set the time</p>
                    <div>
                        <img src={timer} width={40} />
                    </div>
                </div>
                <div className={style.wrapper_exit_button}>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.set_time_wrapper}>

                    <div className={style.set_time_block}>
                        <p>WORK</p>
                        <input />
                    </div>
                    <div className={style.set_time_block}>
                        <p>REST</p>
                        <input />
                    </div>

                    <div className={style.set_time_block}>
                        <p>ROUNDS</p>
                        <input />
                    </div>

                </div>
                <div className={style.button_wrapper}>
                    <button onClick={clearCurrentModal}>
                        START
                    </button>
                </div>
            </div>
        </div>
    );
}