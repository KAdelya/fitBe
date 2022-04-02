import style from './ModalLayout.module.sass';
import { FC } from 'react';
import { useStore } from "../../../utils/use-stores-hook";
<<<<<<< HEAD:app/src/components/Layouts/ModalLayout/ModalLayout.tsx
import {ModalWelcome} from "../../Modal/ModalWelcome";
=======
import {ModalWelcome} from "../../modal/ModalWelcome";
>>>>>>> ef55964a32c8e9682578d8c8356250b0d66c4148:app/src/components/Layouts/ModalLayout/ModalLayout/Modal.tsx

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