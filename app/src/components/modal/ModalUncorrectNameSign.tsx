import style from "../Layouts/ModalLayout/ModalLayout.module.sass";
import { useStore } from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'


export const ModalUncorrectNameSign = () => {
    return (
        <div>
            <div className={style.wrapper_title}>
                <div className={style.welcome_text}>
                    <div className={style.content_suggest}>This user does not exist</div>
                </div>
            </div>
        </div>
    );
}
