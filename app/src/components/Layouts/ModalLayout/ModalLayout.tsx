import style from './ModalLayout.module.sass';
import { FC } from 'react';;

interface Props {}

export const Modal: FC<Props> = ({children }) => {
    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <div className={style.modal_wrapper}>
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Modal;