import style from './Modal.module.sass';
import { FC } from 'react';
import { useStore } from "../../utils/use-stores-hook";
import {ModalWelcome} from "../modal/ModalWelcome";

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
